import React, { ReactElement, useState } from 'react';
import style from './sideBar.module.scss';
import { Humburger } from '../HumburgerMenu';
import { Filter } from '../Filter';
import { FilterMobile } from '../FilterMobile';
import { AssetType } from '../../types/assetType';

interface Props {
  changeFilters: (action: { type: string, data: AssetType }) => void
}

export const SideBar: React.FC<Props> = ({
  changeFilters
}): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={style.wrapper}>
      <Humburger setIsOpen={setIsOpen} />
      {!isOpen && <Filter changeFilters={changeFilters} /> }
      {isOpen && <FilterMobile changeFilters={changeFilters} setIsOpen={setIsOpen} />}
    </div>
  );
};
