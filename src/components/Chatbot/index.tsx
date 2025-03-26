"use client";

import { useState } from "react";
import { Button } from "@nextui-org/react";

interface ChatWindowProps {
  onClose: () => void;
}

const ChatWindow = ({ onClose }: ChatWindowProps) => (
  <div className="w-[350px] h-[500px] bg-white rounded-lg shadow-lg flex flex-col">
    <div className="flex justify-between items-center p-4 border-b">
      <h3 className="text-lg font-semibold">Chat with Us</h3>
      <Button
        isIconOnly
        variant="light"
        onClick={onClose}
        className="text-default-400"
      >
        Close
      </Button>
    </div>
    <div className="flex-grow p-4">Coming soon...</div>
  </div>
);

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <ChatWindow onClose={() => setIsOpen(false)} />
      ) : (
        <Button
          color="primary"
          variant="solid"
          className="rounded-full p-4"
          onClick={() => setIsOpen(true)}
        >
          Chat with Us
        </Button>
      )}
    </div>
  );
}
