import { Header } from "../../components/shared/global/Header";
import { Layout } from "../../components/shared/global/Layout";
import Filter from "../../components/shared/table/Filter";
import TableParentLayout from "../../components/shared/table/TableParentLayout";
import SortingOptions from "../../components/shared/table/SortingOptions";
import Table from "../../components/shared/table/Table";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import CustomButton from "../../components/shared/global/Button";

const Content = () => {
  const columns = [
    { label: "Patient Number", value: "patientNumber" },
    { label: "Full Name", value: "fullName" },
    { label: "Consultation Date", value: "consultationDate" },
    { label: "Age", value: "age" },
    { label: "Contact Number", value: "contactNumber" },
  ];

  const actionButtons = (
    <>
      <Link to="/patient/id-here/info">
        <Button>View Patient Info</Button>
      </Link>
    </>
  );

  return (
    <>
      <TableParentLayout
        filter={<Filter />}
        table={<Table actions={actionButtons} />}
        options={
          <SortingOptions title="Walk In Table Settings" columns={columns} />
        }
      />
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
        <Link to="/patients/list" className="w-full">
          <CustomButton text="Back to Menu" type="button" color="#383d39"/>
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
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, veritatis."
          actions={<ActionButton/>}
        />
      }
      Content={<Content />}
      activeLink={0}
    />
  );
};

export default PatientList;
