import React from 'react';

const FeatureBlock = (props) => {
  const { iconComponent,
          title, 
          subtitle, } = props;
  
  return (
    <article className="flex flex-col">
      <div className="flex flex-row">
          {iconComponent}
          <h1>{title}</h1>
      </div>
      <p>{subtitle}</p>
    </article>
  );
}

export default FeatureBlock;

/*
  TODO:
  - add styling
  
*/