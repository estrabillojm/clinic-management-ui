import { useEffect } from "react";
import { useGetListQuery, useLazyGetListQuery } from "../../redux/api/sampleApi";
import { Sidebar } from "../components/Sidebar";

const SamplePage = () => {
    // UNCOMMENT isLoading function, etc IF THEY ARE NEEDED IN CONDITIONAL RENDERING
    const { data : post, isLoading/*, isSuccess, isError*/ } = useGetListQuery(null); // TRIGGER WHEN THE DOCUMENT MOUNTED
    const [getList, { data : lazyPost, isSuccess: isLazySuccess }] = useLazyGetListQuery(); // TRIGGER WHEN THE DOCUMENT MOUNTED

    useEffect(()=> {
        if(!isLoading){
            console.log("TRIGGERED BY useGetListQuery : (ON MOUNT) ", post);
        }
    }, [post, isLoading])

    const handleTrigger = () => {
        getList(null);
    }

    useEffect(() => {
        if(lazyPost && isLazySuccess){
            console.log("TRIGGERED MANUALLY : ", lazyPost);
        }
    }, [lazyPost, isLazySuccess])

    return ( 
        <>
            <Sidebar />
            <h1 className="text-3xl text-red-700">Sample Page</h1>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Default</span>
            <button className="border bg-red-500 text-white" onClick={handleTrigger}>Trigger Request</button>
        </>
    );
}
 
export default SamplePage;