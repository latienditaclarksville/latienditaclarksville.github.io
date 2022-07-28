import React from 'react';

const PaymentIcon = (props) => {
  const { id, icon } = props;

  return (
    <div>
      {icon.iconComponent};
    </div>
  );
}

export default PaymentIcon;