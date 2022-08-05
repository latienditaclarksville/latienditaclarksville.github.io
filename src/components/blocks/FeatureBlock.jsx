import React from 'react';

const FeatureBlock = (props) => {
  const { icon, heading, body, } = props;
  
  return (
    <article className='flex
                        flex-col
                        sm:px-7
                        md:px-0
                        2xl:px-10
                       '>

      <div className='flex 
                      flex-row 
                      items-center
                      pl-3.5
                      
                     '>
          {icon}
          <h1 className='pl-1
                         font-bold
                         text-2xl
                         text-rose-600
                         opacity-95
                        '>
            {heading}
          </h1>
      </div>
      <p className='text-left
                    text-lg
                  text-slate-600
                    px-7
                    pt-2
                    pb-10
                    
                   '>
        {body}
      </p>
    </article>
  );
}

export default FeatureBlock;