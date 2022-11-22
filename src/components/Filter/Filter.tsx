import React, { ReactElement } from 'react';
import style from './filter.module.scss';
import { SideBarItem } from '../SideBarItem';
import { AssetType } from '../../types/assetType';

interface Props {
  changeFilters: (action: { type: string, data: AssetType }) => void
}

export const Filter: React.FC<Props> = ({ changeFilters }): ReactElement => {
  return (
    <div className={`${style.container} S--1-4 D--1-5 T--1-2`}>
      <h4 className={style.title}>Asset type</h4>
      <SideBarItem changeFilters={changeFilters} title={'Template'} value={AssetType.TEMPLATE} />
      <SideBarItem changeFilters={changeFilters} title={'Image'} value={AssetType.IMAGE}/>
      <SideBarItem changeFilters={changeFilters} title={'Video'} value={AssetType.VIDEO}/>
      <SideBarItem changeFilters={changeFilters} title={'Pdf'} value={AssetType.PDF}/>
      <SideBarItem changeFilters={changeFilters} title={'Gif'} value={AssetType.GIF}/>
      <SideBarItem changeFilters={changeFilters} title={'Article'} value={AssetType.ARTICLE}/>
    </div>
  );
};
