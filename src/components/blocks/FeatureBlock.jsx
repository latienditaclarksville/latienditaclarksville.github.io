import React from 'react';

const FeatureBlock = (props) => {
  const { icon, heading, body, } = props;
  
  return (
    <article className="flex 
                        flex-col
                        w-10/12 
                        py-3
                        mx-auto">

      <div className="flex flex-row items-center">
          <div className="pl-0">
            {icon}
          </div>
          <h1 className="pl-2
                         text-bold
                         text-2xl
                        ">{heading}</h1>
      </div>
      <p className="pt-3 pl-3 md:pr-2 lg:pr-20  text-left font-light">{body}</p>
    </article>
  );
}

export default FeatureBlock;