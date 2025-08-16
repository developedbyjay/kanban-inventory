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
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

import { useState, useEffect } from "react";
import { Tooltip } from "./Tooltip";
import { useNavigation } from "../../context/ToggleNavigation";

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
  const { expanded, toggleNavigation } = useNavigation();

  const hideElement = ` ${toggleWidth && !expanded ? "hidden" : "block"}`;

  useEffect(() => {
     const handleResize = () => {
       if (window.innerWidth < 900) {
         setToggleWidth(true);
       } else {
         setToggleWidth(false);
       }
     };

     window.addEventListener("resize", handleResize);
     return () => {
       window.removeEventListener("resize", handleResize);
     };
  },[])


  return (
    <aside
      className={` md:flex relative h-full  transition-all duration-1000 ease-in text-gray-600  flex-col ${
        expanded ? "w-full " : "hidden"
      } ${toggleWidth && !expanded ? "w-auto" : "w-48"} `}
    >
      <button
        onClick={() => setToggleWidth(!toggleWidth)}
        className={`${
          expanded ? "hidden" : "block"
        } rounded-full p-1 border-1 absolute right-0 top-50 translate-x-3 w-5 h-5 flex items-center justify-center cursor-pointer focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none`}
      >
        {toggleWidth && <ChevronDoubleRightIcon className="w-4 h-4" />}
        {!toggleWidth && <ChevronDoubleLeftIcon className="w-4 h-4" />}
      </button>
      <div className="px-7 text-2xl mt-3 flex items-center justify-between gap-4 font-semibold mb-4">
        <div className="flex items-center gap-4">
          <Image
            alt="Kanban logo"
            src="/icons/kanban-logo.svg"
            width={60}
            height={60}
          />
          <span className={`${hideElement} text-blue-500 leading-1`}>
            KANBAN
          </span>
        </div>
        <XMarkIcon
          onClick={toggleNavigation}
          className={`${
            expanded ? "block" : "hidden"
          } cursor-pointer w-5 h-5 text-gray-500 hover:text-gray-700`}
        />
      </div>
      <nav className="flex-1 px-3 mt-3">
        <ul
          className={`flex flex-col space-y-3 ${
            toggleWidth && !expanded ? "items-center" : "items-stretch"
          }`}
        >
          {navItems.map((item) => (
            <li
              key={item.href}
              className="hover:bg-gray-300 relative px-3  rounded-4xl flex items-center py-2"
            >
              <Tooltip
                text={item.label}
                showCondition={toggleWidth && !expanded}
              >
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
        className={`flex flex-col mb-20 px-3 mt-2  ${
          toggleWidth && !expanded ? "items-center" : "items-stretch"
        }`}
      >
        <Tooltip text="Settings" showCondition={toggleWidth && !expanded}>
          <Link
            href="/settings"
            className="hover:bg-gray-300 w-full rounded-4xl flex items-center py-[10px] px-3  gap-2"
          >
            <Cog8ToothIcon className="w-5 h-5 " />
            <span className={`${hideElement}`}>Settings</span>
          </Link>
        </Tooltip>
        <Tooltip text="Logout" showCondition={toggleWidth && !expanded}>
          <Link
            href="/logout"
            className="hover:bg-gray-300 w-full  rounded-4xl flex items-center py-[10px] px-3 gap-2 "
          >
            <ArrowLeftStartOnRectangleIcon className="w-5 h-5 " />
            <span className={`${hideElement}`}>Logout</span>
          </Link>
        </Tooltip>
      </div>
    </aside>
  );
}
