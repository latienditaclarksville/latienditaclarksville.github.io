import React from 'react'

const TextBlock = (props) => {
  const { heading, body } = props;

  return (
    <article className="flex flex-col">
      <h2 className="font-bold">{heading}</h2>
      <p className="font-light">{body}</p>
    </article>
  );
}

export default TextBlock;