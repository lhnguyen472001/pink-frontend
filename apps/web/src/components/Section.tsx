// components/shared/Section.tsx
import { cn, designTokens } from '@/lib/design-tokens';
import type { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'primary' | 'secondary' | 'neutral' | 'hero';
  size?: 'sm' | 'md' | 'lg';
  container?: 'default' | 'narrow' | 'wide' | 'none';
  id?: string;
}

const variants = {
  default: 'bg-white',
  primary: 'bg-accent-lightPink',
  secondary: 'bg-secondary-100',
  neutral: 'bg-gray-50',
  hero: designTokens.gradients.primary,
};

const sizes = {
  sm: designTokens.spacing.section.sm,
  md: designTokens.spacing.section.md,
  lg: designTokens.spacing.section.lg,
};

const containers = {
  default: designTokens.spacing.container,
  narrow: designTokens.spacing.containerNarrow,
  wide: designTokens.spacing.containerWide,
  none: '',
};

export function Section({
  children,
  className,
  variant = 'default',
  size = 'md',
  container = 'narrow',
  id,
}: SectionProps) {
  const sectionClasses = cn(
    variants[variant],
    sizes[size],
    className
  );

  const content = container === 'none' ? children : (
    <div className={containers[container]}>
      {children}
    </div>
  );

  return (
    <section id={id} className={sectionClasses}>
      {content}
    </section>
  );
}

export default Section;