import React from 'react';
import { Link } from 'react-router-dom';

// Polymorphic button: renders a router <Link> (to), an <a> (href), or a <button>.
const base =
  'inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-300 ' +
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4C9DF0] ' +
  'disabled:opacity-60 disabled:cursor-not-allowed';

const variants = {
  primary: 'bg-primary text-white hover:bg-primary-hover shadow-lg hover:shadow-primary/40 hover:-translate-y-0.5',
  secondary: 'bg-white/10 text-white border border-white/15 backdrop-blur-md hover:bg-white/20 hover:-translate-y-0.5',
  outline: 'border border-primary/50 text-primary hover:bg-primary/10',
  ghost: 'text-text-secondary hover:text-primary',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3',
  lg: 'px-8 py-4 text-lg',
};

const Spinner = () => (
  <span
    aria-hidden
    className="inline-block w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin"
  />
);

const Button = ({
  as,
  to,
  href,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  className = '',
  children,
  ...props
}) => {
  const classes = `${base} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;
  const content = loading ? (
    <>
      <Spinner />
      <span>Working…</span>
    </>
  ) : (
    children
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }
  const Tag = as || 'button';
  return (
    <Tag className={classes} disabled={disabled || loading} aria-busy={loading || undefined} {...props}>
      {content}
    </Tag>
  );
};

export default Button;
