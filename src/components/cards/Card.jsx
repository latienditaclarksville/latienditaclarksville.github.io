import React from 'react';

const Card = (props) => {
  const { heading, body } = props;

  return (
    <article className='card
                        mx-auto
                        w-10/12
                        md:w-11/12
                        lg:w-96
                        xl:w-80
                        shadow-xl
                        hover:shadow-2xl
                        duration-1.5
                        ease-in-out
                        transition
                        hover:translate-x-1
                        hover:-translate-y-1
                      '>

      <div className='card-body
                      text-left
                      divide-y divide-solid
                    text-rose-600
                    xl:text-slate-400
                    hover:text-rose-600
                    divide-emerald-600
                    xl:divide-emerald-300
                    hover:divide-emerald-600
                    bg-zinc-50
                    xl:bg-stone-50
                    hover:bg-zinc-50
                      hover:font-bold
                     '>

        <h2 className='card-title'>{heading}</h2>
        <p className='text-left 
                      py-3
                      pr-2
                    text-slate-700'>{body}</p>
      </div>
    </article>
  );
}

export default Card;