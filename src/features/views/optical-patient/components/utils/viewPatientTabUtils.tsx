import { useSelector } from "react-redux";
import ContactsTab from "../patientTabs/edit/ContactsTab";
import HistoryTab from "../patientTabs/edit/HistoryTab";
import PersonToNotifyTab from "../patientTabs/edit/PersonToNotifyTab";
import PersonalTab from "../patientTabs/edit/PersonalTab";
import PhysicianTab from "../patientTabs/edit/PhysicianTab";
import SoapTab from "../patientTabs/edit/SoapTab";
import VitalSignTab from "../patientTabs/edit/VitalSignTab";
import { useEffect, useState } from "react";

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
          <PhysicianTab data={patientHistory} selectedTab={tabSelected}/>
        </>
      }
    </>
  )

  
};

export default ViewPatientTabUtils;
