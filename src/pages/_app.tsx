import '@/styles/globals.css'
import Header from '@/components/header'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main className="omg">
        <Component {...pageProps} />
      </main>
      <footer className="py-6">hello</footer>
    </>
  )
}
