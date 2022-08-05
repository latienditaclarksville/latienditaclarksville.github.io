import React from 'react';

const PaymentIcon = (props) => {
  const { id, children } = props;
  return (
    <div id={id} className='hover:-translate-y-1.5
                            hover:-translate-x-0.5
                            hover:scale-125
                            hover:text-zinc-50
                            text-zinc-50
                            xl:text-[#a6adba]
                            transition
                            duration-150
                            ease-in-out
                           '> 
      {children} 
    </div>
  );
}

export default PaymentIcon;