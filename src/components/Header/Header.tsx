import React from 'react';

import { SETTINGS } from '../../lib/settings';

export const Header: React.FC = () => {
  return <header className="fixed top-0 left-0 w-full z-50">
    <div className="container mx-auto h-full flex items-center py-8">
      <a href="/" className="mr-auto">
        <img src="/images/logo.svg" alt="Code Mentoring" className="h-12" />
      </a>

      {SETTINGS.header.menu.map(l => <a
        href={l.link}
        className="uppercase font-bold text-grey-500 px-2 mx-1 hover:text-primary-500 transition-colors duration-100"
      >{l.text}</a>)}

      <a href="" className="btn btn-secondary btn-large ml-4">login</a>
    </div>
  </header>
}
