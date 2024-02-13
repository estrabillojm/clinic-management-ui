import {Navbar,Header} from '../components/IndexComponents'
import { FaGears, FaFont, FaXmark } from "react-icons/fa6";


const AdminMasterlistPage = () => {


    const content = (
        <>
        <div className="grid grid-cols-5 gap-3 w-[96%]">
                <div className="overflow-x-auto col-span-4 w-[62em]">
                    <div className="flex justify-end pb-4">
                        <label htmlFor="table-search" className="sr-only">Search</label>
                        <div className="relative mt-1">
                            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            <input type="text" id="table-search" className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items"/>
                        </div>
                    </div>
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 shadow-lg min-h-[20em]">
                        <thead className="text-xs text-white uppercase bg-primary dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="p-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                                    </div>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    User ID
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Full Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    System Role
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    User Role
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="w-4 p-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Apple MacBook Pro 17"
                                </th>
                                <td className="px-6 py-4">
                                    Silver
                                </td>
                                <td className="px-6 py-4">
                                    Laptop
                                </td>
                                <td className="px-6 py-4">
                                    $2999
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="justify-self-end w-[4em] col-span-1 min-h-[20em] bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                    <div className="grid grid-cols-1 gap-3 ml-[14px] mt-4">
                        <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className="text-gray-700 text-3xl bg-transparent" type="button">
                        <FaGears/>
                        </button>
                        <div id="authentication-modal" data-modal-backdrop="static" tabIndex={-1} aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                            
                            <div className="fixed top-0 right-0 bottom-0 left-0 bg-black opacity-70 z-40">
                                <div className="relative p-4 w-full max-w-md max-h-full z-50">
                                    <div className="relative bg-gray-200 rounded-lg shadow dark:bg-gray-700">
                                        <div className="flex items-center justify-between p-4 md:p-5 dark:border-gray-600">
                                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Walk In Table Settings</h3>
                                            <button type="button" className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                                                <FaXmark/>
                                            </button>
                                        </div>
                                        <hr className="h-px mx-2 bg-gray-700 border-0 dark:bg-gray-700"></hr>
                                        <div className="p-4 md:p-5">
                                            <h4 className="text-primary">Visible Columns:</h4>
                                            <div className="flex flex-cols gap-4 py-2 px-4">
                                                <div>
                                                    <div className="flex items-center mb-1">
                                                        <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:text-green-500 dark:focus:text-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-primary dark:text-gray-300">Patient Number</label>
                                                    </div>
                                                    <div className="flex items-center mb-1">
                                                        <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:text-green-500 dark:focus:text-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-primary dark:text-gray-300">Full Name</label>
                                                    </div>
                                                    <div className="flex items-center mb-1">
                                                        <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:text-green-500 dark:focus:text-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-primary dark:text-gray-300">Consultation Date</label>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="flex items-center mb-1">
                                                        <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:text-green-500 dark:focus:text-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-primary dark:text-gray-300">Age</label>
                                                    </div>
                                                    <div className="flex items-center mb-1">
                                                        <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:text-green-500 dark:focus:text-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-primary dark:text-gray-300">Contact Number</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-3 ml-[14px] mt-4">
                        <button data-popover-target="popover-click" data-popover-trigger="click" data-popover-placement="left" type="button" className="text-gray-700 text-3xl bg-transparent"><FaFont/></button>

                        <div data-popover id="popover-click" role="tooltip" className="absolute z-10 invisible inline-block w-64 text-sm border-1 border-gray-100 text-gray-500 transition-opacity duration-300 bg-gray-200  rounded-lg shadow-md opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
                            <div className="px-3 py-2 bg-gray-200 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
                                <h3 className="font-semibold text-primary dark:text-white">Sort by:</h3>
                            </div>
                            <div className="px-3 py-2">
                                <div className="flex items-center mb-4">
                                    <input id="disabled-radio-1" type="radio" value="" name="radio1" className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label htmlFor="disabled-radio-1" className="ms-2 text-sm font-medium text-primary dark:text-gray-500">Last Name</label>
                                </div>
                                <div className="flex items-center">
                                    <input id="disabled-radio-2" type="radio" value="" name="radio1" className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label htmlFor="disabled-radio-2" className="ms-2 text-sm font-medium text-primary dark:text-gray-500">Consultation Date</label>
                                </div>
                            </div>
                            <hr className="h-px mx-4 bg-primary border-0 dark:bg-gray-700"></hr>
                            <div className="px-3 py-2 bg-gray-200 dark:bg-gray-700">
                                <h3 className="font-semibold text-primary dark:text-white">Sort Order:</h3>
                            </div>
                            <div className="px-3 py-2">
                                <div className="flex items-center mb-4">
                                    <input id="disabled-radio-3" type="radio" value="" name="radio2" className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:text-green-500 dark:focus:text-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label htmlFor="disabled-radio-3" className="ms-2 text-sm font-medium text-primary dark:text-gray-500">Ascending</label>
                                </div>
                                <div className="flex items-center">
                                    <input id="disabled-radio-4" type="radio" value="" name="radio2" className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:text-green-500 dark:focus:text-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label htmlFor="disabled-radio-4" className="ms-2 text-sm font-medium text-primary dark:text-gray-500">Descending</label>
                                </div>
                            </div>
                            <div data-popper-arrow></div>
                        </div>
                    </div>

                </div>
        </div>
        </>
    )
  return (
    <>
        <Navbar pageTitle={'Administrator'} activeLink={3} Header={<Header title="Admin Masterlist" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, veritatis."/>} Content={content}/>
    </>
  )
}

export default AdminMasterlistPage