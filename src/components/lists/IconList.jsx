/* Need to add Bi* Icons */
import React from 'react';
import { BiPhoneOutgoing,
         BiMapPin,
         BiMailSend } from 'react-icons/bi';

const IconList = () => {
  return (
    <ul>
      <li className='flex 
                     flex-row 
                     justify-left 
                     align-center
                     py-2
                    '>
        <BiPhoneOutgoing size={24}
                         className='my-auto
                                   '/>
        <p className='pl-3
                      text-base
                     '>
          (931) 278-9303
        </p>
      </li>

      <li className='flex 
                     flex-row 
                     py-2
                    '>
        <BiMailSend size={24} 
                    className='my-auto
                              '/>
        <p className='pl-3 
                      text-base
                     '>
          Franciscoh.2000@icloud.com
        </p>
      </li>

      <li className='flex 
                     flex-row
                     py-2
                    '>
        <BiMapPin size={24} 
                  className='my-auto
                            '/>
        <p className='pl-3 
                      text-base
                     '>
         3862 Trenton Rd Ste. C<br/>
         Clarksville, TN 37040
        </p>
      </li>
    </ul>
  );
}

export default IconList;