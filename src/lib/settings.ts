// eslint-disable-next-line global-require
export const SETTINGS: SiteSettings = require('../../content/settings.yml');

export interface SiteSettings {
  header: {
    menu: {
      text: string;
      link: string;
    }[],
  }
  footer: {
    menu: {
      text: string;
      link: string;
    }[]
    social: {
      facebook: string;
      linkedIn: string;
    }
  }
  paths: {
    name: string,
    image: string;
  }[]
}
