declare namespace NodeJS {
  interface ProcessEnv {
    readonly REDIS_URL: string;
    readonly PUSHER_SECRET: string;
    readonly FACEBOOK_ID: string;
    readonly FACEBOOK_SECRET: string;
    readonly NEXTAUTH_SECRET: string;
  }
}
