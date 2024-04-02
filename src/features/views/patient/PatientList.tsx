import { Header } from "../../components/shared/global/Header";
import { Layout } from "../../components/shared/global/Layout";
import Filter from "../../components/shared/table/Filter";
import TableParentLayout from "../../components/shared/table/TableParentLayout";
import SortingOptions from "../../components/shared/table/SortingOptions";
import Table from "../../components/shared/table/Table";
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../../components/shared/global/Button";
import { useGetPatientListQuery } from "../../../redux/api/patients";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { clearDataTable } from "../../../redux/features/patientInfoTabSlice";

const Content = () => {
  const headers = [
    { label: "Patient Number", column: "id" },
    { label: "Last Name", column: "lastName" },
    { label: "First Name", column: "firstName" },
    { label: "Age", column: "age" }
  ];
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dataTable = useSelector((state: any) => state.patients.dataTable);
  const { data: patients, isLoading, isSuccess } = useGetPatientListQuery(null);

  useEffect(() => {
    if(dataTable){
      dispatch(clearDataTable())
      navigate(`/patient/${dataTable.id}/info`)
    }
  }, [dataTable])

  return (
    <>
      {
      
      !isLoading && isSuccess &&
      <TableParentLayout
        filter={<Filter />}
        table={ <Table 
          rows={patients?.result?.patientTransactions}
          headers={headers} 
          btnText="View Patient Info"
          />
        }
        options={
          <SortingOptions title="Walk In Table Settings" columns={headers} />
        }
      />
      }
    </>
  );
};

const ActionButton = () => {
  return (
    <>
      <div className="flex flex-col">
        <Link to="/patient/add/new">
          <CustomButton text="Add Patient" type="button" color="#246068"/>
        </Link>
        <Link to="/branches" className="w-full">
          <CustomButton text="Back to Branch List" type="button" color="#383d39"/>
        </Link>
      </div>
    </>
  )
}

const PatientList = () => {
  return (
    <Layout
      pageTitle={"Administrator"}
      Header={
        <Header
          title="Patients List"
          description="Welcome to the Patient list - Basic Information Viewing tool. This interface allows healthcare providers to access essential details of registered patients quickly and efficiently. "
          actions={<ActionButton/>}
        />
      }
      Content={<Content />}
      activeLink={0}
    />
  );
};

export default PatientList;
