import { useState } from "react"
import Layout from "../components/Layout"
import { Navbar } from "../components/Navbar"
import { Sidebar } from "../components/Sidebar"
import { Header } from "../components/Header"

const AdministratorPage = () => {
    const [tabSelected, setTab] = useState(0)

    const handleTabSwitch = (props:number) => {
        setTab(props)
        
    }
    console.log(tabSelected)

    const content = (
        <div className="min-w-[10em] mx-6 min-h-[20em] bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <ul className="flex flex-wrap rounded-t-lg text-sm font-medium text-center bg-[#3AA0AC] text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
                <li className="">
                    <a href="#" aria-current="page" key={0} className={`inline-block p-4 rounded-t-lg  hover:text-gray-600 ${ tabSelected===0 ?"active:text-blue-600 bg-[#E29000]" : ""} hover:bg-[#E29000] dark:bg-gray-800 dark:text-blue-500`} onClick={()=> handleTabSwitch(0)}>Personal</a>
                </li>
                <li className="">
                    <a href="#" key={1} className={`inline-block p-4 rounded-t-lg  hover:text-gray-600 ${ tabSelected===1 ?"active:text-blue-600 bg-[#E29000]" : ""} hover:bg-[#E29000] dark:hover:bg-gray-800 dark:hover:text-gray-300`} onClick={()=> handleTabSwitch(1)}>Contactssss</a>
                </li>
                <li className="">
                    <a href="#" key={2} className={`inline-block p-4 rounded-t-lg  hover:text-gray-600 ${ tabSelected===2 ?"active:text-blue-600 bg-[#E29000]" : ""} hover:bg-[#E29000] dark:hover:bg-gray-800 dark:hover:text-gray-300`} onClick={()=> handleTabSwitch(2)}>Access</a>
                </li>
            </ul>
            <form>
                {
                    tabSelected===0 ? (
                        <div className="grid gap-6 mb-6 md:grid-row-1 p-3">
                            <div>
                                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                                <input type="text" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                            </div>
                            <div className="grid grid-cols-3 gap-1">
                                <div>
                                    <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                                    <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                                </div>
                                <div>
                                    <label htmlFor="middle_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Middle name</label>
                                    <input type="text" id="middle_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                                </div>
                                <div>
                                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                                    <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-1">
                                <div>
                                    <label htmlFor="date_of_birth" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date Of Birth</label>
                                    <input type="text" id="date_of_birth" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                                </div>
                                <div>
                                    <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
                                    <input type="text" id="age" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                                </div>
                            </div>
                        </div>
                    ):
                    tabSelected===1 ? (
                        <div className="grid gap-6 mb-6 md:grid-cols-2"></div>
                    ):
                    tabSelected===2 (
                        <div className="grid gap-6 mb-6 md:grid-cols-2"></div>
                    )
                }
            </form>
        </div>
    )
  return (
    <div className="">
        <Layout 
        Navbar={<Navbar/>}
        Header={<Header />}
        Sidebar={<Sidebar/>}
        Content={content}
        />
    </div>
  )
}

export default AdministratorPage