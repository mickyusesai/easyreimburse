import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { SITE } from '@/lib/constants';

export default function CTABanner() {
  return (
    <section className="py-20 lg:py-28 gradient-brand">
      <Container className="text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Ready to simplify your Erasmus+ reimbursements?
        </h2>
        <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
          Start for free with up to 10 participants. No credit card required.
        </p>
        <div className="mt-8">
          <Button href={SITE.registerUrl} variant="outline" size="lg">
            Start Free
          </Button>
        </div>
      </Container>
    </section>
  );
}
