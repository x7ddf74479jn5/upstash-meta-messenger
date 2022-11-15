"use client";

export const LogoutButton = () => {
  return (
    <button
      onClick={() => console.log("sign out")}
      className="rounded bg-blue-500 p-2 font-bold text-white hover:bg-blue-700"
    >
      Sign out
    </button>
  );
};
