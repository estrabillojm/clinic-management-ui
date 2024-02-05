import { Breadcrumb } from "./Breadcrumb"
import { NavLink } from "react-router-dom"

interface headerProps {
  title: string;
  description: string;
}

export const Header = ({...props}:headerProps) => {
  return (
    <div className="mx-6 mb-4 flex flex-col gap-2 ml-screen border-20 border-red-800 ">
        <div className="flex flex-row justify-between">
          <span className="text-3xl">{props.title}</span>
          <NavLink to={'/Administrator'} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
          Back to Menu
          </NavLink>      
        </div>
        <span className="text-md">{props.description}</span>
        <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <Breadcrumb />
    </div>
  )
}
