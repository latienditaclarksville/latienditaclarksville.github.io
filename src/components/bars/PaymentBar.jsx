import React from 'react';
import PaymentIcon from '../icons/PaymentIcon';
import { FaCcDiscover,
         FaCcVisa,
         FaCcMastercard,
         FaCcAmex,
         FaCcPaypal,
         FaCcAmazonPay,
         FaCcApplepay } from 'react-icons';

const PaymentBar = () => {

  // pass the Icon Comoponent into PaymentIcon
  // allow me to map over components & render

  const iconArray = [
    { id: 1, iconComponent: <FaCcDiscover/>, },
    { id: 2, iconComponent: <FaCcVisa/>, },
    { id: 3, iconComponent: <FaCcMastercard/>, },
    { id: 4, iconComponent: <FaCcAmex/>, },
    { id: 5, iconComponent: <FaCcPaypal/>, },
    { id: 6, iconComponent: <FaCcAmazonPay/>, },
    { id: 7, iconComponent: <FaCcApplepay/>, },
  ];

  return (
    iconArray.map(icon => {
      return (
        <PaymentIcon
          key={icon.id}
          iconComponent={icon.iconComponent}
        />
      );
    })
  );
}

export default PaymentBar;