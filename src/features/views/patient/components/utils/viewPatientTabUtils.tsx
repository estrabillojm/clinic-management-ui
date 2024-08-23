import { useSelector } from "react-redux";
import ContactsTab from "../patientTabs/view/ContactsTab";
import HistoryTab from "../patientTabs/view/HistoryTab";
import PersonToNotifyTab from "../patientTabs/view/PersonToNotifyTab";
import PersonalTab from "../patientTabs/view/PersonalTab";
import PhysicianTab from "../patientTabs/view/PhysicianTab";
import SoapTab from "../patientTabs/view/SoapTab";
import VitalSignTab from "../patientTabs/view/VitalSignTab";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

  const { clinicId, branchId } = useParams();
  return (
    <>
      {
        patientHistory && patientDetails && <>
          <PersonalTab data={patientHistory} patientDetails={patientDetails} selectedTab={tabSelected} requiredFields={requiredFields}/>
          <ContactsTab data={patientHistory} patientDetails={patientDetails} selectedTab={tabSelected}/>
          <PersonToNotifyTab data={patientHistory} selectedTab={tabSelected}/>
          <VitalSignTab data={patientHistory} selectedTab={tabSelected}/>
          <HistoryTab data={patientHistory} selectedTab={tabSelected}/>
          <SoapTab data={patientHistory} selectedTab={tabSelected}/>
          <PhysicianTab data={patientHistory} selectedTab={tabSelected} clinicId={clinicId}/>
        </>
      }
    </>
  )

  
};

export default ViewPatientTabUtils;
