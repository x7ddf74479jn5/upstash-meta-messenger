"use client";

import { signOut } from "next-auth/react";

export const LogoutButton = () => {
  return (
    <button onClick={() => signOut()} className="rounded bg-blue-500 p-2 font-bold text-white hover:bg-blue-700">
      Sign out
    </button>
  );
};
