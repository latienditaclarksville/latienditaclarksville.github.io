import React from 'react'
import FeatureBlock from '../blocks/FeatureBlock';

const FeatureGrid = (props) => {
 const { numCols,
          numRows, 
          gapX,
          gapY,
          contents } = props;

  return (
    <div className={`grid 
                     grid-cols-${numCols} 
                     grid-rows-${numRows}
                     gap-x-${gapX}
                     gap-y-${gapY}
                     lg:w-10/12
                     lg:mx-auto
                     `}           
    >
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

// grid-cols-${numCols}
//                      grid-rows-${numRows}
//                      gap-x-${gapX}
//                      gap-y-${gapY}