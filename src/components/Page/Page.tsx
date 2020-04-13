import Head from 'next/head';
import React from 'react';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

export interface PageProps {
  title?: string;
}

export const Page: React.FC<PageProps> = ({
  title,
  children
}) => {
  return <main>
    <Head>
      <title>{title}</title>
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      <link rel="stylesheet" href="/fonts/butler/butler.css"/>
    </Head>
    <Header />
    {children}
    <Footer />
  </main>
}
