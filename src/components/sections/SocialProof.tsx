import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';

/* TODO: Replace with real statistics */
const stats = [
  { value: '500+', label: 'Projects Managed' },
  { value: '10,000+', label: 'Participants Served' },
  { value: '25+', label: 'Countries' },
];

/* TODO: Replace with real testimonials */
const testimonials = [
  {
    quote:
      'EasyReimburse saved us countless hours on our last youth exchange. The AI data extraction is incredibly accurate and the participants loved how easy it was.',
    author: 'Project Coordinator',
    org: 'Youth Organization, Germany',
  },
  {
    quote:
      'We used to spend two weeks processing reimbursements after every training course. Now it takes us a single afternoon. An absolute game-changer.',
    author: 'Financial Manager',
    org: 'NGO, Poland',
  },
  {
    quote:
      'The magic link system is brilliant. Our participants don\'t need to create accounts or figure out complicated tools. They just upload and go.',
    author: 'Project Manager',
    org: 'Association, Spain',
  },
];

export default function SocialProof() {
  return (
    <section className="py-20 lg:py-28 bg-surface-alt">
      <Container>
        <SectionHeading
          title="Trusted by Organizations Across Europe"
          subtitle="Join hundreds of organizations already simplifying their Erasmus+ reimbursements."
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
