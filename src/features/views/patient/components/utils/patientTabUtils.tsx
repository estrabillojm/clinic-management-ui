import { useSelector } from "react-redux";
import ContactsTab from "../patientTabs/view/ContactsTab";
import HistoryTab from "../patientTabs/view/HistoryTab";
import PersonToNotifyTab from "../patientTabs/view/PersonToNotifyTab";
import PersonalTab from "../patientTabs/view/PersonalTab";
import PhysicianTab from "../patientTabs/view/PhysicianTab";
import SoapTab from "../patientTabs/view/SoapTab";
import VitalSignTab from "../patientTabs/view/VitalSignTab";
import { useEffect } from "react";


const PatientTabUtils = ({ tabSelected }: { tabSelected: number }) => {

  const patientHistory = useSelector((state : any) => state.patientHistories.patientHistory)
  const patientDetails = useSelector((state : any) => state.patientDetails.patientDetails)

  useEffect(() => {
    console.log(patientHistory)
  }, [patientHistory])
  switch (tabSelected) {
    case 0:
      return <PersonalTab data={patientHistory} patientDetails={patientDetails}/>; 
    case 1:
      return <ContactsTab data={patientHistory} patientDetails={patientDetails}/>;
    case 2:
      return <PersonToNotifyTab data={patientHistory}/>;
    case 3:
      return <VitalSignTab data={patientHistory} />;
    case 4:
      return <HistoryTab data={patientHistory} />;
    case 5:
      return <SoapTab data={patientHistory} />;
    case 6:
      return <PhysicianTab data={patientHistory} />;
  }
};

export default PatientTabUtils;
