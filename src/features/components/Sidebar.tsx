import { NavLink } from "react-router-dom";
import { NavbarLinks, NavbarLink } from "./utils/NavbarLinks";
interface sidebarProps {
    pageTitle: string
    activeLink: number
}

export const Sidebar = ({pageTitle,activeLink}:sidebarProps) => {
    const menus: NavbarLink[] = NavbarLinks({page:pageTitle});
    return (
        <>
            <aside id="logo-sidebar" className="fixed transition-transform -translate-x-full sm:translate-x-0 top-[4em] h-screen max-w-[15em]" aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-[#246068] dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        {menus.map((menu, index) => (
                        <li key={index}>
                            <NavLink 
                            to={menu.link} 
                            className={`flex items-center p-2 rounded-lg dark:text-white hover:bg-[#EBCD63] ${activeLink===index ? "bg-[#EBCD63] text-gray-700" : "text-white"} dark:hover:bg-gray-700 hover:text-gray-700 group`}
                            >
                            {menu.icon}
                            <span className="ms-3">{menu.name}</span>
                            </NavLink>
                        </li>
                        ))}
                    </ul>
                </div>
            </aside>
        </>
    );
}