import { Header } from "../../components/shared/global/Header";
import { Layout } from "../../components/shared/global/Layout";
import Filter from "../../components/shared/table/Filter";
import TableParentLayout from "../../components/shared/table/TableParentLayout";
import SortingOptions from "../../components/shared/table/SortingOptions";
import Table from "../../components/shared/table/Table";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

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

const PatientList = () => {
  return (
    <Layout
      pageTitle={"Administrator"}
      Header={
        <Header
          title="Patients List"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, veritatis."
        />
      }
      Content={<Content />}
      activeLink={0}
    />
  );
};

export default PatientList;
