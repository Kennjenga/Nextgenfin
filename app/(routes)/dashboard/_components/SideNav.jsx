import React from "react";
import {
  LayoutGrid,
  PiggyBank,
  ReceiptText,
  ShieldCheck,
  CircleDollarSign,
  Settings,
  LogOut,
} from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useUser, useClerk } from "@clerk/nextjs"; // Import useClerk for logout

function SideNav({ className }) {
  const { user } = useUser(); // Fetch the user object from Clerk
  const { signOut } = useClerk(); // Use Clerk's signOut method

  const menuList = [
    {
      id: 1,
      name: "Dashboard",
      icon: LayoutGrid,
      path: "/dashboard",
      active: true,
    },
    {
      id: 2,
      name: "Incomes",
      icon: CircleDollarSign,
      path: "/dashboard/incomes",
      active: false,
    },
    {
      id: 3,
      name: "Budgets",
      icon: PiggyBank,
      path: "/dashboard/budgets",
      active: false,
    },
    {
      id: 4,
      name: "Expenses",
      icon: ReceiptText,
      path: "/dashboard/expenses",
      active: false,
    },
    {
      id: 5,
      name: "Taxes",
      icon: ShieldCheck,
      path: "/dashboard/taxes",
      active: false,
    },
  ];

  return (
    <div
      className={cn(
        "h-screen border-r shadow-sm bg-white flex flex-col",
        className
      )}
    >
      <div className="p-5">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 bg-redAccent rounded-lg flex items-center justify-center">
            <Image
              src="/logo.svg"
              alt="Logo"
              className="h-8 w-8"
              width={30}
              height={30}
            />
          </div>
          <span className="text-redAccent font-bold text-xl">Nextgen</span>
        </div>

        <div className="mt-8 flex flex-col gap-1">
          {menuList.map((menu) => (
            <a
              key={menu.id}
              href={menu.path}
              className={cn(
                "flex gap-3 items-center p-3 rounded-lg transition-colors",
                menu.active
                  ? "text-red bg-redLight font-medium"
                  : "text-gray-500 hover:bg-gray-100"
              )}
            >
              <menu.icon
                size={20}
                className={menu.active ? "text-redAccent" : "text-gray-500"}
              />
              <span>{menu.name}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="mt-auto p-5 border-t">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
            {/* User's first and last initials */}
            <span className="text-gray-700 font-medium">
              {user?.firstName?.[0]}
              {user?.lastName?.[0]}
            </span>
          </div>
          <div>
            {/* User's name and email */}
            <p className="font-medium text-sm">{user?.fullName || "User"}</p>
            <p className="text-xs text-gray-500">
              {user?.emailAddresses[0]?.emailAddress}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <a
            href="#"
            className="flex gap-3 items-center p-3 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
          >
            <Settings size={20} />
            <span>Settings</span>
          </a>
          <button
            onClick={signOut} // Use Clerk's signOut method
            className="flex gap-3 items-center p-3 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
