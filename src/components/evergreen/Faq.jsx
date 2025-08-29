import React, { useState } from 'react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // FAQ data in English
  const faqData = [
    {
      id: 1,
      question: "How do I schedule a property viewing?",
      answer: "You can schedule a viewing directly through our website by selecting the property you're interested in and clicking the 'Schedule Viewing' button. Alternatively, you can call our office during business hours, and our agents will be happy to arrange a viewing at your convenience."
    },
    {
      id: 2,
      question: "What documents do I need to rent a property?",
      answer: "Typically, you'll need proof of identity (passport or ID card), proof of income (recent pay slips or employment contract), and references from previous landlords. For international clients, we may require additional documentation such as a visa or residence permit."
    },
    {
      id: 3,
      question: "Are utilities included in the rent?",
      answer: "This varies by property. Some rentals include basic utilities like water and trash collection, while most don't include electricity, gas, or internet. The listing details will specify what's included. We can provide average utility costs for properties upon request."
    },
    {
      id: 4,
      question: "How long is the typical rental agreement?",
      answer: "Standard rental agreements are typically for 12 months. However, we can sometimes negotiate shorter or longer terms depending on the property owner's preferences and your specific needs. Furnished properties often have minimum stay requirements of 6 months."
    },
    {
      id: 5,
      question: "What is the process for buying a property?",
      answer: "The process begins with finding a property, making an offer, and signing a preliminary contract. You'll then need to secure financing if required, hire a notary for the legal work, and finally sign the final deed of sale. The entire process typically takes 2-3 months from offer to completion."
    },
    {
      id: 6,
      question: "Do you handle property management for owners?",
      answer: "Yes, we offer comprehensive property management services including tenant screening, rent collection, maintenance coordination, and regular property inspections. Our management fees are competitive, and we provide detailed monthly reports to property owners."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 py-16 md:py-24 px-4 sm:px-6 lg:px-8" id='faq'>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-gray-900 mb-4">Frequently Asked Questions (FAQs)</h2>
          <p className="text-md text-gray-700 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum eaque deserunt non, molestias architecto explicabo nostrum odit vel quam.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {faqData.map((faq, index) => (
            <div 
              key={faq.id} 
              className={`border-b border-gray-100 last:border-b-0 transition-colors duration-200 ${activeIndex === index ? 'bg-blue-50' : 'hover:bg-gray-50'}`}
            >
              <button
                className="flex justify-between items-center w-full p-6 text-left"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                <span className="text-lg font-medium text-gray-900 pr-4">{faq.question}</span>
                <svg 
                  className={`flex-shrink-0 w-5 h-5 text-blue-600 transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-6 -mt-2">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;