import type { Metadata } from 'next';
import ClientContact from './ClientContact';

export const metadata: Metadata = {
  title: 'Contact Us | Economia Atelier',
  description: 'Connect with Economia Atelier. Share your academic aspirations or queries about our macroeconomic tracks.',
  openGraph: {
    title: 'Contact Economia Atelier',
    description: 'Connect with the premier economic learning atelier.',
    url: 'https://economia-atelier.com/contact',
    siteName: 'Economia Atelier',
  },
};

export default function ContactPage() {
  return <ClientContact />;
}
