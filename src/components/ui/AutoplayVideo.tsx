'use client';

import { useEffect, useRef, useState } from 'react';
import { SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/solid';

/**
 * Muted video that plays while it is on screen and pauses when scrolled away.
 * Visitors who prefer reduced motion get the poster and native controls instead.
 */
export default function AutoplayVideo({
  webm,
  mp4,
  poster,
  label,
}: {
  webm: string;
  mp4: string;
  poster: string;
  label: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Browsers may still refuse autoplay (e.g. data saver); the controls remain usable then.
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  function toggleSound() {
    const video = ref.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
    if (!video.muted) video.play().catch(() => {});
  }

  return (
    <div className="relative overflow-hidden rounded-2xl bg-primary-950 shadow-xl ring-1 ring-black/5">
      <video
        ref={ref}
        className="block w-full aspect-video"
        poster={poster}
        muted
        loop
        playsInline
        controls
        preload="metadata"
        aria-label={label}
      >
        {/* WebM for Chrome/Firefox/Edge, MP4 (H.264) for Safari */}
        <source src={webm} type="video/webm" />
        <source src={mp4} type="video/mp4" />
      </video>
      <button
        type="button"
        onClick={toggleSound}
        className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm transition hover:bg-black/75"
      >
        {muted ? <SpeakerXMarkIcon className="h-4 w-4" /> : <SpeakerWaveIcon className="h-4 w-4" />}
        {muted ? 'Sound on' : 'Sound off'}
      </button>
    </div>
  );
}
