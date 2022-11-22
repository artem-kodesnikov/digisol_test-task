import React, { ReactElement, useState } from 'react';
import { Tags } from '../Tags';
import style from './catalogItem.module.scss';
import { AssetType } from '../../types/assetType';
import { CardButton } from '../CardButton';
import { ItemLink } from '../ItemLink';
import { Link } from '../../types/link';

interface Props {
  image?: string
  title: string
  description?: string
  tags?: string[]
  type: number
  used: string
  link?: Link
}

export const CatalogItem: React.FC<Props> = ({
  image,
  title,
  description = '',
  tags,
  type,
  used,
  link
}): ReactElement => {
  const [books, setBooks] = useState(false);
  return (
    <>
      <div className={`${style.wrapper}`}>
        <div className={image ? style.image_wrapper : style.image_nf}>
          <img
            className={image ? style.image : style.image_notFound}
            src={image || './icons/Mask.svg'}
            alt="img"
          />
          <div className={style.info}>
            <div className={style.used_wrapper}>
              <p className={style.used_total}>
                {used}
              </p>
              <p className={style.used_text}>
                {'Used (total)'}
              </p>
            </div>
            <p className={style.book}>
              <img
                className={style.book_img}
                src={books ? './icons/Booked.svg' : './icons/Btns.svg'}
                alt="book btn"
                onClick={() => setBooks(!books)}
              />
            </p>
            <CardButton title={type === 3 ? 'DOWNLOAD' : 'USE'} />
          </div>
        </div>
        <div className={style.content}>
          <div className={style.title_wrapper}>
            <img className={style.icon} src={`./icons/${AssetType[type]}.svg`} alt={`${type} ico`} />
            <h4 className={style.title}>{title}</h4>
          </div>
          <div className={style.tags}>
            {tags && <Tags tags={tags} />}
          </div>
          {description && <p className={style.description}>{description}</p>}
        </div>
        {link && <ItemLink link={link} />}
      </div>
    </>
  );
};
