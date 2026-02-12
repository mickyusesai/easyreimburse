import clsx from 'clsx';

export default function GradientText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <span className={clsx('gradient-text', className)}>{children}</span>;
}
