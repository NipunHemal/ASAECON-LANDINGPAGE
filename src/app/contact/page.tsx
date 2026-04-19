import type { Metadata } from 'next';
import ClientContact from './ClientContact';

export const metadata: Metadata = {
  title: 'Contact Us | ආස Econ',
  description: 'Connect with ආස Econ. Share your academic aspirations or queries about our macroeconomic tracks.',
  openGraph: {
    title: 'Contact ආස Econ',
    description: 'Connect with the premier economic learning atelier.',
    url: 'https://economia-atelier.com/contact',
    siteName: 'ආස Econ',
  },
};

export default function ContactPage() {
  return <ClientContact />;
}
