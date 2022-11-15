"use client";

import { FormEvent, useState } from "react";

export const ChatInput = () => {
  const [input, setInput] = useState("");

  const addMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!input) return;

    const messageToSend = input;

    setInput("");
  };

  return (
    <form
      onSubmit={addMessage}
      className="fixed bottom-0 z-50 flex w-full space-x-2 border-t border-gray-100 px-10 py-5"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter message here..."
        className="flex-1 rounded border border-gray-300 px-5 py-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 disabled:cursor-not-allowed disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={!input}
        className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Send
      </button>
    </form>
  );
};
