"use client";

import {
  HomeIcon,
  BuildingStorefrontIcon,
  ChartBarIcon,
  UserGroupIcon,
  ShoppingCartIcon,
  CircleStackIcon,
  Cog8ToothIcon,
  ArrowLeftStartOnRectangleIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import { Tooltip } from "./Tooltip";

const navItems = [
  {
    href: "/dashboard",
    icon: <HomeIcon className="w-5 h-5" />,
    label: "Dashboard",
  },
  {
    href: "/inventory",
    icon: <BuildingStorefrontIcon className="w-5 h-5" />,
    label: "Inventory",
  },
  {
    href: "/report",
    icon: <ChartBarIcon className="w-5 h-5" />,
    label: "Reports",
  },
  {
    href: "/suppliers",
    icon: <UserGroupIcon className="w-5 h-5" />,
    label: "Suppliers",
  },
  {
    href: "/customers",
    icon: <ShoppingCartIcon className="w-5 h-5" />,
    label: "Customers",
  },
  {
    href: "/products",
    icon: <CircleStackIcon className="w-5 h-5" />,
    label: "Products",
  },
];

export function SideBar() {
  const [toggleWidth, setToggleWidth] = useState(false);

  const hideElement = ` ${toggleWidth ? "hidden" : "inline"}`;

  return (
    <aside
      className={`hidden md:flex relative h-full  transition-all duration-1000 ease-in bg-gray-50 text-gray-600  flex-col ${
        toggleWidth ? "w-auto" : "w-64"
      } `}
    >
      <button
        onClick={() => setToggleWidth(!toggleWidth)}
        className="rounded-full p-1 border-1 absolute right-0 top-20 translate-x-3 w-5 h-5 flex items-center justify-center cursor-pointer focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
      >
        {toggleWidth && <ChevronDoubleRightIcon className="w-4 h-4" />}
        {!toggleWidth && <ChevronDoubleLeftIcon className="w-4 h-4" />}
      </button>
      <div className=" px-7 text-2xl mt-3 flex items-center  gap-4 font-semibold mb-4">
        <Image
          alt="Kanban logo"
          src="/icons/kanban-logo.svg"
          width={60}
          height={60}
        />
        <span className={`${hideElement} text-blue-500 leading-1`}>KANBAN</span>
      </div>
      <nav className="flex-1 p-6 mt-3">
        <ul
          className={`flex flex-col space-y-3 ${
            toggleWidth ? "items-center" : "items-stretch"
          }`}
        >
          {navItems.map((item) => (
            <li
              key={item.href}
              className="hover:bg-gray-300 relative px-3 rounded-4xl flex items-center py-3"
            >
              <Tooltip text={item.label} showCondition={toggleWidth}>
                <Link href={item.href} className="flex items-center gap-2">
                  {item.icon}
                  <span className={`${hideElement}`}>{item.label}</span>
                </Link>
              </Tooltip>
            </li>
          ))}
        </ul>
      </nav>
      <div
        className={`flex flex-col px-6 space-y-3 ${
          toggleWidth ? "items-center" : "items-stretch"
        }`}
      >
        <Tooltip text="Settings" showCondition={toggleWidth}>
          <Link
            href="/settings"
            className="hover:bg-gray-300 rounded-4xl flex items-center py-3 px-3 gap-2"
          >
            <Cog8ToothIcon className="w-5 h-5 " />
            <span className={`${hideElement}`}>Settings</span>
          </Link>
        </Tooltip>
        <Tooltip text="Logout" showCondition={toggleWidth}>
          <Link
            href="/logout"
            className="hover:bg-gray-300  rounded-4xl flex items-center py-3 gap-2 px-3"
          >
            <ArrowLeftStartOnRectangleIcon className="w-5 h-5 " />
            <span className={`${hideElement}`}>Logout</span>
          </Link>
        </Tooltip>
      </div>
    </aside>
  );
}
