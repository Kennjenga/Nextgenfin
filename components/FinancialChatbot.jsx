"use client";

import React, { useState, useRef, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import PresetQuestions from "./PresetQuestions";
import getFinancialAdvice from "@/utils/financialAdvice";
import { Send, X } from "lucide-react";

const FinancialChatbot = ({ onClose }) => {
  const [messages, setMessages] = useState([
    {
      text: "Hello! I'm your financial assistant. How can I help you today?",
      isUser: false,
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e) => {
    e?.preventDefault();

    if (!input.trim() && !e.message) return;

    const userMessage = e.message || input;

    setMessages((prevMessages) => [
      ...prevMessages,
      { text: userMessage, isUser: true },
    ]);

    setInput("");

    setIsLoading(true);

    try {
      const response = await getFinancialAdvice(userMessage);

      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: response, isUser: false },
        ]);
        setIsLoading(false);
      }, 500);
    } catch (error) {
      console.error("Error getting response:", error);

      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            text: "I'm sorry, I encountered an error. Please try asking something else.",
            isUser: false,
          },
        ]);
        setIsLoading(false);
      }, 500);
    }
  };

  const handleQuestionSelect = (question) => {
    setInput(question);
    handleSend({ message: question });
  };

  const handleClose = () => {
    if (typeof onClose === "function") {
      onClose();
    }
  };

  return (
    <div className="w-full h-full max-w-3xl mx-auto rounded-lg border bg-white text-foreground shadow-sm flex flex-col">
      <div className="border-b p-4 flex flex-col space-y-1.5 relative shrink-0">
        {onClose && (
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        )}
        <h3 className="text-xl font-semibold">Financial Assistant</h3>
        <p className="text-sm text-gray-500">
          Ask me anything about budgeting, saving, investing, or managing your
          finances.
        </p>
      </div>

      <div className="p-4 flex-1 flex flex-col min-h-0 overflow-hidden">
        <div className="mb-4 shrink-0">
          <PresetQuestions onSelectQuestion={handleQuestionSelect} />
        </div>

        <div className="flex-1 flex flex-col space-y-4 overflow-y-auto p-2 min-h-0">
          {messages.map((message, index) => (
            <ChatMessage
              key={index}
              message={message.text}
              isUser={message.isUser}
            />
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-100 rounded-2xl px-4 py-3 max-w-[80%] rounded-tl-none">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 rounded-full bg-current animate-bounce" />
                  <div
                    className="w-2 h-2 rounded-full bg-current animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  />
                  <div
                    className="w-2 h-2 rounded-full bg-current animate-bounce"
                    style={{ animationDelay: "0.4s" }}
                  />
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="border-t p-4 shrink-0">
        <form onSubmit={handleSend} className="flex w-full space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about budgeting, saving, investing..."
            disabled={isLoading}
            className="flex-1 h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="inline-flex items-center justify-center gap-2 h-10 px-4 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default FinancialChatbot;
