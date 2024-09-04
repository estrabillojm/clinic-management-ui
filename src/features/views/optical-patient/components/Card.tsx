import dayjs from "dayjs";
import { pdf } from "@react-pdf/renderer";
import { saveAs } from "file-saver";
import { useLazyGetPatientHistoryQuery } from "../../../../redux/api/patientHistory";
import {
  useGetAllProvincesQuery,
  useLazyGetCitiesByProvinceQuery,
} from "../../../../redux/api/addressApi";
import { useEffect, useState } from "react";
import { DOCUMENT } from "../../../../enums/documentType";
import Prescription from "./Prescription";

type Props = {
  isActive: boolean;
  handleCardClick: () => void;
  data: any;
  patient: any;
};

const Card = ({ isActive, handleCardClick, data, patient }: Props) => {
  const [
    getPatientHistory,
    {
      data: patientHistory,
      isLoading: patientHistoryLoading,
      isSuccess: patientHistorySuccess,
    },
  ] = useLazyGetPatientHistoryQuery();

  const {
    data: provinces,
  } = useGetAllProvincesQuery(null);

  const [
    getCitiesByProvince,
    { data: cities },
  ] = useLazyGetCitiesByProvinceQuery();

  useEffect(() => {
    if (patient?.result?.provinceId) {
      getCitiesByProvince(patient?.result?.provinceId);
    }
  }, [patient?.result?.provinceId]);


  const [documentType, setDocumentType] = useState("");
  const handleDocumentDownload = async (document: string) => {
    await getPatientHistory(data.id);
    setDocumentType(document);
  };

  useEffect(() => {
    (async () => {
      if (!patientHistoryLoading && patientHistorySuccess) {
        try {
          const { firstName, lastName, id } = patient.result;
          // if (documentType === DOCUMENT.medicalCertificate) {
          //   const blob = await pdf(
          //     <MedicalCertificate
          //       history={patientHistory}
          //       patientDetails={patient}
          //       address={provinces}
          //       cities={cities}
          //     />
          //   ).toBlob();
          //   saveAs(
          //     blob,
          //     `MC-OPTICAL-${data.branchName.toUpperCase()}-${lastName.toUpperCase()}_${firstName.toUpperCase()}-${id.split("-")[0]}`
          //   );
          // }

          if (documentType === DOCUMENT.prescription) {
            const blob = await pdf(
              <Prescription
                history={patientHistory}
                patientDetails={patient}
                address={provinces}
                cities={cities}
              />
            ).toBlob();
            saveAs(
              blob,
              `RX-OPTICAL-${data.branchName.toUpperCase()}-${lastName.toUpperCase()}_${firstName.toUpperCase()}-${id.split("-")[0]}`
            );
          }

          setDocumentType("");
        } catch (error) {
          console.error("Error generating PDF:", error);
        }
      }
    })();
  }, [patientHistoryLoading, patientHistorySuccess, documentType]);

  return (
    <>
      <div
        onClick={handleCardClick}
        className={`border rounded-md p-4 mt-4  ${isActive ? "bg-green-200 cursor-default" : "bg-yellow-100 cursor-pointer hover:bg-yellow-50 transition-all"}`}
      >
        <section className="border-b border-green-400">
          <h2 className="font-bold text-green-600">
            TR-{data.id.split("-")[0]}
          </h2>
        </section>
        <section>
          <p className="text-gray-500 pt-2 text-sm">
            <span className="font-bold text-yellow-800">
              Physician: {data.physicianDetails.lastName},{" "}
              {data.physicianDetails.firstName}
            </span>
            <br />
            <span className="text-green-700 pb-2 text-[12px] font-bold">
              Clinic: {data.branchName}
            </span>
          </p>
          <p className="text-gray-500 pb-2 text-[12px]">
            Date: {dayjs(data.created_at).format("LLL")}
          </p>
        </section>
        <section>
          {/* <button
            className="text-blue-800 underline pb-2 text-[12px] hover:text-blue-400"
            onClick={() => handleDocumentDownload(DOCUMENT.medicalCertificate)}
          >
            Medical Certificate
          </button>
          <span className="mx-2">|</span> */}
          <button
            className="text-blue-800 underline pb-2 text-[12px] hover:text-blue-400"
            onClick={() => handleDocumentDownload(DOCUMENT.prescription)}
          >
            Prescription Pad
          </button>
        </section>
      </div>
    </>
  );
};

export default Card;
