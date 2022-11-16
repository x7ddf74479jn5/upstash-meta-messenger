import Image from "next/image";
import { Message } from "../../typings";

type Props = {
  message: Message;
};
export const MessageComponent = ({ message }: Props) => {
  return (
    <div className="flex w-fit">
      <div className="shrink-0">
        <Image src={message.profilePic} alt="Profile Picture" className="mx-2 rounded-full" width={50} height={10} />
      </div>

      <div>
        <p className="px-[2px] pb-[2px] text-[0.65rem] text-red-400">{message.username}</p>

        <div className="flex items-end">
          <div className="w-fit rounded-lg bg-red-400 px-3 py-2 text-white">
            <p>{message.message}</p>
          </div>

          <p className="px-2 text-[0.65rem] italic text-gray-300">{new Date(message.created_at).toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};
