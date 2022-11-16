import { useSession } from "next-auth/react";
import Image from "next/image";
import Timeago from "react-timeago";
import { Message } from "../../typings";

type Props = {
  message: Message;
};
export const MessageComponent = ({ message }: Props) => {
  const { data: session } = useSession();
  const isUser = session?.user?.email === message.email;

  return (
    <div className={`flex w-fit ${isUser && "ml-auto"}`}>
      <div className={`shrink-0 ${isUser && "order-2"}`}>
        <Image src={message.profilePic} alt="Profile Picture" className="mx-2 rounded-full" width={50} height={10} />
      </div>

      <div>
        <p
          className={`px-[2px] pb-[2px] text-[0.65rem] ${
            isUser ? "text-right text-blue-400" : "text-left text-red-400"
          }`}
        >
          {message.username}
        </p>

        <div className="flex items-end">
          <div
            className={`w-fit rounded-lg bg-red-400 px-3 py-2 text-white ${
              isUser ? "order-2 ml-auto bg-blue-400" : "bg-red-400"
            }`}
          >
            <p>{message.message}</p>
          </div>

          <p className={`px-2 text-[0.65rem] italic text-gray-300 ${isUser && "text-right"}`}>
            <Timeago date={new Date(message.created_at)}></Timeago>
          </p>
        </div>
      </div>
    </div>
  );
};
