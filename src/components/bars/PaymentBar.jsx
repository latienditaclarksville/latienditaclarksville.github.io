import React from 'react';
import PaymentIcon from '../icons/PaymentIcon';
import { FaCcDiscover,
         FaCcVisa,
         FaCcMastercard,
         FaCcAmex,
         FaCcPaypal,
         FaCcAmazonPay,
         FaCcApplePay } from 'react-icons/fa';

const PaymentBar = () => {

  // pass the Icon Comoponent into PaymentIcon
  // allow me to map over components & render

  const iconComponentArray = [
    { id: 1, component: <FaCcDiscover size={24}/>},
    { id: 2, component: <FaCcVisa size={24}/>},
    { id: 3, component: <FaCcMastercard size={24}/>},
    { id: 4, component: <FaCcAmex size={24}/>},
    { id: 5, component: <FaCcPaypal size={24}/>},
    { id: 6, component: <FaCcAmazonPay size={24}/>},
    { id: 7, component: <FaCcApplePay size={24}/>},
  ];

  return (
    <aside 
      className="flex flex-row gap-x-3.5"
      style={{'border': 'red'}} >
      {
        iconComponentArray.map(icon => {
          return (
            <PaymentIcon id={icon.id}>
              {icon.component}
            </PaymentIcon>
          );
        })
      }
    </aside>
  );
}

export default PaymentBar;