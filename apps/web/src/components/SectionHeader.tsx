// components/shared/SectionHeader.tsx
import { cn, designTokens } from '@/lib/design-tokens';
import type { ReactNode } from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  description?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  badge,
  description,
  align = 'center',
  className,
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';
  const maxWidth = align === 'center' ? 'max-w-3xl' : 'max-w-none';

  return (
    <div className={cn(alignClass, maxWidth, 'mb-12 md:mb-16', className)}>
      {badge && (
        <div className={cn('mb-4', align === 'center' ? 'flex justify-center' : '')}>
          <span className="inline-block bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-xs md:text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-wide">
            {badge}
          </span>
        </div>
      )}
      
      {subtitle && (
        <p className="text-sm md:text-base font-semibold text-primary-400 uppercase tracking-wide mb-3">
          {subtitle}
        </p>
      )}
      
      <h2 className={cn(designTokens.typography.h2, 'text-gray-900 mb-4')}>
        {title}
      </h2>
      
      {description && (
        <div className={cn(designTokens.typography.lead, 'text-gray-600')}>
          {description}
        </div>
      )}
    </div>
  );
}

export default SectionHeader;