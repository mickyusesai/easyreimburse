import Image from 'next/image';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

const WEBINAR_URL =
  'https://demodernenomaden.webinargeek.com/watch/replay/5881946/4e1321d1207d3ec61d9cbb388f53c2e7/';

export default function WebinarBanner() {
  return (
    <section className="py-20 lg:py-28 bg-surface-alt">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Video thumbnail */}
          <a
            href={WEBINAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block aspect-video rounded-2xl overflow-hidden ring-1 ring-gray-200 shadow-xl"
          >
            <Image
              src="/webinar-easyreimburse.png"
              alt="EasyReimburse live demo webinar"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/30 transition-opacity duration-300 group-hover:bg-black/20" />

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 shadow-2xl transition-transform duration-300 group-hover:scale-110">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-8 w-8 text-primary-600 ml-1"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </a>

          {/* Text content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider gradient-text">
              Live Demo
            </p>
            <h2 className="mt-3 text-3xl font-bold text-text-primary sm:text-4xl">
              See EasyReimburse in Action
            </h2>
            <p className="mt-4 text-lg text-text-secondary leading-relaxed">
              Watch a full live demo of EasyReimburse starting at minute 20. It shows exactly how the
              tool works in practice — from project setup to final export. No registration needed.
            </p>
            <p className="mt-3 text-text-secondary leading-relaxed">
              This webinar was attended by 28 organisations. Check the live chat for their
              reactions!
            </p>
            <div className="mt-8">
              <Button href={WEBINAR_URL} variant="primary" size="lg">
                Watch the Demo
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
