"use client";
import { FileClock, Home, Settings, WalletCards } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import UsageTrack from "./UsageTrack";

const SideNav = () => {
  const MenuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: FileClock,
      path: "/dashboard/history",
    },
    {
      name: "Billing",
      icon: WalletCards,
      path: "/dashboard/billing",
    },
    {
      name: "Setting",
      icon: Settings,
      path: "/dashboard/settings",
    },
  ];

  const path = usePathname();

  return (
    <div className="h-screen p-5 shadow-sm border bg-white">
      <div className="flex justify-center mb-6">
        <Image src="/logo.svg" alt="logo" width={42} height={42} />
      </div>
      <hr className="my-6 border" />
      <div className="mt-10">
        {MenuList.map((menu) => (
          <Link
            key={menu.path}
            href={menu.path}
            className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center ${
              path === menu.path ? 'bg-primary text-white' : ''
            }`}
          >
            <menu.icon className="h-7 w-7" />
            <h2 className="text-lg">{menu.name}</h2>
          </Link>
        ))}
      </div>
      <div className="absolute bottom-10 left-0 w-full">
        <UsageTrack />
      </div>
    </div>
  );
};

export default SideNav;
