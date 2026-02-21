import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';

const stats = [
  { value: '90%', label: 'Less time spent' },
  { value: '10+', label: 'Years of Erasmus+ experience' },
  { value: '27', label: 'Countries' },
];

const testimonials = [
  {
    quote:
      'The function I most like about this software is that you can email a reminder to those who have not completed their reimbursement, with one click. Not to one, but to all who have not completed it. The amount of time EasyReimburse saves me as a project coordinator must be over 20 hours or so.',
    author: 'Project Coordinator',
    org: 'Coalivia, The Netherlands',
  },
  {
    quote:
      'After using this it feels ridiculous how we did it before as an organisation, letting participants upload their files in a Google Drive and asking to name them a specific way and then fill in a spreadsheet using those same names. Such a lot of things could and did go wrong there, making this process very frustrating. That\'s all over with this new age of technology. If you ever wondered what is the use case of AI, this will convince you.',
    author: 'Project Coordinator',
    org: 'Arbre en Fleurs Association, France',
  },
  {
    quote:
      'I simply love this tool. It\'s so easy to use for both organisations and participants. One thing I specifically like is\u2026 every damn thing. But also the fact that different currencies are automatically exchanged by the AI using the official EU exchange rates based on the purchase dates of the tickets. I mean, what the heck, how is that even possible haha!',
    author: 'Project Coordinator',
    org: 'Stichting Be Innovated, The Netherlands',
  },
];

export default function SocialProof() {
  return (
    <section className="py-20 lg:py-28 bg-surface-alt">
      <Container>
        <SectionHeading
          title="Trusted by Organizations Across Europe"
          subtitle="Join frontier organisations already simplifying their Erasmus+ reimbursements."
        />

        {/* Stats */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-bold gradient-text lg:text-5xl">{stat.value}</p>
              <p className="mt-2 text-sm text-text-secondary">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white p-6 lg:p-8 ring-1 ring-gray-100 shadow-sm"
            >
              <div className="text-4xl text-primary-200 leading-none mb-3">&ldquo;</div>
              <p className="text-text-secondary italic leading-relaxed text-sm">{t.quote}</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full gradient-brand opacity-60" />
                <div>
                  <p className="text-sm font-medium text-text-primary">{t.author}</p>
                  <p className="text-xs text-text-muted">{t.org}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
