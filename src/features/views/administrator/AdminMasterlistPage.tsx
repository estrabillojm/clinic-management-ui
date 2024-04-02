import {Layout,Header} from '../../components/shared/global/IndexComponents'
import Table from '../../components/shared/table/Table';
import SortingOptions from '../../components/shared/table/SortingOptions';
import Filter from '../../components/shared/table/Filter';
import TableParentLayout from '../../components/shared/table/TableParentLayout';


const AdminMasterlistPage = () => {

    const headers = [
        { label: "Last Name", column: "lastName" },
    ]

    const content = (
        <>
      <TableParentLayout
        filter={<Filter />}
        table={ <Table 
          rows={[]}
          headers={headers} 
          btnText="View Patient Info"
          />
        }
        options={
          <SortingOptions title="Walk In Table Settings" columns={headers} />
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