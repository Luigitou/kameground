import type { Metadata } from 'next';
import './globals.css';
import Favicon from '../public/favicon.png';
import Header from '@layouts/Header';

export const metadata: Metadata = {
  title: 'Kameground',
  description: 'Clips of your favorite games',
  icons: [{ rel: 'icon', url: Favicon.src }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={'bg-black'}>
        <Header />
        {children}
      </body>
    </html>
  );
}
