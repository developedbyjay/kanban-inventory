"use client";

import {
  Bars3Icon,
  BellIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { useNavigation } from "../../context/ToggleNavigation";

export const LayoutHeader = () => {
  const { expanded, toggleNavigation } = useNavigation();

  return (
    <header
      className={` flex items-center justify-between py-4 bg-white shadow px-6 overflow-hidden`}
    >
      <div className="w-48 md:w-96 border border-gray-300 rounded-xl items-center space-x-4 p-3">
        <label className="sr-only">Search</label>
        <div className="flex items-center gap-2 ">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search product , supplier, order"
            className=" placeholder:text-[12px] md:text-sm  border-none w-full outline-none border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div className="hidden md:flex items-center space-x-4">
        <BellIcon className="h-6 w-6 text-gray-600" />
        <Image
          src="/icons/profile.svg"
          alt="Profile Picture"
          width={32}
          height={32}
          className="h-8 w-8 rounded-full"
        />
      </div>

      <button
        onClick={toggleNavigation}
        className="md:hidden cursor-pointer border border-gray-300 rounded-full p-1 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none"
      >
        <Bars3Icon className="h-6 w-6 text-gray-600" />
      </button>
    </header>
  );
};
