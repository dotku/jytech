"use client";

import { useRef, useEffect, useState } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { MessageCircle, Send, X } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownComponentProps {
  node?: any;
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
}

function getMessageText(message: any): string {
  if (message.parts) {
    return message.parts
      .filter((p: any) => p.type === "text")
      .map((p: any) => p.text)
      .join("");
  }
  return message.content ?? "";
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/chat",
    }),
  });

  const isLoading = status === "submitted" || status === "streaming";

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    sendMessage({ text: input });
    setInput("");
  };

  const markdownComponents = {
    pre: ({ node, className, children, ...props }: MarkdownComponentProps) => (
      <pre
        className="bg-gray-900 text-white p-2 rounded my-2 overflow-x-auto"
        {...props}
      >
        {children}
      </pre>
    ),
    code: ({
      node,
      inline,
      className,
      children,
      ...props
    }: MarkdownComponentProps) =>
      inline ? (
        <code className="bg-gray-800 text-white px-1 rounded" {...props}>
          {children}
        </code>
      ) : (
        <code {...props}>{children}</code>
      ),
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-gray-900 text-white p-4 rounded-full shadow-lg hover:bg-gray-800 transition-colors"
        aria-label="Open chat"
      >
        <MessageCircle />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <>
          {/* Mobile Layout */}
          <div className="sm:hidden fixed inset-0 z-[9999] flex flex-col bg-white">
            {/* Header */}
            <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-900 text-white">
              <h2 className="text-lg font-semibold">Chat with JYTech AI</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto bg-white">
              <div className="flex flex-col">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.role === "user" ? "justify-end" : "justify-start"
                    } px-4 py-2`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg shadow-sm ${
                        message.role === "user"
                          ? "bg-gray-900 text-white"
                          : "bg-gray-100 text-gray-900"
                      }`}
                    >
                      {message.role === "user" ? (
                        getMessageText(message)
                      ) : (
                        <ReactMarkdown
                          remarkPlugins={[remarkGfm]}
                          className="prose prose-sm max-w-none"
                          components={markdownComponents}
                        >
                          {getMessageText(message)}
                        </ReactMarkdown>
                      )}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
                {status === "submitted" && (
                  <div className="flex justify-start px-4 py-2">
                    <div className="bg-gray-100 text-gray-900 p-3 rounded-lg shadow-sm">
                      Typing...
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Input Form */}
            <div className="mt-auto border-t border-gray-200">
              <form onSubmit={handleSubmit} className="p-4 bg-white">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 p-2 rounded bg-white text-gray-900 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 placeholder-gray-400"
                    disabled={isLoading}
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-gray-900 text-white p-2 rounded hover:bg-gray-800 transition-colors disabled:bg-gray-200 disabled:text-gray-400"
                  >
                    <Send size={20} />
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden sm:flex fixed bottom-0 right-0 w-96 h-[600px] bg-white/95 backdrop-blur-md rounded-lg shadow-xl flex-col border border-gray-200 z-[9999]">
            {/* Header */}
            <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-900 text-white">
              <h2 className="text-lg font-semibold">Chat with JYTech AI</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto bg-white">
              <div className="flex flex-col p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg shadow-sm ${
                        message.role === "user"
                          ? "bg-gray-900 text-white"
                          : "bg-gray-100 text-gray-900"
                      }`}
                    >
                      {message.role === "user" ? (
                        getMessageText(message)
                      ) : (
                        <ReactMarkdown
                          remarkPlugins={[remarkGfm]}
                          className="prose prose-sm max-w-none"
                          components={markdownComponents}
                        >
                          {getMessageText(message)}
                        </ReactMarkdown>
                      )}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
                {status === "submitted" && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 text-gray-900 p-3 rounded-lg shadow-sm">
                      Typing...
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Input Form */}
            <div className="mt-auto border-t border-gray-200">
              <form onSubmit={handleSubmit} className="p-4 bg-white">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 p-2 rounded bg-white text-gray-900 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 placeholder-gray-400"
                    disabled={isLoading}
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-gray-900 text-white p-2 rounded hover:bg-gray-800 transition-colors disabled:bg-gray-200 disabled:text-gray-400"
                  >
                    <Send size={20} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
}
