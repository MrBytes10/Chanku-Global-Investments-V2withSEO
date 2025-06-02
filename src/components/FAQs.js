//B:\mytestProjects\PatriciaConstructions\v1\src\components\FAQs.js

// FAQs.js
"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="w-full flex justify-between items-center py-4 text-left"
        onClick={onToggle}>
        <h3 className="text-lg font-semibold text-gray-900">{question}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-[#01aaeb]" />
        ) : (
          <ChevronDown className="h-5 w-5 text-[#01aaeb]" />
        )}
      </button>
      {isOpen && (
        <div className="pb-4 text-gray-600 animate-fadeIn">{answer}</div>
      )}
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What services does ChankuGlobal Ltd. offer?",
      answer:
        "We offer a wide range of construction services including civil construction, structural engineering, and project management.",
    },
    {
      question: "How can I contact ChankuGlobal Ltd.?",
      answer:
        "You can reach us through our contact page or email us at info@chankuglobal.co.ke.",
    },
    {
      question: "What is your approach to safety?",
      answer:
        "Safety is our top priority. We adhere to strict safety standards and conduct regular training for our team.",
    },
    {
      question: "Do you have a portfolio of completed projects?",
      answer:
        "Yes, we have a portfolio showcasing our completed projects available on our website.",
    },
    {
      question: "What is your policy on sustainability?",
      answer:
        "We are committed to sustainable practices and strive to minimize our environmental impact in all our projects.",
    },
    {
      question: "How can I get a quote for a project?",
      answer:
        "You can request a quote through our website or by contacting us directly.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Everything you need to know about ChankuGlobal Ltd. and our services
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={index === openIndex}
              onToggle={() => setOpenIndex(index === openIndex ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
