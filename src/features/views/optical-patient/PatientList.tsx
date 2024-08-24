import { Header } from "../../components/shared/global/Header";
import { Layout } from "../../components/shared/global/Layout";
import TableParentLayout from "../../components/shared/table/TableParentLayout";
import Table from "../../components/shared/table/Table";
import { Link, useNavigate, useParams } from "react-router-dom";
import CustomButton from "../../components/shared/global/Button";
import { useLazyGetPatientListQuery } from "../../../redux/api/patients";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { clearDataTable } from "../../../redux/features/opticalPatientInfoTabSlice";
import { Alert, Button, TextField } from "@mui/material";
import { PATIENT_TYPE } from "../../../enums/patientType";

const Content = () => {
  const headers = [
    { label: "Patient Number", column: "trimmedId" },
    { label: "First Name", column: "firstName" },
    { label: "Last Name", column: "lastName" },
  ];
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dataTable = useSelector((state: any) => state.patients.dataTable);
  const [getPatientList, { data: patients, isLoading, isSuccess }] =
    useLazyGetPatientListQuery();

  const { branchId, clinicId } = useParams();
  useEffect(() => {
    getPatientList({
      clinicId,
      patientType: PATIENT_TYPE.optical,
      params: { searchFirstName, searchLastName },
    });
  }, []);
  useEffect(() => {
    if (dataTable) {
      dispatch(clearDataTable());
      navigate(
        `/optic/${clinicId}/branch/${branchId}/optical/${dataTable.id}/info`
      );
    }
  }, [dataTable]);

  const [searchFirstName, setSearchFirstName] = useState("");
  const [searchLastName, setSearchLastName] = useState("");
  const onSearch = async () => {
    await getPatientList({
      clinicId,
      patientType: PATIENT_TYPE.optical,
      params: { searchFirstName, searchLastName },
    });
  };

  return (
    <>
      {!isLoading && isSuccess && (
        <>
          {patients?.result?.patientTransactions.length < 0 ? (
            <Alert variant="outlined" severity="warning">
              No Result Found
            </Alert>
          ) : (
            <>
              <div className="col-span-3 flex justify-end mb-4 gap-1">
                <TextField
                  size="small"
                  label="First Name"
                  onChange={(e) => setSearchFirstName(e.target.value)}
                />
                <TextField
                  size="small"
                  label="Last Name"
                  onChange={(e) => setSearchLastName(e.target.value)}
                />
                <Button
                  size="small"
                  variant="contained"
                  color="success"
                  onClick={onSearch}
                >
                  Search
                </Button>
              </div>
              <TableParentLayout
                table={
                  <Table
                    rows={patients?.result?.patientTransactions}
                    headers={headers}
                    btnText="View Patient Infoss"
                  />
                }
              />
            </>
          )}
        </>
      )}
    </>
  );
};

const ActionButton = () => {
  const { branchId, clinicId } = useParams();
  return (
    <>
      <div className="flex flex-col">
        <Link to={`/optic/${clinicId}/branch/${branchId}/patient/add/new`}>
          <CustomButton text="Add Patient" type="button" color="#246068" />
        </Link>
        <Link to="/branches" className="w-full">
          <CustomButton
            text="Back to Branch List"
            type="button"
            color="#383d39"
          />
        </Link>
      </div>
    </>
  );
};

const PatientList = () => {
  return (
    <Layout
      pageTitle={"Administrator"}
      Header={
        <Header
          title="Optical Patients List"
          description="Welcome to the Optical Patient Information Viewer. This tool provides healthcare providers with quick and efficient access to essential details about registered patients."
          actions={<ActionButton />}
        />
      }
      Content={<Content />}
      activeLink={2}
    />
  );
};

export default PatientList;
