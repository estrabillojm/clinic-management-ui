import { Header } from "../../components/shared/global/Header";
import { Layout } from "../../components/shared/global/Layout";
import { FormProvider, useForm } from "react-hook-form";
import MenuWithHeader from "../../components/shared/menuWithHeader/MenuWithHeader";
import { useDispatch, useSelector } from "react-redux";
import Card from "./components/Card";
import CustomButton from "../../components/shared/global/Button";
import { Link, useNavigate, useParams } from "react-router-dom";
import { headerProps, tabSelectedProps } from "../../../types/patientInfoTypes";
import PatientTabUtils from "./components/utils/patientTabUtils";
import { useEffect, useState } from "react";
import {
  useGetPatientHistoriesQuery,
  useGetRecentPatientHistoryQuery,
  useLazyGetPatientHistoryQuery,
} from "../../../redux/api/patientHistory";
import { setActivePatientHistory } from "../../../redux/features/patientHistorySlice";
import { setView } from "../../../redux/features/actionTypeSlice";
import { Button } from "@mui/material";
import { setTabSelected } from "../../../redux/features/patientInfoTabSlice";
import { useGetPatientDetailsQuery } from "../../../redux/api/patients";
import { setActivePatient } from "../../../redux/features/patientSlice";

const Content = () => {
  const dispatch = useDispatch();
  const actionType = useSelector((state: any) => state.actionType.actionType);
  useEffect(() => {
    dispatch(setView());
  }, []);
  const headers = useSelector((state: headerProps) => state.patients.tabs);
  const tabSelected = useSelector(
    (state: tabSelectedProps) => state.patients.tabSelected
  );

  const { patientId } = useParams();
  const {
    data: history,
    isLoading,
    isSuccess,
  } = useGetRecentPatientHistoryQuery({ patientId });

  const {
    data: histories,
    isLoading: historiesLoading,
    isSuccess: historiesSuccess,
  } = useGetPatientHistoriesQuery({ patientId });

  const {
    data: patientDetails,
    isLoading: detailsLoading,
    isSuccess: detailsSuccess,
  } = useGetPatientDetailsQuery({ patientId });

  const [
    getPatientHistory,
    {
      data: patientHistory,
      isLoading: patientHistoryLoading,
      isSuccess: patientHistorySuccess,
    },
  ] = useLazyGetPatientHistoryQuery();

  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    if (history && !isLoading && isSuccess) {
      dispatch(setActivePatientHistory(history));
      let recentHistory = history.result;
      setActiveCard(recentHistory?.id);
    }
  }, [history, isLoading, isSuccess]);

  useEffect(() => {
    if (patientDetails && !detailsLoading && detailsSuccess) {
      dispatch(setActivePatient(patientDetails));
    }
  }, [patientDetails, detailsLoading, detailsSuccess]);

  const methods = useForm();

  const handleCardClick = async (history: any) => {
    setActiveCard(history?.id);
    await getPatientHistory(history.id);
  };

  useEffect(() => {
    if(patientHistory && !patientHistoryLoading && patientHistorySuccess){
      dispatch(setActivePatientHistory(patientHistory));
    }
  }, [patientHistory])

  return (
    <>
      {isSuccess && detailsSuccess && actionType === "View" && (
        <div className="flex gap-8">
          <div className="flex-[.8] flex-col gap-2">
            <div className="min-w-[10em] min-h-[20em] bg-gray-100 border border-gray-200 shadow">
              <MenuWithHeader headers={headers} />
              <FormProvider {...methods}>
                <form className="p-4">
                  <PatientTabUtils tabSelected={tabSelected} />
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
                      variant={"outlined"}
                      color="success"
                      disabled={tabSelected === 6}
                      type={"button"}
                      onClick={() =>
                        tabSelected < 6
                          ? dispatch(setTabSelected(tabSelected + 1))
                          : dispatch(setTabSelected(tabSelected))
                      }
                    >
                      Next
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
              {!historiesLoading &&
                historiesSuccess &&
                histories.results.map((history: any) => (
                  <Card
                    key={history.id}
                    isActive={activeCard === history.id}
                    handleCardClick={() => handleCardClick(history)}
                  />
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const ActionButton = () => {
  const navigate = useNavigate();
  const { patientId } = useParams();
  return (
    <>
      <div className="flex flex-col">
        <Link to={`/patient/${patientId}/add/transaction`}>
          <CustomButton text="Add Transaction" type="button" color="#246068" />
        </Link>
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

const ViewPatient = () => {
  const description =
    "The Patient Information Overview provides a comprehensive snapshot of essential details regarding a patient's medical history, current health status, and pertinent demographic information.";
  return (
    <Layout
      pageTitle={"Administrator"}
      Header={
        <Header
          title="View Patient Information"
          description={description}
          actions={<ActionButton />}
        />
      }
      Content={<Content />}
      activeLink={0}
    />
  );
};

export default ViewPatient;
