import { useSelector } from "react-redux";
import ContactsTab from "../patientTabs/add/ContactsTab";
import HistoryTab from "../patientTabs/add/HistoryTab";
import PersonToNotifyTab from "../patientTabs/add/PersonToNotifyTab";
import PersonalTab from "../patientTabs/add/PersonalTab";
import PhysicianTab from "../patientTabs/add/PhysicianTab";
import SoapTab from "../patientTabs/add/SoapTab";
import VitalSignTab from "../patientTabs/add/VitalSignTab";
import { useEffect, useState } from "react";

const AddPatientTabUtils = ({ tabSelected }: { tabSelected: number }) => {

  const formValidator = useSelector(
    (state: any) => state.patientValidator.invalidFields
  );
  const [requiredFields, setRequiredFields] = useState<String[]>([]);
  useEffect(() => {
    setRequiredFields(formValidator.map((field: any) => field.column));
  }, [formValidator]);

  return (
    <>
        <PersonalTab selectedTab={tabSelected} requiredFields={requiredFields}/>
        <ContactsTab selectedTab={tabSelected}/>
        <PersonToNotifyTab selectedTab={tabSelected}/>
        <VitalSignTab selectedTab={tabSelected}/>
        <HistoryTab selectedTab={tabSelected}/>
        <SoapTab selectedTab={tabSelected}/>
        <PhysicianTab selectedTab={tabSelected}/>
    </>
  )

  
};

export default AddPatientTabUtils;
