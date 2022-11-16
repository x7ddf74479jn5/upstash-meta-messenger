import { signIn } from "next-auth/react";
import type { Providers } from "./page";

type Props = {
  providers: Providers;
};
export const SignInComponent = ({ providers }: Props) => {
  return (
    <div className="flex justify-center">
      {Object.values(providers!).map((provider) => (
        <div className="" key={provider.name}>
          <button
            className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
            onClick={() => signIn(provider.id, { callbackUrl: process.env.VERCEL_URL || "http://localhost:3000" })}
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
};
