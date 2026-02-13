import Image from 'next/image';
import Container from '@/components/ui/Container';

export default function PageHeader({
  title,
  subtitle,
  imageSrc,
  imageAlt,
}: {
  title: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt: string;
}) {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 lg:py-36">
      {/* Background image */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />

      {/* Dark gradient overlay matching TravelBanner style */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-950/90 via-primary-900/80 to-primary-950/70" />

      {/* Content */}
      <Container className="relative text-center">
        <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </Container>
    </section>
  );
}
