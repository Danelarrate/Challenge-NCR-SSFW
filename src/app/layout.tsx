import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Challenge NCR-SSFW',
  description: 'Challenge Desarrollador NCR - SSFW',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='h-screen'>
        <nav className='h-1/6 bg-green-400 bg- w-full flex items-center p-4'>
          NCR
        </nav>
        <main className='h-5/6 bg-white w-full'>{children}</main>
      </body>
    </html>
  );
}
