import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
export const Navbar = () => {
  const [dropdown,setDropdown] = useState(false)
  return (
    <>
        <nav className="bg-[#3AA0AC] dark:bg-gray-900 fixed  border-red-200 w-full">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Clinic Management System</span>
            </a>
            <div className="relative">
                <button id="dropdownAvatarNameButton" data-dropdown-toggle="dropdownAvatarName" className="flex items-center text-sm pe-1 font-medium text-white rounded-full hover:text-[#EBCD63] dark:hover:text-blue-500 md:me-0 dark:focus:ring-gray-700 dark:text-white" type="button" onClick={()=>setDropdown(!dropdown)}>
                <span className="sr-only">Open user menu</span>
                testuser@gmail.com
                {
                  dropdown ? <FaAngleUp /> : <FaAngleDown />
                }
                </button>
                <div id="dropdownAvatarName" className={`absolute z-10 ${!dropdown ? "hidden" : ""} bg-[#246068] divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
                  <ul className="py-2 text-sm text-white dark:text-gray-200" aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton">
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                    </li>
                  </ul>
                  <div className="py-2">
                    <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                  </div>
                </div>
            </div>
            
            </div>
        </nav>
    </>
  )
}