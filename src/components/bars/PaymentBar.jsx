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
    { id: 1, component: <FaCcDiscover/>},
    { id: 2, component: <FaCcVisa/>},
    { id: 3, component: <FaCcMastercard/>},
    { id: 4, component: <FaCcAmex/>},
    { id: 5, component: <FaCcPaypal/>},
    { id: 6, component: <FaCcAmazonPay/>},
    { id: 7, component: <FaCcApplePay/>},
  ];

  return (
    <aside 
      className="flex flex-row"
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