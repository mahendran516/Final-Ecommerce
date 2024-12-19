import React from "react";
import { Link } from "react-router-dom";
import bglogo from "../../assets/bglogo.png";
const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <img src={bglogo} className="h-10" alt=" Logo" />

          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link className="hover:underline me-4 md:me-6">About</Link>
            </li>
            <li>
              <Link className="hover:underline me-4 md:me-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className="hover:underline me-4 md:me-6">Licensing</Link>
            </li>
            <li>
              <Link className="hover:underline">Contact</Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024 Amazon. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
