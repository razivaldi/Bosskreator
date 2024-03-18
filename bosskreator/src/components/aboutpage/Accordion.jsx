import React, { useState } from 'react';

const data = [
  {
    id: 1,
    title: 'Non consectetur a erat nam at lectus urna duis?',
    content: '#1This is accordion items body. It is shown or hidden by default, depending on the state. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.'
  },
  {
    id: 2,
    title: 'Non consectetur a erat nam at lectus urna duis?',
    content: '#2This is accordion items body. It is shown or hidden by default, depending on the state. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.'
  },
  {
    id: 3,
    title: 'Non consectetur a erat nam at lectus urna duis?',
    content: '#3This is accordion items body. It is shown or hidden by default, depending on the state. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.'
  },
]

const Accordion = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (accordionNumber) => {
    if (openAccordion === accordionNumber) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(accordionNumber);
    }
  };

  return (
    <div className="w-[600px] ml-6">
      {data.map((item) => (
        <div key={item.id}>
          <button
            className="py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start"
            aria-expanded={openAccordion === item.id}
            onClick={() => toggleAccordion(item.id)}
          >
            <p>{item.title}</p>
            {openAccordion === item.id ? (
              <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 15l-6-6-6 6"></path></svg>
            ) : (
              <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"></path></svg>
            )}
          </button>
          {/* <hr className={`${openAccordion === item.id ? 'hidden' : ''}`} /> */}
          <div
            className={`${openAccordion === item.id ? '' : 'hidden'} w-full overflow-hidden transition-[height] duration-300`}
            aria-labelledby={`${item.id}`}
          >
            <p className="">
              This is accordion items body. It is shown or hidden by default, depending on the state. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            </p>
          </div>
          <hr className='mb-2.5' />
        </div>
      ))}
    </div>
  );
};

export default Accordion;
