import fs from 'node:fs';
import path from 'node:path';
import Image from 'next/image';
import Container from '@/components/ui/Container';

/**
 * Shows a real product screenshot with a caption. Pages are prerendered at build
 * time, so if the PNG is not yet in /public the slot renders nothing instead of a
 * broken image: drop the file in and redeploy to make it appear.
 */
export default function ProductScreenshot({
  src,
  caption,
  width,
  height,
}: {
  src: string;
  caption: string;
  width: number;
  height: number;
}) {
  if (!fs.existsSync(path.join(process.cwd(), 'public', src))) return null;

  return (
    <section className="py-16 lg:py-20">
      <Container>
        <figure className="mx-auto max-w-sm">
          <div className="overflow-hidden rounded-[2rem] ring-8 ring-primary-950 shadow-2xl shadow-primary-500/20">
            <Image src={src} alt={caption} width={width} height={height} className="w-full h-auto" sizes="384px" />
          </div>
          <figcaption className="mt-5 text-center text-sm font-medium text-text-secondary">{caption}</figcaption>
        </figure>
      </Container>
    </section>
  );
}
