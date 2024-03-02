import { Header } from "../../components/shared/global/Header";
import { Layout } from "../../components/shared/global/Layout";
import { UserTypes } from "../../../types/users";
import { FormProvider, useForm } from "react-hook-form";
import MenuWithHeader from "../../components/shared/menuWithHeader/MenuWithHeader";
import { useDispatch, useSelector } from "react-redux";
import Card from "./components/Card";
import dayjs from "dayjs";
import CustomButton from "../../components/shared/global/Button";
import { Link, useNavigate } from "react-router-dom";
import { headerProps, tabSelectedProps } from "../../../types/patientInfoTypes";
import PatientTabUtils from "./components/utils/patientTabUtils";
import { useEffect } from "react";
import { setEdit } from "../../../redux/features/actionTypeSlice";
import { Button } from "@mui/material";
import { setTabSelected } from "../../../redux/features/patientInfoTabSlice";

const Content = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setEdit());
  }, [])
  const headers = useSelector(
    (state: headerProps) => state.patients.tabs
  );
  const tabSelected = useSelector(
    (state: tabSelectedProps) => state.patients.tabSelected
  );

  const methods = useForm();
  const onSubmit = (data: UserTypes): void => {
    let formattedDate = "";
    if ("$d" in data.dateOfBirth) {
      formattedDate = dayjs(data.dateOfBirth.$d).format("L")
    } else {
      formattedDate = dayjs(data.dateOfBirth).format("L")
    }
    console.log({...data, dateOfBirth: formattedDate})
  };

  return (
    <>
      <div className="flex gap-8">
        <div className="flex-[.8] flex-col gap-2">
          <div className="min-w-[10em] min-h-[20em] bg-gray-100 border border-gray-200 shadow">
            <MenuWithHeader headers={headers} />
            <FormProvider {...methods}>
              <form
                onSubmit={methods.handleSubmit(onSubmit as () => void)}
                className="p-4"
              >
                <PatientTabUtils tabSelected={tabSelected}/>
                <div className="border-t border-gray-300 pt-3 flex justify-end gap-2">
                  <Button
                    variant="outlined"
                    onClick={() =>
                      tabSelected > 0
                        ? dispatch(setTabSelected(tabSelected - 1))
                        : dispatch(setTabSelected(tabSelected))
                    }
                    disabled={tabSelected === 0}
                  >
                    Previous
                  </Button>
                  <Button
                    variant={tabSelected === 6 ? "contained" : "outlined"}
                    color="success"
                    type={tabSelected === 6 ? "submit" : "button"}
                    onClick={() =>
                      tabSelected < 6
                        ? dispatch(setTabSelected(tabSelected + 1))
                        : dispatch(setTabSelected(tabSelected))
                    }
                  >
                    { tabSelected === 6 ? "Update" : "Next"}
                  </Button>
                </div>
              </form>
            </FormProvider>
          </div>
        </div>
        <div className="flex-[.2] border max-h-[70vh] overflow-auto">
          <div className="sticky top-0 p-4 bg-white">
            <h3 className="font-bold pb-2 text-primary">Patient History</h3>
            <hr />
          </div>
          <div className="px-4">
            <Card isActive={true} />
            <Card isActive={false} />
            <Card isActive={false} />
          </div>
        </div>
      </div>
    </>
  );
};

const ActionButton = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col">
        <Link to="/patient/id-here/add">
          <CustomButton text="Add Transaction" type="button" color="#246068"/>
        </Link>
        <CustomButton text="Back" type="button" color="#383d39" onClick={() => navigate(-1)}/>
      </div>
    </>
  )
}

const EditPatient = () => {
  return (
    <Layout
      pageTitle={"Administrator"}
      Header={
        <Header
          title="View Patient Information"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, veritatis."
          actions={<ActionButton/>}
        />
      }
      Content={<Content />}
      activeLink={0}
    />
  );
};

export default EditPatient;
