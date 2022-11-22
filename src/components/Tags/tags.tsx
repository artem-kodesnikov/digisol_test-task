import React, { ReactElement, useState } from 'react';
import { ItemModal } from '../ItemModal';
import style from './tags.module.scss';

interface Props {
  tags?: string[]
}

export const Tags: React.FC<Props> = ({ tags = [] }): ReactElement => {
  const [isModal, setIsModal] = useState(false);
  return (
    <>
      {tags?.length > 1
        ? (
          <>
            <p className={style.tag}>{tags[0]}</p>
            <p onClick={() => setIsModal(!isModal)} className={style.tags}>
              {`+${tags.length - 1}`}
            </p>
          </>
          )
        : (tags?.map((tag) => {
            return <p className={style.tag} key={tag}>{tag}</p>;
          }))
      }
      {isModal && <ItemModal tags={tags} />}
    </>
  );
};
