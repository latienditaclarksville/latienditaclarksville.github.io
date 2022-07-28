import React from 'react';

const PaymentIcon = (props) => {
  const { id, children } = props;
  return (
    <div id={id}> 
      {children} 
    </div>
  );
}

export default PaymentIcon;