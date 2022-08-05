import React from 'react';
import FeatureGrid from '../layout/FeatureGrid';

const Grid = (props) => {
  const { numCols, 
          numRows, 
          gapX, 
          gapY, 
          contents, } = props;

  return (
    <div className=''>
      <FeatureGrid
        numCols={numCols}
        numRows={numRows}
        gapX={gapX}
        gapY={gapY}
        contents = {contents}
      /> 
    </div>
  );
}

export default Grid;