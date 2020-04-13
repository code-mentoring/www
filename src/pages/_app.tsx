import { AppProps } from 'next/app';
import '../css/base.css';

function CMApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default CMApp
