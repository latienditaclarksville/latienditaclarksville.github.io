/* Need to add Bi* Icons */
import React from 'react';
import { BiPhoneOutgoing,
         BiMapPin,
         BiMailSend } from 'react-icons/bi';

const IconList = () => {
  return (
    <ul>
      <li className='flex flex-row justify-left align-center'>
        <BiPhoneOutgoing size={24} className='my-auto'/>
        <small className='pl-3 md:text-md lg:text-lg'>(931) 278-9303</small>
      </li>
      <li className='flex flex-row'>
        <BiMailSend size={24} className='my-auto'/>
        <small className='pl-3 md:text-md lg:text-lg'>Franciscoh.2000@icloud.com</small>
      </li>
      <li className='flex flex-row'>
        <BiMapPin size={24} className='my-auto'/>
        <small className='pl-3 md:text-md lg:text-lg'>3862 Trenton Rd Ste. C<br/>
        Clarksville, TN 37040</small>
      </li>
    </ul>
  );
}

export default IconList;