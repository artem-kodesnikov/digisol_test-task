import React, { ReactElement } from 'react';
import style from './filterMobile.module.scss';
import { SideBarItem } from '../SideBarItem';
import ReactDOM from 'react-dom';
import { AssetType } from '../../types/assetType';

const domNode = document.getElementById('navbarRoot') as HTMLElement;

interface Props {
  setIsOpen: (value: boolean) => void
  changeFilters: (action: { type: string, data: AssetType }) => void
}

export const FilterMobile: React.FC<Props> = ({ setIsOpen, changeFilters }): ReactElement => {
  const handleCross = (): void => {
    setIsOpen(false);
    document.body.style.overflow = 'scroll';
  };

  const navContent = (
    <div className={style.container} >
      <h4 className={style.title}>Asset type</h4>
      <SideBarItem changeFilters={changeFilters} title={'Template'} value={AssetType.TEMPLATE}/>
      <SideBarItem changeFilters={changeFilters} title={'Image'} value={AssetType.IMAGE}/>
      <SideBarItem changeFilters={changeFilters} title={'Video'} value={AssetType.VIDEO}/>
      <SideBarItem changeFilters={changeFilters} title={'Pdf'} value={AssetType.PDF}/>
      <SideBarItem changeFilters={changeFilters} title={'Gif'} value={AssetType.GIF}/>
      <SideBarItem changeFilters={changeFilters} title={'Article'} value={AssetType.ARTICLE}/>
      <span onClick={() => handleCross()} className={style.cross}>X</span>
    </div >
  );

  return ReactDOM.createPortal(navContent, domNode);
};
