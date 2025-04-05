import { UserButton } from "@clerk/nextjs";
import React from "react";

function DashboardHeader() {
  return (
    <header className="p-5 shadow-sm border-b bg-white flex items-center justify-between">
      {/* Logo/Title Section */}
      <div className="flex items-center gap-2">
        <div className="h-10 w-10 rounded-lg bg-redAccent flex items-center justify-center text-red font-bold text-lg">
          N
        </div>
        <h1 className="text-xl font-semibold text-gray-700">Nextgen</h1>
      </div>

      {/* User Button */}
      <nav>
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              userButtonAvatarBox: "h-10 w-10",
              userButtonPopoverCard: "shadow-md",
            },
          }}
        />
      </nav>
    </header>
  );
}

export default DashboardHeader;
