import React, { ReactElement, useEffect, useState } from 'react';
import style from './catalogList.module.scss';
import './pagination.scss';
import { CatalogItem } from '../CatalogItem';
import dataFromServer from '../../api/data.json';
import ReactPaginate from 'react-paginate';
import { AssetType } from '../../types/assetType';

interface Props {
  filter: AssetType[]
}

export const CatalogList: React.FC<Props> = ({ filter }): ReactElement => {
  const [itemOffset, setItemOffset] = useState(0);
  const [items, setItems] = useState(dataFromServer.sort((data1, data2) => data2['used-total-count'] - data1['used-total-count']));
  const itemsPerPage = 50;
  const endOffset = itemOffset + itemsPerPage;
  const pageCount = Math.ceil(items.length / itemsPerPage);
  const pageCountStart = Math.ceil(dataFromServer.length / itemsPerPage);


  const filterData = (): void => {
    const filtered = dataFromServer.filter((item) => (
      filter.includes(item.type)
    )).sort((item1, item2) => item2['used-total-count'] - item1['used-total-count']);
    setItems(filtered);
  };

  const handlePageClick = (event: any): void => {
    const newOffset = (event.selected) % (dataFromServer || items).length;
    scrollTo(0,0);
    setItemOffset(newOffset);
  };

  useEffect(() => {
    setItemOffset(0);
    filterData();
  }, [filter]);

  console.log(itemOffset);
  return (
    <>
      <div className={`${style.catalog} S--1-6 D--4-24`}>
        {(filter.length > 0 ? items : dataFromServer).slice(itemOffset, endOffset).map((data: any) => (
          <CatalogItem
            key={data.id}
            title={data.title}
            image={data['preview-image']}
            description={data.description}
            tags={data.tags}
            type={data.type}
            used={data['used-total-count']}
            link={data['external-link']}
          />
        ))}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={filter.length > 0 ? pageCount : pageCountStart}
        previousLabel="< previous"
        containerClassName='pagination D--1-24 T--1-12 S--1-6'
        pageLinkClassName='page-num'
        previousClassName='page-num'
        nextLinkClassName='page-num'
        activeClassName='active'
        forcePage={itemOffset}
      />
    </>
  );
};
