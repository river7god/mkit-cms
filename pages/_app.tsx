import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast';
import { SessionProvider } from 'next-auth/react';

import LoginModal from '@/components/dialog/LoginModal'
import RegisterModal from '@/components/dialog/RegisterModal'
import EditModal from '@/components/dialog/EditModal';

import Layout from '@/components/Layout'
import '@/styles/globals.css'
import '@/styles/mkit.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    
      <Layout>
        <Component {...pageProps} />
      </Layout>
    
  )
}
