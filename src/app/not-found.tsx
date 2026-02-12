import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <section className="py-32 lg:py-48">
      <Container className="text-center">
        <p className="text-7xl font-bold gradient-text">404</p>
        <h1 className="mt-4 text-2xl font-bold text-text-primary sm:text-3xl">
          Page not found
        </h1>
        <p className="mt-3 text-text-secondary max-w-md mx-auto">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have been moved or
          doesn&apos;t exist.
        </p>
        <div className="mt-8">
          <Button href="/">Back to Home</Button>
        </div>
      </Container>
    </section>
  );
}
