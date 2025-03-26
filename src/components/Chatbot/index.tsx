"use client";

import { Button, Input } from "@nextui-org/react";
import { useState, useEffect, useRef } from "react";
import { IoClose, IoSend } from "react-icons/io5";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: '👋 Hi! I am JY Tech AI Assistant. How can I help you today?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Prevent body scroll when chat is open on mobile
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    // Add user message
    const userMessage = { role: 'user' as const, content: input.trim() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // TODO: Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      const response = "Thank you for your message! This is a placeholder response. We'll integrate with a real AI API soon.";
      
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (error) {
      console.error('Failed to get AI response:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Sorry, I encountered an error. Please try again.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <Button
        isIconOnly
        color="primary"
        aria-label="Open chat"
        className="fixed bottom-4 right-4 z-50 shadow-lg rounded-full w-12 h-12 sm:w-14 sm:h-14"
        onClick={() => setIsOpen(true)}
      >
        <IoChatbubbleEllipsesOutline className="w-6 h-6 sm:w-7 sm:h-7" />
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <>
          {/* Mobile Layout */}
          <div className="sm:hidden fixed inset-0 z-[9999] flex flex-col bg-white" style={{ height: '100dvh' }}>
            {/* Header */}
            <div className="flex items-center justify-between px-4 h-14 bg-black text-white">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-semibold">JY</span>
                <span className="text-base font-medium">Tech Assistant</span>
              </div>
              <Button
                isIconOnly
                variant="light"
                aria-label="Close chat"
                className="min-w-8 w-8 h-8 text-white"
                onClick={() => setIsOpen(false)}
              >
                <IoClose className="w-5 h-5" />
              </Button>
            </div>

            {/* Chat Content */}
            <div className="flex-1 overflow-y-auto bg-white">
              <div className="flex flex-col">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} px-4 py-2`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-2 ${
                        message.role === 'user'
                          ? 'bg-primary text-white rounded-br-md'
                          : 'bg-gray-100 rounded-bl-md'
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start px-4 py-2">
                    <div className="max-w-[85%] rounded-2xl px-4 py-2 bg-gray-100 rounded-bl-md">
                      <div className="flex gap-1">
                        <span className="animate-bounce">●</span>
                        <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>●</span>
                        <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>●</span>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Input Area */}
            <form onSubmit={handleSubmit} className="px-4 py-3 bg-white border-t">
              <div className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  variant="bordered"
                  disabled={isLoading}
                  classNames={{
                    input: 'text-base',
                  }}
                />
                <Button
                  isIconOnly
                  type="submit"
                  color="primary"
                  isLoading={isLoading}
                  className="min-w-12 w-12 h-12"
                >
                  <IoSend className="w-5 h-5" />
                </Button>
              </div>
            </form>
          </div>

          {/* Desktop Layout */}
          <div className="hidden sm:block">
            <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[9998]" onClick={() => setIsOpen(false)} />
            <div className="fixed bottom-20 right-4 w-96 h-[600px] bg-white/95 backdrop-blur-md rounded-lg shadow-xl flex flex-col border border-gray-200 z-[9999] overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-lg font-semibold">Chat with Us</h2>
                <Button
                  isIconOnly
                  variant="light"
                  aria-label="Close chat"
                  className="min-w-8 w-8 h-8"
                  onClick={() => setIsOpen(false)}
                >
                  <IoClose className="w-5 h-5" />
                </Button>
              </div>

              {/* Chat Content */}
              <div className="h-[500px] bg-white overflow-y-auto">
                <div className="flex flex-col">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} px-4 py-2`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl px-4 py-2 ${
                          message.role === 'user'
                            ? 'bg-primary text-white rounded-br-md'
                            : 'bg-gray-100 rounded-bl-md'
                        }`}
                      >
                        {message.content}
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start px-4 py-2">
                      <div className="max-w-[85%] rounded-2xl px-4 py-2 bg-gray-100 rounded-bl-md">
                        <div className="flex gap-1">
                          <span className="animate-bounce">●</span>
                          <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>●</span>
                          <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>●</span>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </div>

              {/* Input Area */}
              <form onSubmit={handleSubmit} className="px-4 py-3 bg-white border-t">
                <div className="flex gap-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                    variant="bordered"
                    disabled={isLoading}
                    classNames={{
                      input: 'text-base',
                    }}
                  />
                  <Button
                    isIconOnly
                    type="submit"
                    color="primary"
                    isLoading={isLoading}
                    className="min-w-12 w-12 h-12"
                  >
                    <IoSend className="w-5 h-5" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
}
