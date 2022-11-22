import React, { ReactElement } from 'react';
import style from './cardButton.module.scss';

interface Props {
  title: string
}

export const CardButton: React.FC<Props> = ({ title }): ReactElement => {
  return (
    <div className={style.wrapper}>
      <button className={style.btn}>
        {title}
      </button>
    </div>
  );
};
