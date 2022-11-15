import { ChatList } from "./ChatList";
import { MessageList } from "./MessageList";

const HomePage = () => {
  return (
    <main>
      <MessageList />
      <ChatList />
    </main>
  );
};

export default HomePage;
