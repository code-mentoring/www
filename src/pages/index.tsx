import Head from 'next/head'
import { Component } from 'react';
const { attributes, react: HomeContent } = require('../../content/home.md');

export default class Home extends Component {
  render() {
    const { title } = attributes;
    console.log(attributes);

    return <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <article>
        <h1>{title}</h1>
        <HomeContent />
      </article>
    </>;
  }
}
