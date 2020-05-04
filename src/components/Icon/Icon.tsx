import classnames from 'classnames';
import React, { PropsWithRef } from 'react';
import styles from './icon.module.css';

import { icons } from './icons';

export type IconType = keyof typeof icons;

export interface IconProps extends PropsWithRef<any> {
  icon: IconType;
  color?: string;
  size?: string;
}


export const Icon: React.FunctionComponent<IconProps> = ({
  icon,
  color = 'grey-500',
  className,
  size,
  ...props
}) => {

  const sizeClass = size ? `h-${size} w-${size}` : null;
  const colorClass = color ? `text-${color}` : null;
  const klass = classnames(styles.icon, className, sizeClass, colorClass);
  const Ikon = icons[icon];
  if (!Ikon) return null;
  return <Ikon {...props} className={klass} />;
};
