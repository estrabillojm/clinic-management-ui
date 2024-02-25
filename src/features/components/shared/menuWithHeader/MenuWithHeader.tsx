import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTabSelected } from "../../../../redux/features/patientInfoTabSlice";

type headers = {
    label: string;
}
type Props = {
   headers: headers[]
}
const MenuWithHeader = ({ headers } : Props) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setTabSelected(0))
    }, [])
    const tabSelected = useSelector((state : any) => state.patientInfoTabs.tabSelected);
    const handleTabSwitch = (index: number) => {
        dispatch(setTabSelected(index))
    };

    return ( 
        <>
            <ul className="flex flex-wrap text-sm font-medium text-center bg-primary text-white dark:border-gray-700 dark:text-gray-400">
                {
                    headers.length && headers.map((header, index) => (
                    <li key={index}>
                    <a
                        href="#"
                        aria-current="page"
                        key={index}
                        className={`inline-block p-4 hover:text-activeLink ${tabSelected === index ? "text-activeLink border-b-4 border-b-activeLink" : ""} hover:border-b-activeLink hover:border-b-4 hover:text-activeLink `}
                        onClick={() => handleTabSwitch(index)}
                    >
                        { header.label }
                    </a>
                    </li>
                    ))
                }
            </ul>
            
        
        </>
    );
}
 
export default MenuWithHeader;