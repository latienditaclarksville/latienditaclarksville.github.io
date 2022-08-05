import React from 'react'

const TextBlock = (props) => {
  const { heading, body } = props;

  return (
    <article className='flex 
                        flex-col
                        px-7
                        sm:px-10
                        md:px-10
                        xl:px-0
                       '>
                          
      <h2 className='font-bold 
                     text-5xl
                   text-rose-600
                     text-left
                     pt-0
                     pb-9
                     lg:pl-10
                     xl:pl-0
                    '>{heading}</h2>

      <p className='text-left
                    text-lg
                    sm:px-2
                    md:px-10
                    lg:pl-10
                    xl:pl-0
                    xl:pr-0
                    text-slate-600
                    '>{body}</p>
    </article>
  );
}

export default TextBlock;