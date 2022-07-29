import React from 'react';
import FeatureGrid from '../layout/FeatureGrid';
import ImageGrid from '../layout/ImageGrid';

const Grid = (props) => {
  const { numCols, 
          numRows, 
          gapX, 
          gapY, 
          contents, } = props;

  console.log('Grid:');
  console.log(contents);

  if (typeof contents[0].icon === 'object') {
    return (
      <div className="border-emerald-300 items-center">
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
  else {
    return (
      <div className="border-emerald-300
                       border">
        <ImageGrid
          numCols={numCols}
          numRows={numRows}
          gapX={gapX}
          gapY={gapY}
          contents = {contents}
        /> 
      </div>
    );
  }
}

export default Grid;