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
                     sm:grid
                     sm:grid-cols-${numCols}
                     sm:grid-rows-${numRows}
                     sm:gap-x-${gapX}
                     sm:gap-y-${gapY}
                     sm:w-10/12
                     sm:mx-auto
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