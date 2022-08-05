import React from 'react'
import FeatureBlock from '../blocks/FeatureBlock';

const FeatureGrid = (props) => {
 const {  numCols,
          numRows, 
          gapX,
          gapY,
          contents } = props;

  return (
    <div className={`flex
                     flex-col
                     items-center
                     justify-evenly
                     md:grid
                     md:grid-cols-${numCols}
                     md:grid-rows-${numRows}
                     md:gap-x-${gapX}
                     md:gap-y-${gapY}
                     md:w-10/12
                     md:mx-auto
                     2xl:w-9/12
                    `}>
     {
       contents.map(feature => {
          return (
            <FeatureBlock 
              icon={feature.icon}
              heading={feature.heading}
              body={feature.body}
            />
          );
       })
     }
    </div>
  );
}

export default FeatureGrid;