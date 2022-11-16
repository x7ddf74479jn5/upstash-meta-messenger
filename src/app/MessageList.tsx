"use client";

import useSWR from "swr";
import { Message } from "../../typings";
import { fetchMessages } from "../utils/fetchMessages";
import { MessageComponent } from "./MessageComponent";

export const MessageList = () => {
  const { data: messages, error, mutate } = useSWR<Message[]>("/api/getMessages", fetchMessages);
  return (
    <div className="mx-auto max-w-2xl space-y-5 px-5 pt-8 pb-32 xl:max-w-4xl">
      {messages?.map((message) => (
        <MessageComponent key={message.id} message={message} />
      ))}
    </div>
  );
};
