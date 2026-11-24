import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, DM_Sans, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Simulasi CBT IPA Kelas 7 — Semester Ganjil Kurikulum Merdeka',
  description:
    'Simulasi ujian interaktif berbasis komputer (CBT) mata pelajaran IPA Kelas 7 SMP Semester Ganjil Kurikulum Merdeka dengan 30 soal lengkap, ilustrasi alat ukur presisi, dan pembahasan.',
  openGraph: {
    title: 'Simulasi CBT IPA Kelas 7 — Semester Ganjil Kurikulum Merdeka',
    description:
      'Latihan ujian IPA Kelas 7 SMP Kurikulum Merdeka (30 soal PG & Benar/Salah) dengan ilustrasi jangka sorong, mikrometer sekrup, termometer, dan grafik kalor.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Simulasi CBT IPA Kelas 7 — Semester Ganjil Kurikulum Merdeka',
    description:
      'Latihan ujian IPA Kelas 7 SMP Kurikulum Merdeka dengan 30 soal lengkap dan pembahasan interaktif.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${plusJakartaSans.variable} ${dmSans.variable} ${ibmPlexMono.variable}`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans antialiased selection:bg-[#0284C7]/15 selection:text-[#0369A1]"
      >
        {children}
      </body>
    </html>
  );
}
