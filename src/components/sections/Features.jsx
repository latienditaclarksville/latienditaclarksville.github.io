import React from 'react'
import Grid from '../layout/Grid';
import MoneyTransferIcon from '../icons/MoneyTransferIcon';
import { BiCheck,
         BiShoppingBag,
         BiDollarCircle,
       } from 'react-icons/bi';


const featureBlockDataMap = new Map([
  [1, { icon: <BiCheck 
                  size={72}      
                  className="text-emerald-800"/>,
        heading: '100% Auténtico.', 
        body: `Our mother & son market provides a 100% autentico feel. Step into our little store and immerse yourself in real Mexican culture.`}],

  [2, { icon: <BiShoppingBag
                size={72}      
                className="text-emerald-800 py-1"/>,
        heading: 'Huge Variety.', 
        body: `With a huge variety of products such as foods, medicines, and other goods you are bound to find what you need! Also, all our products are imported straight from Mexico.`}],

  [3, { icon: <BiDollarCircle 
                size={72}      
                className="text-emerald-800
                pl-1"/>,
        heading: 'Extremely Affordable.', 
        body: `Never over pay for authentic goods again. Every one of our products are fairly priced to give you the best buying experience. `}],

  [4, { icon: <MoneyTransferIcon />,
        heading: 'Money Transfers.', 
        body: `Powered by Ria. We give our customers the opportunity to send money orders to wherever they need.`}],
]);

const contents = Array.from(featureBlockDataMap.values());

const Features = () => {
  return (
    <section id='Features'
             className='flex
                        flex-col
                        items-center
                        bg-zinc-50
                        pt-0
                        pb-20
                        '
    >
      <h2 className='font-bold
                     text-4xl
                     text-center
                     text-rose-600
                     px-12
                     pt-0
                     sm:pt-20 
                     pb-20
                     sm:pb-32'>Why Shop With Us?</h2>
      <Grid
        numCols={2}
        numRows={2}
        gapX={0}
        gapY={0}
        contents={contents}
      />
    </section>
  );
}

export default Features;