import Container from '@/components/ui/Container';
import AutoplayVideo from '@/components/ui/AutoplayVideo';
import { VIDEO } from '@/lib/constants';

/** The product video in a white card that overlaps the bottom of the hero. */
export default function HowItWorksVideo() {
  return (
    <section className="relative z-10 -mt-28 sm:-mt-36 lg:-mt-48 pb-4">
      <Container>
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-white p-4 sm:p-6 lg:p-8 shadow-2xl shadow-primary-900/30 ring-1 ring-gray-100">
          <div className="mb-5 flex flex-col gap-1 px-2 sm:mb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider gradient-text">See it in action</p>
              <h2 className="mt-1 text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">How it works</h2>
            </div>
            <p className="text-sm text-text-secondary">One full reimbursement, start to finish, in under a minute.</p>
          </div>
          <AutoplayVideo webm={VIDEO.webm} mp4={VIDEO.mp4} poster={VIDEO.poster} label={VIDEO.label} />
        </div>
      </Container>
    </section>
  );
}
