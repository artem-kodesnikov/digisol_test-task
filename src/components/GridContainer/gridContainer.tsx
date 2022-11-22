import React, { ReactElement } from 'react';
import style from './gridContainer.module.scss';

export interface Props {
  children: React.ReactNode
};

export const GridContainer = (prop: Props): ReactElement => {
  return <div className={style.Container}>{prop.children}</div>;
};
