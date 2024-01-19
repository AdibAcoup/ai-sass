import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider, auth } from '@clerk/nextjs'
import prismadb from '@/lib/prismadb';
import { ModalProvider } from '@/components/modal-provider';
import { ToasterProvider } from '@/components/toaster-provider';
import { CrispProvider } from '@/components/crisp-provider';
const cron = require("node-cron");

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Generative',
  description: 'AI Platform',
}


const resetCount = async () => {
  await prismadb.userApiLimit.updateMany({
      data: {
        count: 0
      },
    });
}

cron.schedule('0 0 * * *', function () {
  resetCount();
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <CrispProvider />
        <body className={inter.className}>
          <ModalProvider />
          <ToasterProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
