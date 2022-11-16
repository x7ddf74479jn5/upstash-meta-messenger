"use client";

import { useEffect } from "react";
import useSWR from "swr";
import { Message } from "../../typings";
import { clientPusher } from "../lib/pusher";
import { fetchMessages } from "../utils/fetchMessages";
import { MessageComponent } from "./MessageComponent";

export const MessageList = () => {
  const { data: messages, error, mutate } = useSWR<Message[]>("/api/getMessages", fetchMessages);

  useEffect(() => {
    const channel = clientPusher.subscribe("messages");

    channel.bind("new-message", async (data: Message) => {
      if (messages?.find((message) => message.id === data.id)) return;

      if (!messages) {
        mutate(fetchMessages);
      } else {
        mutate(fetchMessages, {
          optimisticData: [data, ...messages!],
          rollbackOnError: true,
        });
      }
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages, mutate]);

  return (
    <div className="mx-auto max-w-2xl space-y-5 px-5 pt-8 pb-32 xl:max-w-4xl">
      {messages?.map((message) => (
        <MessageComponent key={message.id} message={message} />
      ))}
    </div>
  );
};
