"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import FinancialChatbot from "./FinancialChatbot";

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="relative">
          <div className="absolute bottom-0 right-0 mb-16 w-[350px] md:w-[400px] h-[500px] animate-fade-in">
            <FinancialChatbot onClose={toggleChatbot} />
          </div>
          <button
            onClick={toggleChatbot}
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 shadow-lg transition-all duration-200 flex items-center justify-center"
            aria-label="Close chatbot"
          >
            <X size={24} />
          </button>
        </div>
      ) : (
        <button
          onClick={toggleChatbot}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 shadow-lg transition-all duration-200 flex items-center justify-center"
          aria-label="Open financial assistant"
        >
          <MessageCircle size={24} />
        </button>
      )}
    </div>
  );
};

export default FloatingChatbot;
