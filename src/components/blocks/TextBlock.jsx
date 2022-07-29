import React from 'react'

const TextBlock = (props) => {
  const { heading, body } = props;

  return (
    <article className="flex flex-col border w-6/12">
      <h2 className="font-bold text-4xl py-3">{heading}</h2>
      <p className="font-light 
                    text-xl
                    border
                    ">{body}</p>
    </article>
  );
}

export default TextBlock;