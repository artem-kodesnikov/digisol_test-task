import React, { ReactElement, useState } from 'react';
import './styles/App.scss';
import { GridContainer } from './components/GridContainer';
import { SideBar } from './components/SideBar';
import { CatalogList } from './components/CatalogList';
import { AssetType } from './types/assetType';

const App = (): ReactElement => {
  const [filter, setFilter] = useState<any>([]);

  const changeFilters = (action: { type: string, data: AssetType }): void => {
    switch (action.type) {
      case 'add': {
        setFilter((prevState: AssetType[]) => [...prevState, action.data]);
        break;
      }
      case 'remove': {
        setFilter((prevState: AssetType[]) => prevState.filter(item => (
          item !== action.data
        )));
        break;
      }
      default:
        setFilter((prevState: AssetType[]) => prevState);
    }
  };

  return (
    <>
        <SideBar changeFilters={changeFilters} />
        <GridContainer>
          <CatalogList filter={filter} />
        </GridContainer>
    </>
  );
};

export default App;
