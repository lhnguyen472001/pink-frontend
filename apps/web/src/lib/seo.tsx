// lib/seo.ts

import type { Metadata } from "next";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
}

const SITE_NAME = 'Pink Accounting & Tax Solutions';
const SITE_URL = 'https://pinktax.com.au';
const DEFAULT_IMAGE = '/og-image.jpg';

export function generateSEO({
  title,
  description = 'Brisbane-based accounting firm helping South-East Queensland businesses scale with confidence. Expert bookkeeping, tax compliance, and strategic financial management.',
  keywords = [],
  image = DEFAULT_IMAGE,
  url = '',
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
}: SEOProps): Metadata {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const fullUrl = `${SITE_URL}${url}`;
  const fullImage = image.startsWith('http') ? image : `${SITE_URL}${image}`;

  const baseKeywords = [
    'Brisbane accountant',
    'Queensland accounting',
    'tax services Brisbane',
    'bookkeeping services',
    'financial management',
    'small business accounting',
    'tax compliance',
    'cashflow management',
    'business consultancy',
  ];

  return {
    title: fullTitle,
    description,
    keywords: [...baseKeywords, ...keywords],
    authors: author ? [{ name: author }] : [{ name: 'Pink Accounting Team' }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      type,
      locale: 'en_AU',
      url: fullUrl,
      title: fullTitle,
      description,
      siteName: SITE_NAME,
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: title || SITE_NAME,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [fullImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

// Structured Data Schemas
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'AccountingService',
  name: 'Pink Accounting & Tax Solutions',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description: 'Brisbane-based accounting firm specializing in service-based businesses in South-East Queensland.',
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Queensland',
    addressCountry: 'AU',
  },
  geo: {
    '@type': 'GeoCoordinates',
    addressCountry: 'AU',
  },
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      addressCountry: 'AU',
    },
    geoRadius: '100km',
  },
  priceRange: '$$',
  telephone: '+61-XXX-XXX-XXX', // Replace with actual phone
  email: 'hb@pinktax.com.au',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '10:00',
      closes: '14:00',
    },
  ],
  sameAs: [
    // Add social media URLs
    'https://www.facebook.com/pinkaccounting',
    'https://www.linkedin.com/company/pink-accounting',
  ],
};

export function generatePersonSchema(person: {
  name: string;
  role: string;
  email: string;
  credentials?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: person.name,
    jobTitle: person.role,
    email: person.email,
    worksFor: {
      '@type': 'Organization',
      name: 'Pink Accounting & Tax Solutions',
    },
    ...(person.credentials && {
      hasCredential: person.credentials.map(credential => ({
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'certificate',
        name: credential,
      })),
    }),
  };
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
  price: string;
  features: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: 'Pink Accounting & Tax Solutions',
    },
    offers: {
      '@type': 'Offer',
      price: service.price,
      priceCurrency: 'AUD',
    },
    serviceType: 'Accounting Service',
    areaServed: {
      '@type': 'State',
      name: 'Queensland',
    },
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}