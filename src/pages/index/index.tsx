import React from 'react';
import classnames from 'classnames';
import Link from 'next/link';
import { Page } from '../../components/Page/Page';
import { SETTINGS } from '../../lib/settings';
import styles from './index.module.css';
import { v4 as uuidv4 } from 'uuid';

const { attributes: data }: {attributes: HomeContent} = require('../../../content/home.md');

interface HomeContent {
  title: string;
  banner: {
    title: string;
    subTitle: string;
    button1: { text: string; link: string; }
    button2: { text: string; link: string; }
    image: string;
  }
  paths: {
    title: string;
    linkText: string;
    link: string;
  },
  learning: {
    title: string;
    content: string;
    linkText: string;
    link: string;
    image: string;
  }
  partners: {
    title: string;
    linkText: string;
    link: string;
    partners: {
      name: string;
      logo: string;
    }[]
  }
}

export default () => {
  const { title, banner } = data;
  return <Page title={title}>

    <section className={styles.title}>
      <div className="container mx-auto flex items-center pt-48 pb-10">
        <div className="w-7/12">
          <h1 className="title">{banner.title}</h1>
          <p className="mt-4 mb-10 max-w-md">{banner.subTitle}</p>
          <Link href={banner.button1.link}><a className="btn btn-secondary mr-4" >{banner.button1.text}</a></Link>
          <a className="btn btn-tertiary" href={banner.button2.link}>{banner.button2.text}</a>
        </div>
        <div className="w-5/12 relative">
          <div className={styles.square} />
          <img src={banner.image} alt="Coding community" className="relative" />
        </div>
      </div>
    </section>

    <section className={classnames(styles.paths, 'flex justify-center text-center pt-2')}>
      <div>
        <h3>{data.paths.title}</h3>
        <ul className="paths grid grid-cols-5 gap-4 my-6">
          {SETTINGS.paths.map(p => <li key={uuidv4()} className="text-center">
            <img src={p.image} alt={p.name} className="h-12 inline-block mb-1" />
            <span className="block">{p.name}</span>
          </li>)}
        </ul>
        <a href={data.paths.link} className="btn">{data.paths.linkText}</a>
      </div>
    </section>

    <section className={classnames(styles.learning, 'bg-green-100 -mt-10')}>
      <div className="container mx-auto mt-32 pb-32">
        <h2 className="max-w-md">{data.learning.title}</h2>
        <p className="max-w-md mt-4 mb-8">{data.learning.content}</p>
        <a className="btn btn-secondary btn-large" href={data.learning.link}>{data.learning.linkText}</a>
        <img src={data.learning.image} alt="Learning platform with community" />
      </div>
    </section>

    <section className={classnames(styles.partners, 'flex justify-center text-center my-32')}>
      <div className="max-w-lg">
        <h3 className="text-tertiary-500">{data.partners.title}</h3>
        <div className={`paths grid grid-cols-${data.partners.partners.length} gap-8 items-center my-6`}>
          {data.partners.partners.map(p =>
            <img key={uuidv4()} src={p.logo} alt={p.name} className="max-h-8 inline-block mb-1" />)}
        </div>
        <a href={data.partners.link} className="btn btn-tertiary">{data.partners.linkText}</a>
      </div>
    </section>
  </Page>;
};
