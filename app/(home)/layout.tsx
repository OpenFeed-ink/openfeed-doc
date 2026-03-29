import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';
import { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: "OpenFeed: Open Source Alternative to Canny and Frill",
  description: "Collect feedback, manage your roadmap, and publish changelog updates",
  metadataBase: new URL("https://openfeed.ink"),
    applicationName: "OpenFeed",
  openGraph: {
   title: "OpenFeed",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
      },
    ],  
  },
  keywords: [
    'open source canny alternative',
    'canny alternative',
    'frill alternative',
    'open source feedback tool',
    'feature request board open source',
    'self hosted feedback tool',
    'changelog widget',
    'roadmap tool open source',
  ],
  alternates: {
    canonical: "https://openfeed.ink",
  },
  category: "Customer Support",
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0A' },
    { media: '(prefers-color-scheme: light)', color: '#fff' },
  ],
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return <HomeLayout {...baseOptions()}>{children}</HomeLayout>;
}
