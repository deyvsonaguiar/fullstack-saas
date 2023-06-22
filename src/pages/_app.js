import AppLayout from '@/core/layouts/App'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
  <AppLayout>
    <Component {...pageProps} />
  </AppLayout>
  )
}
