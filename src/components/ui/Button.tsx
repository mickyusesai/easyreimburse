import Link from 'next/link';
import clsx from 'clsx';

const variants = {
  primary:
    'gradient-brand text-white hover:opacity-90 shadow-lg shadow-primary-500/25',
  secondary:
    'bg-white text-primary-600 border-2 border-primary-200 hover:border-primary-400 hover:bg-primary-50',
  outline:
    'bg-transparent text-white border-2 border-white/30 hover:bg-white/10',
  ghost:
    'bg-transparent text-primary-600 hover:bg-primary-50',
} as const;

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
} as const;

type ButtonProps = {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  href?: string;
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = clsx(
    'inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 cursor-pointer',
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    const isExternal = href.startsWith('http');
    if (isExternal) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
