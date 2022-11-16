import Pusher from "pusher";
import ClientPusher from "pusher-js";

export const serverPusher = new Pusher({
  appId: "1507951",
  key: "60b14c4ebbb7ba74ffa7",
  secret: process.env.PUSHER_SECRET,
  cluster: "ap3",
  useTLS: true,
});

export const clientPusher = new ClientPusher("60b14c4ebbb7ba74ffa7", {
  cluster: "ap3",
  forceTLS: true,
});
