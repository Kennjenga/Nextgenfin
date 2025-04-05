import React from "react";

const PresetQuestions = ({ onSelectQuestion }) => {
  const questions = [
    "How do I start budgeting?",
    "What is the 50/30/20 rule?",
    "How can I save more money?",
    "How do I pay off debt faster?",
    "Where should I invest my money?",
    "Is inveting in crypto a good idea?",
    "What are the best investment strategies?",
    "How much should I have in an emergency fund?",
  ];

  return (
    <div className="w-full overflow-x-auto pb-4 mb-4">
      <div className="flex space-x-2">
        {questions.map((question, index) => (
          <button
            key={index}
            className="text-xs whitespace-nowrap py-2 px-4 rounded-md border border-gray-300 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            onClick={() => onSelectQuestion(question)}
          >
            {question}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PresetQuestions;
