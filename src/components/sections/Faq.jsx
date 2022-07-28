import React from 'react';
import TextBlock from '../blocks/TextBlock';

const Faq = () => {
  const headerStr = `Some FAQs`;
  const bodyStr = `Here are the most common question we get asked! If you don't see your question, feel free to send us an email at Francisco.2000@icloud.com or call us as (931)278-9303. We'd love to answer any questions you may have!`;

  return (
    <section>
      <TextBlock 
        heading={headerStr}
        body={bodyStr}
      />
      <p>Modal Animated Popup</p>
    </section>
  );
}

export default Faq;