"use client";

import { FormEvent, useState } from "react";
import useSWR from "swr";
import { v4 as uuid } from "uuid";
import { Message } from "../../typings";
import { fetchMessages } from "../utils/fetchMessages";

export const ChatInput = () => {
  const [input, setInput] = useState("");
  const { data: messages, error, mutate } = useSWR("/api/getMessages", fetchMessages);

  const addMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!input) return;

    const messageToSend = input;

    setInput("");

    const id = uuid();

    const message: Message = {
      id,
      message: messageToSend,
      created_at: Date.now(),
      username: "Pandashark",
      profilePic: "",
      email: "x7ddf74479jn5@gmail.com",
    };

    const uploadToUpstash = async () => {
      const data = await fetch("/api/addMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      }).then((res) => res.json());

      return [data.message, ...messages!];
    };

    await mutate(uploadToUpstash, {
      optimisticData: [message, ...messages!],
      rollbackOnError: true,
    });
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
