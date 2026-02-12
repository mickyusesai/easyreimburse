import clsx from 'clsx';

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  gradient = false,
}: {
  title: string;
  subtitle?: string;
  centered?: boolean;
  gradient?: boolean;
}) {
  return (
    <div className={clsx(centered && 'text-center', 'mb-12 lg:mb-16')}>
      <h2
        className={clsx(
          'text-3xl font-bold tracking-tight sm:text-4xl',
          gradient && 'gradient-text',
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
