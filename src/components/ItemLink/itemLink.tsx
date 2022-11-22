import React from "react";
import { Link } from "../../types/link";
import style from './itemLink.module.scss';



interface Props {
  link?: Link
}

export const ItemLink: React.FC<Props> = ({ link }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.icon_wrapper}>
        <img className={style.icon} src="./icons/ARTICLE.svg" alt="link img" />
      </div>
      <div className={style.link_wrapper}>
        <h3 className={style.title}>
          {link?.title}
        </h3>
        <a
          className={style.link}
          href={link?.href}
          target="_blank" rel="noreferrer"
        >
          {link?.href}
        </a>
      </div>
    </div>
  );
};
