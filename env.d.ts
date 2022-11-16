declare namespace NodeJS {
  interface ProcessEnv {
    readonly REDIS_URL: string;
    readonly PUSHER_SECRET: string;
  }
}
