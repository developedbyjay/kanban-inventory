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

export function SideBar() {
  const [toggleWidth, setToggleWidth] = useState(false);

  const hideElement = ` ${toggleWidth ? "hidden" : "inline"}`;

  return (
    <aside
      className={`relative h-full  transition-all ease-in-out duration-1000 bg-gray-50 text-gray-600 flex flex-col ${
        toggleWidth ? "w-auto" : "w-64"
      } `}
    >
      <button
        onClick={() => setToggleWidth(!toggleWidth)}
        className="rounded-full p-1 border-1 absolute right-0 top-20 translate-x-3 w-5 h-5 flex items-center justify-center cursor-pointer"
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
          <li className="hover:bg-gray-300 px-3  py-2">
            <Link href="/dashboard" className="">
              <HomeIcon className="w-5 h-5 inline-block mr-2" />
              <span className={`${hideElement}`}>Dashboard</span>
            </Link>
          </li>
          <li className="hover:bg-gray-300  px-3 py-2">
            <Link href="/inventory" className="">
              <BuildingStorefrontIcon className="w-5 h-5 inline-block mr-2" />
              <span className={`${hideElement}`}>Inventory</span>
            </Link>
          </li>
          <li className="hover:bg-gray-300 px-3 py-2">
            <Link href="/report" className="">
              <ChartBarIcon className="w-5 h-5 inline-block mr-2" />
              <span className={`${hideElement}`}>Reports</span>
            </Link>
          </li>
          <li className="hover:bg-gray-300 px-3 py-2">
            <Link href="/suppliers" className="">
              <UserGroupIcon className="w-5 h-5 inline-block mr-2" />
              <span className={`${hideElement}`}>Suppliers</span>
            </Link>
          </li>
          <li className="hover:bg-gray-300 px-3 py-2">
            <Link href="/orders" className="">
              <ShoppingCartIcon className="w-5 h-5 inline-block mr-2" />
              <span className={`${hideElement}`}>Orders</span>
            </Link>
          </li>
          <li className="hover:bg-gray-300 px-3 py-2">
            <Link href="/store" className="">
              <CircleStackIcon className="w-5 h-5 inline-block mr-2 " />
              <span className={`${hideElement}`}>Manage Store</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex flex-col px-6 space-y-3">
        <Link href="/settings" className="hover:bg-gray-300 py-2 px-3">
          <Cog8ToothIcon className="w-5 h-5 inline-block mr-2" />
          <span className={`${hideElement}`}>Settings</span>
        </Link>
        <Link href="/logout" className="hover:bg-gray-300 py-2 px-3">
          <ArrowLeftStartOnRectangleIcon className="w-5 h-5 inline-block mr-2" />
          <span className={`${hideElement}`}>Logout</span>
        </Link>
      </div>
    </aside>
  );
}
