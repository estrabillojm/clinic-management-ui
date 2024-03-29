import { Header } from "../../components/shared/global/Header";
import { Layout } from "../../components/shared/global/Layout";
import { UserTypes } from "../../../types/users";
import { FormProvider, useForm } from "react-hook-form";
import MenuWithHeader from "../../components/shared/menuWithHeader/MenuWithHeader";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import CustomButton from "../../components/shared/global/Button";
import { useNavigate, useParams } from "react-router-dom";
import { headerProps, tabSelectedProps } from "../../../types/patientInfoTypes";
import EditPatientTabUtils from "./components/utils/editPatientTabUtils";
import { useEffect } from "react";
import { setEdit } from "../../../redux/features/actionTypeSlice";
import { Button } from "@mui/material";
import { setTabSelected } from "../../../redux/features/patientInfoTabSlice";
import { useGetPatientDetailsQuery } from "../../../redux/api/patients";
import { setActivePatient } from "../../../redux/features/patientSlice";
import {
  useGetRecentPatientHistoryQuery,
  useLazyGetPatientHistoryQuery,
} from "../../../redux/api/patientHistory";
import { setActivePatientHistory } from "../../../redux/features/patientHistorySlice";
import { useGetAllProvincesQuery } from "../../../redux/api/addressApi";
import { mapProvinces } from "../../../redux/features/addressSlice";
import { validatePatientForm } from "../../../redux/features/patientValidatorSlice";
import EditPatientValidator from "./components/validator/editPatientValidator";

const Content = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setEdit());
  }, []);
  const headers = useSelector((state: headerProps) => state.patients.tabs);
  const tabSelected = useSelector(
    (state: tabSelectedProps) => state.patients.tabSelected
  );

  const formValidator = useSelector(
    (state: any) => state.patientValidator.invalidFields
  );

  const { patientId } = useParams();

  const {
    data: patientDetails,
    isLoading: detailsLoading,
    isSuccess: detailsSuccess,
  } = useGetPatientDetailsQuery({ patientId });

  useEffect(() => {
    if (patientDetails && !detailsLoading && detailsSuccess) {
      dispatch(setActivePatient(patientDetails));
    }
  }, [patientDetails, detailsLoading, detailsSuccess]);

  const methods = useForm();
  const onSubmit = (data: UserTypes): void => {
    let formattedDate = "";
    if ("$d" in data.dateOfBirth) {
      formattedDate = dayjs(data.dateOfBirth.$d).format("L");
    } else {
      formattedDate = dayjs(data.dateOfBirth).format("L");
    }
    let formattedData = {
      ...data,
      physicianRemarksHeightUnit: "cm",
      physicianRemarksWeightUnit: "kg",
      dateOfBirth: formattedDate,
    };

    dispatch(validatePatientForm({ patient: formattedData }));

    // ADD HISTORIES HERE AND DISPATCH THE ARRAY OF HISTORIES IN HISTORYTAB COMPONENT
  };

  useEffect(() => {
    if (formValidator.length) {
      console.log(formValidator);
    } else {
    }
  }, [formValidator]);

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
                {formValidator.length ? (
                  <>
                    <EditPatientValidator formValidator={formValidator}/>
                  </>
                ) : (
                  <></>
                )}

                <EditPatientTabUtils tabSelected={tabSelected} />
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
                    {tabSelected === 6 ? "Save Transaction" : "Next"}
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
  const navigate = useNavigate();
  const { patientId } = useParams();
  const dispatch = useDispatch();

  const { data: history } = useGetRecentPatientHistoryQuery({ patientId });

  const [
    getPatientHistory,
    { isLoading: transactionLoading, isSuccess: transactionSuccess },
  ] = useLazyGetPatientHistoryQuery();

  const handleLoadTransaction = async () => {
    await getPatientHistory(history.result.id);
  };

  useEffect(() => {
    if (history && !transactionLoading && transactionSuccess) {
      dispatch(setActivePatientHistory(history));
    }
  }, [history, transactionLoading, transactionSuccess]);

  // GET PROVINCE
  const {
    data: provinces,
    isLoading: isProvincesLoading,
    isSuccess: isProvincesSuccess,
  } = useGetAllProvincesQuery(null);

  useEffect(() => {
    if (provinces && !isProvincesLoading && isProvincesSuccess) {
      dispatch(mapProvinces(provinces));
    }
  }, [provinces, isProvincesLoading, isProvincesSuccess]);
  // END GET PROVINCE

  return (
    <>
      <div className="flex flex-col">
        <CustomButton
          text="Load Recent Transaction"
          type="button"
          color="#246068"
          onClick={handleLoadTransaction}
        />
        <CustomButton
          text="Back"
          type="button"
          color="#383d39"
          onClick={() => navigate(-1)}
        />
      </div>
    </>
  );
};

const EditPatient = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setEdit());
  }, []);
  return (
    <Layout
      pageTitle={"Administrator"}
      Header={
        <Header
          title="Add Transaction - Existing Patient"
          description="Welcome to the medical history addition form. This form allows you to provide detailed information about patient's medical history, which is essential for effective healthcare management."
          actions={<ActionButton />}
        />
      }
      Content={<Content />}
      activeLink={0}
    />
  );
};

export default EditPatient;
