import React from 'react';
import style from './sideBarItem.module.scss';
import { AssetType } from '../../types/assetType';

interface Props {
  title: string
  changeFilters: (action: { type: string, data: AssetType }) => void
  value: AssetType
}

export const SideBarItem: React.FC<Props> = ({
  title,
  changeFilters,
  value
}) => {
  const typeAction = (checked: boolean): string => {
    return checked ? 'add' : 'remove';
  };
  return (
    <div onClick={(event: any) => changeFilters({ type: typeAction(event.target.checked), data: value })} className={style.input_wrapper}>
      <label className={style.input_label} htmlFor={title}>
        <input
          value={title.toUpperCase()}
          className={style.input}
          id={title}
          type="checkbox"
        />
        <img className={style.input_ico} src={`./icons/${title.toUpperCase()}.svg`} alt={`${title} ico`} />
        {title}
      </label>
    </div>
  );
};
