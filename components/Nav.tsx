"use client";
import React from "react";

type Props = {};

function Nav({}: Props) {
  return (
    <nav className="bg-transparent">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <ul className="flex items-center space-x-4">
            <li>
              <a
                href="#"
                className="text-gray-300 hover:text-white hover:bg-gray-700 py-2 px-3 rounded-md"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-300 hover:text-white hover:bg-gray-700 py-2 px-3 rounded-md"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-300 hover:text-white hover:bg-gray-700 py-2 px-3 rounded-md"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
