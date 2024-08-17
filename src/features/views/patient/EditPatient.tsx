import { Header } from "../../components/shared/global/Header";
import { Layout } from "../../components/shared/global/Layout";
// import { UserTypes } from "../../../types/users"; TODO: ADD TYPES HERE
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
  useCreatePatientHistoryMutation,
  useLazyGetRecentPatientHistoryQuery,
} from "../../../redux/api/patientHistory";

import { clearPatientHistory, setActivePatientHistory } from "../../../redux/features/patientHistorySlice";
import { useGetAllProvincesQuery } from "../../../redux/api/addressApi";
import { mapProvinces } from "../../../redux/features/addressSlice";
import { validatePatientForm } from "../../../redux/features/patientValidatorSlice";
import EditPatientValidator from "./components/validator/EditPatientValidator";
import { ternaryChecker } from "../../../utils/ternaryChecker";

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

  const formData = useSelector(
    (state: any) => state.patientValidator.patientDetails
  );

  const patientHistory = useSelector(
    (state: any) => state.patientHistories.patientHistory
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
  const [
    createPatientHistory,
    { isSuccess: patientHistorySuccess, isLoading: patientHistoryLoading },
  ] = useCreatePatientHistoryMutation();

  const historiesPast = useSelector((state : { historyTab: { pastHistory: string }}) => state.historyTab.pastHistory);
  const historiesFamily = useSelector((state : { historyTab: { familyHistory: string }}) => state.historyTab.familyHistory);
  const historiesSocial = useSelector((state : { historyTab: { socialHistory: string }}) => state.historyTab.socialHistory);
  const onSubmit = (data: any): void | boolean => {
    if(patientHistoryLoading) return false;

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
      historiesPast,
      historiesFamily,
      historiesSocial,
      physicianId: ternaryChecker(data.physicianId, patientHistory.physicianId),
    };

    console.log("data", formattedData)
    dispatch(validatePatientForm({ patient: formattedData }));
    createPatientHistory({patientId, ...formData});
  };
  const navigate = useNavigate();
  useEffect(() => {
    if(patientHistorySuccess && !patientHistoryLoading){
      // dispatch(clearPatientHistory());
      // navigate("/patients/list/4f482948-d33f-42ac-8830-a8b182695649"); // TODO : CREATE A CLINIC ID, THAT WAS ADDED IN TOKEN
    }
  },[patientHistorySuccess, patientHistoryLoading])


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
                    <EditPatientValidator formValidator={formValidator} />
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

  const [getRecentPatientHistory, { data: history, isLoading: transactionLoading, isSuccess: transactionSuccess  } ]= useLazyGetRecentPatientHistoryQuery();

  const handleLoadTransaction = async () => {
    // await getPatientHistory(history.result.id);
    await getRecentPatientHistory({ patientId })
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
  const headerDescription =
    "Welcome to the medical history addition form. This form allows you to provide detailed information about patient's medical history, which is essential for effective healthcare management.";
  return (
    <Layout
      pageTitle={"Administrator"}
      Header={
        <Header
          title="Add Transaction - Existing Patient"
          description={headerDescription}
          actions={<ActionButton />}
        />
      }
      Content={<Content />}
      activeLink={0}
    />
  );
};

export default EditPatient;
