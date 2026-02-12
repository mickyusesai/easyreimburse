import clsx from 'clsx';

export default function Card({
  children,
  highlighted = false,
  className,
}: {
  children: React.ReactNode;
  highlighted?: boolean;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        'rounded-2xl bg-white p-6 lg:p-8 transition-all duration-200',
        highlighted
          ? 'ring-2 ring-primary-500 shadow-xl shadow-primary-500/10'
          : 'ring-1 ring-gray-200 shadow-sm hover:shadow-md',
        className,
      )}
    >
      {children}
    </div>
  );
}
