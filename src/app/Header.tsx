import Image from "next/image";
import Link from "next/link";
import { LogoutButton } from "./LogoutButton";

export const Header = () => {
  const session = true;

  if (session) {
    return (
      <header className="sticky top-0 z-50 items-center justify-between bg-white p-10 shadow-sm">
        <div className="flex space-x-2 ">
          <Image src={""} width={50} height={100} className="mx-2 rounded-full object-contain" alt="Profile Picture" />

          <div>
            <p className="text-blue-400">Logged in as:</p>
            <p className="text-lg font-bold">Pandashark</p>
          </div>
        </div>

        <LogoutButton />
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 items-center justify-center bg-white p-10 shadow-sm">
      <div className="flex flex-col items-center space-y-5">
        <div className="flex items-center space-x-2">
          <Image src="/images/logo-Meta.png" alt="Logo" height={10} width={50} />

          <p className="text-blue-400">Welcome to Meta Messenger</p>
        </div>

        <Link href="/auth/signin" className="rounded bg-blue-500 p-2 font-bold text-white hover:bg-blue-700">
          Sign In
        </Link>
      </div>
    </header>
  );
};
