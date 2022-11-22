import React, { ReactElement } from 'react';
import style from './itemModal.module.scss';

interface Props {
  tags: string[]
}

export const ItemModal: React.FC<Props> = ({ tags }): ReactElement => {
  return (
    <div className={style.wrapper}>
      {tags.slice(1).map((tag) => (
        <p className={style.tag} key={tag}>
          {tag}
        </p>
      ))}
    </div>
  );
};
