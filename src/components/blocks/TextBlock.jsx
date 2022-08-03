import React from 'react'

const TextBlock = (props) => {
  const { heading, body } = props;

  return (
    <article className='flex 
                        flex-col'>
                          
      <h2 className='font-bold 
                     text-5xl
                   text-rose-600
                     text-center
                     sm:text-left
                     pt-0
                     pb-5
                    '>{heading}</h2>

      <p className='text-left
                    text-lg
                    px-7
                    sm:pr-32
                    text-slate-600
                    '>{body}</p>
    </article>
  );
}

export default TextBlock;