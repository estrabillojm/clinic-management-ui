import {Layout,Header} from '../../components/IndexComponents'
import Table from '../../components/shared/table/Table';
import SortingOptions from '../../components/shared/table/SortingOptions';
import Filter from '../../components/shared/table/Filter';


const AdminMasterlistPage = () => {

    const columns = [
        { label: "Patient Number", value: "patientNumber" },
        { label: "Full Name", value: "fullName" },
        { label: "Consultation Date", value: "consultationDate" },
        { label: "Age", value: "age" },
        { label: "Contact Number", value: "contactNumber" },
    ]

    const content = (
        <>
        <div className="">
                <div className=" border-8 w-full flex gap-4">
                    <div className="flex flex-col w-full">
                        <Filter/>
                        <Table/>
                    </div>
                    
                    <SortingOptions 
                    title="Walk In Table Settings"
                    columns={columns}
                    />
                </div>
        </div>
        </>
    )
  return (
    <>
        <Layout 
        pageTitle={'Administrator'} 
        activeLink={3} 
        Header={
        <Header title="Admin Masterlist" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, veritatis."/>
        } 
        Content={content}
        />
    </>
  )
}

export default AdminMasterlistPage