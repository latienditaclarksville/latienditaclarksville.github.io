/* Need to add Bi* Icons */
import React from 'react';
import { BiPhoneOutgoing,
         BiMapPin,
         BiMailSend } from 'react-icons/bi';

const IconList = () => {
  return (
    <ul>
      <li>
        <BiPhoneOutgoing />
        (931) 278-9303
      </li>
      <li>
        <BiMailSend />
        Franciscoh.2000@icloud.com
      </li>
      <li>
        <BiMapPin />
        <p>3862 Trenton Rd Ste D</p>
        <p>Clarksville, TN 37040</p>
      </li>
    </ul>
  );
}

export default IconList;