import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Image from 'next/image';

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
        <nav className='h-1/6 bg-ncrgreen bg- w-full flex items-center p-4'>
          <Image src={'ncr-logo.svg'} alt='logo ncr' width={150} height={75} />
        </nav>
        <main className='h-5/6 bg-white w-full'>{children}</main>
      </body>
    </html>
  );
}
