// FAQ.jsx
import React, { useState } from 'react';

const faqData = [
  {
    question: "Can I use Albino for my clients?",
    answer:
      "With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre.",
  },
  { question: "Does it work with WordPress?", answer: "Yes, it works seamlessly with WordPress." },
  { question: "Do I get free updates?", answer: "Yes, all updates are free for registered users." },
  { question: "Will you provide support?", answer: "Absolutely! Our support team is available to help you." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl px-4 py-16 mx-auto">
      <h2 className="mb-2 text-3xl font-bold text-center">Frequently Asked Questions</h2>
      <p className="mb-8 text-center text-gray-500">
        With lots of unique blocks, you can easily build a page without coding.<br />
        Build your next consultancy website within few minutes.
      </p>

      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="overflow-hidden border border-gray-200 rounded-lg"
          >
            <button
              className="flex items-center justify-between w-full px-4 py-3 text-left focus:outline-none"
              onClick={() => toggle(index)}
            >
              <span className="font-medium text-gray-800">{item.question}</span>
              <span className="text-gray-500">{openIndex === index ? "▲" : "▼"}</span>
            </button>
            {openIndex === index && (
              <div className="px-4 py-3 text-gray-600 border-t border-gray-200">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      <p className="mt-6 text-center text-gray-500">
        Haven't got your answer?{' '}
        <a href="#" className="text-blue-500 underline">Contact our support now</a>
      </p>
    </div>
  );
}
