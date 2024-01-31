import { Icons, IconName } from "./dumb/Icons";


export const Sidebar = () => {

    return (
        <>
            <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <Icons Icon={IconName.OpenSidebar} />
            </button>

            <aside id="logo-sidebar" className="fixed transition-transform -translate-x-full sm:translate-x-0 top-[4.25em] h-screen" aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-[#246068] dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <a href="#" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-[#E29000] dark:hover:bg-gray-700 hover:text-white group">
                            <Icons Icon={IconName.Dashboard} />
                            <span className="ms-3">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-[#E29000] dark:hover:bg-gray-700 hover:text-white group">
                            <Icons Icon={IconName.Kanban} />
                            <span className="flex-1 ms-3 whitespace-nowrap">Kanban</span>
                            <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-[#E29000] dark:hover:bg-gray-700 hover:text-white group">
                            <Icons Icon={IconName.Inbox} />
                            <span className="flex-1 ms-3 whitespace-nowrap">Inbox</span>
                            <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-[#E29000] dark:hover:bg-gray-700 hover:text-white group">
                            <Icons Icon={IconName.Users} />
                            <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-[#E29000] dark:hover:bg-gray-700 hover:text-white group">
                            <Icons Icon={IconName.Product} />
                            <span className="flex-1 ms-3 whitespace-nowrap">Products</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-[#E29000] dark:hover:bg-gray-700 hover:text-white group">
                            <Icons Icon={IconName.Signin} />
                            <span className="flex-1 ms-3 whitespace-nowrap">Sign In</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-[#E29000] dark:hover:bg-gray-700 hover:text-white group">
                            <Icons Icon={IconName.Signout} />
                            <span className="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    );
}