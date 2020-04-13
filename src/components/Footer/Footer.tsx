import classnames from 'classnames';
import React from 'react';

import { SETTINGS } from '../../lib/settings';
import styles from './footer.module.css';
import { Icon } from '../Icon/Icon';

export const Footer: React.FC = () => {
  return <footer className={classnames(styles.footer, "bg-primary-200")}>
    <div className="container mx-auto h-full grid grid-cols-3 items-center py-20">
      <a href="/" className="mr-auto">
        <img src="/images/logo.svg" alt="Code Mentoring" className="h-12" />
      </a>

      <nav className="grid grid-cols-2">
        {SETTINGS.footer.menu.map(l => <a
          href={l.link}
          className="h-8 uppercase font-bold text-grey-500 px-2 mx-1 hover:text-primary-500 transition-colors duration-100"
        >{l.text}</a>)}
      </nav>

      <div className="social text-right flex justify-end">
        <a href={SETTINGS.footer.social.facebook} className="text-grey-500 mr-4 hover:text-primary-500 transition-colors duration-100">
          <Icon icon="facebook" color={null}/>
        </a>
        <a href={SETTINGS.footer.social.linkedIn} className="text-grey-500 hover:text-primary-500 transition-colors duration-100">
          <Icon icon="linkedIn" color={null}/>
        </a>
      </div>
    </div>
  </footer>
}
