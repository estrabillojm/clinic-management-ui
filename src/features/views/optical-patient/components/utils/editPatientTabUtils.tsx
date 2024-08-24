import { useSelector } from "react-redux";
import ContactsTab from "../patientTabs/edit/ContactsTab";
import PersonalTab from "../patientTabs/edit/PersonalTab";
import PhysicianTab from "../patientTabs/edit/PhysicianTab";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OpticalTab from "../patientTabs/edit/OpticalTab";

const EditPatientTabUtils = ({ tabSelected }: { tabSelected: number }) => {

  const patientHistory = useSelector((state : any) => state.patientHistories.patientHistory)
  const patientDetails = useSelector((state : any) => state.patientDetails.patientDetails)

  const formValidator = useSelector(
    (state: any) => state.patientValidator.invalidFields
  );
  const [requiredFields, setRequiredFields] = useState<String[]>([]);
  useEffect(() => {
    setRequiredFields(formValidator.map((field: any) => field.column));
  }, [formValidator]);

  const { clinicId } = useParams();

  return (
    <>
      {
        patientHistory && patientDetails && <>
          <PersonalTab data={patientHistory} patientDetails={patientDetails} selectedTab={tabSelected} requiredFields={requiredFields}/>
          <ContactsTab data={patientHistory} patientDetails={patientDetails} selectedTab={tabSelected}/>
          <OpticalTab data={patientHistory} selectedTab={tabSelected}/>
          <PhysicianTab data={patientHistory} selectedTab={tabSelected} clinicId={clinicId}/>
        </>
      }
    </>
  )

  
};

export default EditPatientTabUtils;
