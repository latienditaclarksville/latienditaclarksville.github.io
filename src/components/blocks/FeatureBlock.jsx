import React from 'react';

const FeatureBlock = (props) => {
  const { icon,
          title, 
          subtitle, } = props;
  
  return (
    <article className="flex flex-col">
      <div className="flex flex-row">
          {icon}
          <h1>{title}</h1>
      </div>
      <p>{subtitle}</p>
    </article>
  );
}

export default FeatureBlock;