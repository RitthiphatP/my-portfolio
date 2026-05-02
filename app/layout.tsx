// app/layout.tsx
import type { Metadata } from 'next';
import { IBM_Plex_Sans_Thai } from 'next/font/google';
import './globals.css';

const ibmPlex = IBM_Plex_Sans_Thai({
  subsets: ['thai', 'latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-thai',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Portfolio | ฤทธิพัฒน์ พลเสน (เต้ย)',
  description: 'ผลงานและประวัติของนักพัฒนาเว็บ',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className={ibmPlex.variable}>
      <body className={`${ibmPlex.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}