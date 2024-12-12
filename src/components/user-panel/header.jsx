import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedNav, setSelectedNav] = useState("Ride");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (navItem) => {
    setSelectedNav(navItem);
  };

  return (
    <header className="flex items-center justify-between px-8 pb-5 pt-8 z-50 shadow-md bg-white">
      {/* Left Section - Logo */}
      <div className="flex items-center space-x-6">
        <img
          src="/images/logo.svg"
          alt="Logo"
          className="h-[40px] w-auto pr-8"
        />

        <nav className="hidden md:flex space-x-9">
          {[
            { name: "Ride", link: "/ride" },
            { name: "Rent", link: "/rent/cars" },
            { name: "Driver", link: "/drivers" },
            { name: "Package", link: "/package" },
            { name: "Reserve", link: "/reserve" },
            { name: "Bill", link: "/bill" },
            { name: "More", link: "/carpool" },
          ].map((navItem) => (
            <Link
              key={navItem.name}
              to={navItem.link}
              onClick={() => handleNavClick(navItem.name)}
              className={`flex flex-col items-center justify-center ${
                selectedNav === navItem.name
                  ? "text-gray-700 "
                  : "text-gray-700"
              }`}
            >
              <img
                src={`/icons/header/${navItem.name.toLowerCase()}.svg`}
                alt={navItem.name}
                className="w-5 h-5"
              />
              <span>{navItem.name}</span>
            </Link>
          ))}
        </nav>
      </div>

      <div className="relative">
        {/* Profile Button */}
        <div className="flex items-center justify-center gap-6">
          <Link to={"/wallet"}>
            <img src="/icons/header/wallet.svg" alt="" />
          </Link>
          <button
            onClick={toggleDropdown}
            className="flex items-center space-x-2"
          >
            <img
              src="/images/avatar.png"
              alt="User"
              className="w-10 h-10 rounded-full"
            />
            <span className="text-gray-700">Mr. Edmund</span>
            {isOpen ? (
              <FaChevronUp className="ml-1" />
            ) : (
              <FaChevronDown className="ml-1" />
            )}
          </button>
        </div>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute right-0 mt-2 w-56 bg-white border rounded-lg shadow-lg z-50">
            <div className="p-4 border-b flex items-center space-x-2 justify-between">
              <div className="flex items-center space-x-2">
                <img
                  src="/images/avatar.png"
                  alt="User"
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-gray-700">Mr. Edmund</span>
              </div>
              <Link to={"/activity"}>
                <img src="/icons/header/pad.svg" alt="" />
              </Link>
            </div>
            <ul className="py-2">
              <Link
                to={"/settings"}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center space-x-4"
              >
                <img src="/icons/header/account.svg" alt="" />
                <span>Account settings</span>
              </Link>
              <Link
                to={"/languages"}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center space-x-4"
              >
                <img src="/icons/header/language.svg" alt="" />
                <span>Language</span>
              </Link>
              <Link
                to={"/privacy-policy"}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center space-x-4"
              >
                <img src="/icons/header/legal.svg" alt="" />
                <span>Legal</span>
              </Link>
              <Link
                to={"/"}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center space-x-4"
              >
                <img src="/icons/header/logout.svg" alt="" />
                <span>Log out</span>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
