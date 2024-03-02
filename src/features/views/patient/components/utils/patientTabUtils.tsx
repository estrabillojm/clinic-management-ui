import { useSelector } from "react-redux";
import ContactsTab from "../patientTabs/ContactsTab";
import HistoryTab from "../patientTabs/HistoryTab";
import PersonToNotifyTab from "../patientTabs/PersonToNotifyTab";
import PersonalTab from "../patientTabs/PersonalTab";
import PhysicianTab from "../patientTabs/PhysicianTab";
import SoapTab from "../patientTabs/SoapTab";
import VitalSignTab from "../patientTabs/VitalSignTab";

const PatientTabUtils = ({ tabSelected }: { tabSelected: number }) => {

  const patientHistory = useSelector((state : any) => state.patientHistories.patientHistory)
  


  switch (tabSelected) {
    case 0:
      return <PersonalTab />;
    case 1:
      return <ContactsTab />;
    case 2:
      return <PersonToNotifyTab data={patientHistory}/>;
    case 3:
      return <VitalSignTab data={patientHistory} />;
    case 4:
      return <HistoryTab data={patientHistory} />;
    case 5:
      return <SoapTab data={patientHistory} />;
    case 6:
      return <PhysicianTab />;
  }
};

export default PatientTabUtils;
