// app/about/page.tsx
import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'Hakkımızda | Dentaverax',
  description:
    'Dentaverax dijital dental laboratuvarı olarak misyonumuz, kliniklere güvenilir, hızlı ve estetik çözümler sunmaktır. Vizyonumuz ise global ölçekte tanınan bir teknoloji merkezi olmaktır.',
};

export default function AboutPage() {
  return <AboutClient />;
}
