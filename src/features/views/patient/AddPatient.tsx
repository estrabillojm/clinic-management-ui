import { Header } from "../../components/shared/global/Header";
import { Layout } from "../../components/shared/global/Layout";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import MenuWithHeader from "../../components/shared/menuWithHeader/MenuWithHeader";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import CustomButton from "../../components/shared/global/Button";
import { useNavigate, useParams } from "react-router-dom";
import { headerProps, tabSelectedProps } from "../../../types/patientInfoTypes";
import AddPatientTabUtils from "./components/utils/addPatientTabUtils";
import { useEffect, useState } from "react";
import { setEdit } from "../../../redux/features/actionTypeSlice";
import { Button } from "@mui/material";
import { setTabSelected } from "../../../redux/features/patientInfoTabSlice";
import { useCreatePatientHistoryMutation } from "../../../redux/api/patientHistory";
import { clearPatientHistory } from "../../../redux/features/patientHistorySlice";
import { useGetAllProvincesQuery } from "../../../redux/api/addressApi";
import { mapProvinces } from "../../../redux/features/addressSlice";
import { validatePatientForm } from "../../../redux/features/patientValidatorSlice";
import EditPatientValidator from "./components/validator/EditPatientValidator";
import { ternaryChecker } from "../../../utils/ternaryChecker";
import { useCreatePatientMutation } from "../../../redux/api/patients";
import { PATIENT_TYPE } from "../../../enums/patientType";
import { useGetBranchByIdQuery } from "../../../redux/api/branchApi";

interface PatientFormData {
  dateOfBirth: Date | dayjs.Dayjs;
  physicianId: string;
}

const Content = () => {
  const dispatch = useDispatch();
  // const { patientId } = useParams<{ patientId: string }>();

  useEffect(() => {
    dispatch(setEdit());
  }, [dispatch]);

  const headers = useSelector(
    (state: { patients: { tabs: headerProps["patients"]["tabs"] } }) =>
      state.patients.tabs
  );
  const tabSelected = useSelector(
    (state: {
      patients: { tabSelected: tabSelectedProps["patients"]["tabSelected"] };
    }) => state.patients.tabSelected
  );
  const formValidator = useSelector(
    (state: { patientValidator: { invalidFields: any[] } }) =>
      state.patientValidator.invalidFields
  );
  const formData = useSelector(
    (state: { patientValidator: { patientDetails: any } }) =>
      state.patientValidator.patientDetails
  );
  const patientHistory = useSelector(
    (state: { patientHistories: { patientHistory: any } }) =>
      state.patientHistories.patientHistory
  );

  const methods = useForm<PatientFormData>();
  const [
    createPatientHistory,
    { isSuccess: patientHistorySuccess, isLoading: patientHistoryLoading },
  ] = useCreatePatientHistoryMutation();
  const historiesPast = useSelector(
    (state: { historyTab: { pastHistory: string } }) =>
      state.historyTab.pastHistory
  );
  const historiesFamily = useSelector(
    (state: { historyTab: { familyHistory: string } }) =>
      state.historyTab.familyHistory
  );
  const historiesSocial = useSelector(
    (state: { historyTab: { socialHistory: string } }) =>
      state.historyTab.socialHistory
  );

  const [isSubmitReady, setIsSubmitReady] = useState(false);
  const { clinicId, branchId } = useParams();
  const { data: branchDetails } = useGetBranchByIdQuery(branchId)
  const onSubmit: SubmitHandler<PatientFormData> = async (data) => {
    if (patientHistoryLoading) return;

    const formattedDate = data.dateOfBirth ? dayjs(data.dateOfBirth).format("L") : null;
    const formattedData = {
      ...data,
      physicianRemarksHeightUnit: "cm",
      physicianRemarksWeightUnit: "kg",
      dateOfBirth: formattedDate,
      historiesPast,
      historiesFamily,
      historiesSocial,
      physicianId: ternaryChecker(data.physicianId, patientHistory.physicianId),
    };

    dispatch(validatePatientForm({ patient: formattedData }));
    setIsSubmitReady(true);
  };

  const [createPatient, { data: patient, isSuccess: isPatientSuccess }] =
    useCreatePatientMutation();

  useEffect(() => {
    if (isSubmitReady) {
      const {
        lastName,
        firstName,
        middleName,
        dateOfBirth,
        gender,
        civilStatus,
        religion,
        nationality,
        birthPlaceProvinceId,
        birthPlaceCityId,
        province,
        city,
        barangay,
        street,
        email,
        contact,
      } = formData;

      (async () => {
        await createPatient({
          lastName,
          firstName,
          middleName,
          dateOfBirth,
          gender,
          civilStatus,
          religion,
          nationality,
          birthPlaceProvinceId,
          birthPlaceCityId,
          provinceId: province,
          cityId: city,
          barangay,
          street,
          email,
          contact,
          recentBranchName: branchDetails.result.name,
          clinicId,
          branchId,
          patientType: PATIENT_TYPE.general,
        });
      })();
      setIsSubmitReady(false);
    }
  }, [isSubmitReady, createPatientHistory, formData]);

  useEffect(() => {
    if (patient && isPatientSuccess) {
      (async () => {
        await createPatientHistory({
          patientId: patient.result.patientId,
          ...formData,
          branchId,
        });
      })();
    }
  }, [patient, isPatientSuccess]);

  const navigate = useNavigate();
  useEffect(() => {
    if (patientHistorySuccess && !patientHistoryLoading) {
      dispatch(clearPatientHistory());
      navigate(`/clinic/${clinicId}/branch/${branchId}/patient/${patient.result.patientId}/info`);
    }
  }, [patientHistorySuccess, patientHistoryLoading, dispatch, navigate]);

  return (
    <div className="flex gap-8">
      <div className="flex-1 flex-col gap-2">
        <div className="min-w-[10em] min-h-[20em] bg-gray-100 border border-gray-200 shadow">
          <MenuWithHeader headers={headers} />
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} className="p-4">
              {formValidator.length > 0 && (
                <EditPatientValidator formValidator={formValidator} />
              )}
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
                  {tabSelected === 6 ? "Save Transaction" : "Next"}
                </Button>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

const ActionButton = () => {
  const navigate = useNavigate();
  // const { patientId } = useParams<{ patientId: string }>();
  const dispatch = useDispatch();

  const {
    data: provinces,
    isLoading: isProvincesLoading,
    isSuccess: isProvincesSuccess,
  } = useGetAllProvincesQuery(null);

  useEffect(() => {
    if (provinces && !isProvincesLoading && isProvincesSuccess) {
      dispatch(mapProvinces(provinces));
    }
  }, [provinces, isProvincesLoading, isProvincesSuccess, dispatch]);

  return (
    <div className="flex flex-col">
      <CustomButton
        text="Back"
        type="button"
        color="#383d39"
        onClick={() => navigate(-1)}
      />
    </div>
  );
};

const AddPatient = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setEdit());
  }, [dispatch]);

  const headerDescription =
    "Welcome to the medical history addition form. This form allows you to provide detailed information about the patient's medical history, which is essential for effective healthcare management.";

  return (
    <Layout
      pageTitle="Administrator"
      Header={
        <Header
          title="Add Transaction - New Patient"
          description={headerDescription}
          actions={<ActionButton />}
        />
      }
      Content={<Content />}
      activeLink={1}
    />
  );
};

export default AddPatient;
