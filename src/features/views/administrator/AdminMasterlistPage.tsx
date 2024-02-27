import {Layout,Header} from '../../components/shared/global/IndexComponents'
import Table from '../../components/shared/table/Table';
import SortingOptions from '../../components/shared/table/SortingOptions';
import Filter from '../../components/shared/table/Filter';
import TableParentLayout from '../../components/shared/table/TableParentLayout';


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
            <TableParentLayout
                filter={<Filter/>}
                table={<Table actions={(<button>Test</button>)}/>}
                options={
                    <SortingOptions 
                        title="Walk In Table Settings"
                        columns={columns}
                    />
                }
            />
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