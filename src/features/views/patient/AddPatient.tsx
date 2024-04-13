import { Header } from "../../components/shared/global/Header";
import { Layout } from "../../components/shared/global/Layout";
import { UserTypes } from "../../../types/users";
import { FormProvider, useForm } from "react-hook-form";
import MenuWithHeader from "../../components/shared/menuWithHeader/MenuWithHeader";
import { useDispatch, useSelector } from "react-redux";
// import dayjs from "dayjs";
import CustomButton from "../../components/shared/global/Button";
import { Link, useNavigate, useParams } from "react-router-dom";
import { headerProps, tabSelectedProps } from "../../../types/patientInfoTypes";
import { useEffect } from "react";
import { setAdd } from "../../../redux/features/actionTypeSlice";
import { Button } from "@mui/material";
import { setTabSelected } from "../../../redux/features/patientInfoTabSlice";
import AddPatientTabUtils from "./components/utils/addPatientTabUtils";
import { useAddNewPatientMutation } from "../../../redux/api/patients";
import { useGetBranchListQuery } from "../../../redux/api/branchApi";

import { useGetAllProvincesQuery } from "../../../redux/api/addressApi";
import { mapProvinces } from "../../../redux/features/addressSlice";

const Content = () => {
  const dispatch = useDispatch();
  const headers = useSelector((state: headerProps) => state.patients.tabs);
  const tabSelected = useSelector(
    (state: tabSelectedProps) => state.patients.tabSelected
  );

  const [createPatient] = useAddNewPatientMutation();
  const methods = useForm<UserTypes>();
  const onSubmit = async (data: UserTypes, errors: any): Promise<void> => {
    // ADD HISTORIES HERE AND DISPATCH THE ARRAY OF HISTORIES IN HISTORYTAB COMPONENT
    console.log(data);
    // if (errors) {
    //   console.log(errors)
    //   return;
    // }
    try {
      await createPatient({ ...data });
      console.log("created patient");
    } catch (error) {
      console.log(error);
    }
    // let formattedDate;
    // formattedDate = "";
    // if (data.dateOfBirth && "$d" in data.dateOfBirth) {
    //   formattedDate = dayjs(data.dateOfBirth.$d).format("L");
    // } else {
    //   formattedDate = dayjs(data.dateOfBirth).format("L");
    // }
    // console.log({ ...data, dateOfBirth: formattedDate });
  };

  return (
    <>
      <div className="flex gap-8">
        <div className="flex-1 flex-col gap-2">
          <div className="min-w-[10em] min-h-[20em] bg-gray-100 border border-gray-200 shadow">
            <MenuWithHeader headers={headers} />
            <FormProvider {...methods}>
              <form
                onSubmit={methods.handleSubmit((data, error) =>
                  onSubmit(data, error)
                )}
                className="p-4"
              >
                <AddPatientTabUtils tabSelected={tabSelected} />
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
                    {tabSelected === 6 ? "Save" : "Next"}
                  </Button>
                </div>
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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // GET Province
  const {
    data: provinces,
    isLoading: isProvincesLoading,
    isSuccess: isProvincesSuccess,
  } = useGetAllProvincesQuery(null);

  useEffect(() => {
    if(provinces && !isProvincesLoading && isProvincesSuccess) {
      dispatch(mapProvinces(provinces));
    }
  }, [provinces, isProvincesLoading, isProvincesSuccess]);
  // End GET Province

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
        <CustomButton
          text="Back to Menu"
          type="button"
          color="#383d39"
          onClick={() => navigate(-1)}
        />
      </div>
    </>
  );
};

const AddPatient = () => {
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(setAdd());
  }, []);

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
