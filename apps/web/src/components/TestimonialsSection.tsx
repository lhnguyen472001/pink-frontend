import { Card, CardContent } from '@/components/ui/card';
import { cn, componentPresets, designTokens } from '@/lib/design-tokens';
import Image, { type StaticImageData } from 'next/image';

interface Testimonial {
  avatar: StaticImageData,
  quote: string;
  author: string;
  position: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <div className={cn(designTokens.grid.cols3, designTokens.spacing.gap.md)}>
      {testimonials.map((testimonial, index) => (
        <Card
          key={index}
          className={cn(
            componentPresets.card.interactive,
            'bg-white flex flex-col'
          )}
        >
          <CardContent className={cn(
            designTokens.spacing.card.padding,
            'flex flex-col gap-4 h-full'
          )}>
            {/* Quote Icon */}
            <div className="flex justify-between items-start">
              <svg
                className="w-8 h-8 text-gray-300"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
              </svg>
            </div>

            {/* Quote */}
            <blockquote className="flex-1">
              <p className={cn(designTokens.typography.bodySmall, 'text-gray-600')}>
                &ldquo;{testimonial.quote}&rdquo;
              </p>
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
              {testimonial.avatar ? (
                <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-blue-500/20">
                  <Image
                    src={testimonial?.avatar || ""}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className={cn(
                  "w-12 h-12 rounded-full",
                  "bg-linear-to-br from-blue-500 to-purple-600",
                  "flex items-center justify-center",
                  "ring-2 ring-blue-500/20"
                )}>
                  <span className="text-white font-semibold text-lg">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
              )}
              <div className="flex-1 min-w-0">
                <p className={cn(designTokens.typography.bodySmall, 'font-semibold text-gray-800')}>
                  {testimonial.author}
                </p>
                <p className={cn(designTokens.typography.caption, 'text-gray-500 truncate')}>
                  {testimonial.position}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}