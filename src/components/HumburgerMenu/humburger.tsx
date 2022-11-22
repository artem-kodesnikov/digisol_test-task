import React, { ReactElement } from 'react';
import style from './humburger.module.scss';
import { AiOutlineMenu } from 'react-icons/ai';

interface Props {
  setIsOpen: (value: boolean) => void
}

export const Humburger: React.FC<Props> = ({
  setIsOpen
}): ReactElement => {
  const handleClick = (): void => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };
  return (
    <AiOutlineMenu onClick={() => handleClick()} className={style.humburger} size='40px' color='black' />
  );
};
