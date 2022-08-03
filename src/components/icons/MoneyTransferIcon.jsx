import React from 'react';
import {  BiMoney,
          BiTransfer } from 'react-icons/bi';

const MoneyTransferIcon = () => {
  return (
    <div className='flex flex-row items-center pl-2'>
      <BiMoney 
          size={56}
          className='text-emerald-800'/>
      <BiTransfer
        size={56}
        className='pl-0.5 text-emerald-800'/>
    </div>
  );
}

export default MoneyTransferIcon;