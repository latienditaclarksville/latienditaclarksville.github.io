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

  const iconComponentArray = [
    { id: 1, component: <FaCcDiscover size={28}/>},
    { id: 2, component: <FaCcVisa size={28}/>},
    { id: 3, component: <FaCcMastercard size={28}/>},
    { id: 4, component: <FaCcAmex size={28}/>},
    { id: 5, component: <FaCcPaypal size={28}/>},
    { id: 6, component: <FaCcAmazonPay size={28}/>},
    { id: 7, component: <FaCcApplePay size={28}/>},
  ];

  return (
    <aside className='flex 
                      flex-row 
                      gap-x-3.5'>
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