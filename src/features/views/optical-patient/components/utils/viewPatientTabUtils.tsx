import { useSelector } from "react-redux";
import ContactsTab from "../patientTabs/view/ContactsTab";
import PersonalTab from "../patientTabs/view/PersonalTab";
import PhysicianTab from "../patientTabs/view/PhysicianTab";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OpticalTab from "../patientTabs/view/OpticalTab";

const ViewPatientTabUtils = ({ tabSelected }: { tabSelected: number }) => {

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
          <OpticalTab selectedTab={tabSelected} data={patientHistory}/>
          <PhysicianTab data={patientHistory} selectedTab={tabSelected} clinicId={clinicId}/>
        </>
      }
    </>
  )

  
};

export default ViewPatientTabUtils;
