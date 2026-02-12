import clsx from 'clsx';

export default function Badge({
  children,
  variant = 'gradient',
  className,
}: {
  children: React.ReactNode;
  variant?: 'gradient' | 'outline';
  className?: string;
}) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold',
        variant === 'gradient' && 'gradient-brand text-white',
        variant === 'outline' && 'border border-primary-300 text-primary-600 bg-primary-50',
        className,
      )}
    >
      {children}
    </span>
  );
}
