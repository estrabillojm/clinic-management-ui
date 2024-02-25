import { Header } from "../../components/shared/global/Header";
import { Layout } from "../../components/shared/global/Layout";
import { UserTypes } from "../../../types/users";
import { FormProvider, useForm } from "react-hook-form";
import MenuWithHeader from "../../components/shared/menuWithHeader/MenuWithHeader";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import CustomButton from "../../components/shared/global/Button";
import { Link, useParams } from "react-router-dom";
import { headerProps, tabSelectedProps } from "../../../types/patientInfoTypes";
import PatientTabUtils from "./components/utils/patientTabUtils";

const Content = () => {
  const headers = useSelector(
    (state: headerProps) => state.patientInfoTabs.tabs
  );
  const tabSelected = useSelector(
    (state: tabSelectedProps) => state.patientInfoTabs.tabSelected
  );

  const methods = useForm();
  const onSubmit = (data: UserTypes): void => {
    let formattedDate = "";
    if ("$d" in data.dateOfBirth) {
      formattedDate = dayjs(data.dateOfBirth.$d).format("L");
    } else {
      formattedDate = dayjs(data.dateOfBirth).format("L");
    }
    console.log({ ...data, dateOfBirth: formattedDate });
  };

  return (
    <>
      <div className="flex gap-8">
        <div className="flex-1 flex-col gap-2">
          <div className="min-w-[10em] min-h-[20em] bg-gray-100 border border-gray-200 shadow">
            <MenuWithHeader headers={headers} />
            <FormProvider {...methods}>
              <form
                onSubmit={methods.handleSubmit(onSubmit as () => void)}
                className="p-4"
              >
                <PatientTabUtils tabSelected={tabSelected}/>
              </form>
            </FormProvider>
          </div>
        </div>
      </div>
    </>
  );
};

const ActionButton = () => {
  const params = useParams();
  return (
    <>
      <div className="flex flex-col">
        {params.patientId && (
          <Link to="/patient/id-here/add">
            <CustomButton
              text="Load Recent Transaction"
              type="button"
              color="#246068"
            />
          </Link>
        )}

        <Link to="/patients/list" className="w-full">
          <CustomButton text="Back to Menu" type="button" color="#383d39" />
        </Link>
      </div>
    </>
  );
};

const AddPatient = () => {
  const params = useParams();
  return (
    <Layout
      pageTitle={"Administrator"}
      Header={
        <Header
          title={`${params.patientId ? "Add Existing Patient Transaction" : "New Patient"}`}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, veritatis."
          actions={<ActionButton />}
        />
      }
      Content={<Content />}
      activeLink={0}
    />
  );
};

export default AddPatient;
