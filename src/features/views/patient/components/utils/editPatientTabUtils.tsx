import { useSelector } from "react-redux";
import ContactsTab from "../patientTabs/edit/ContactsTab";
import HistoryTab from "../patientTabs/edit/HistoryTab";
import PersonToNotifyTab from "../patientTabs/edit/PersonToNotifyTab";
import PersonalTab from "../patientTabs/edit/PersonalTab";
import PhysicianTab from "../patientTabs/edit/PhysicianTab";
import SoapTab from "../patientTabs/edit/SoapTab";
import VitalSignTab from "../patientTabs/edit/VitalSignTab";


const EditPatientTabUtils = ({ tabSelected }: { tabSelected: number }) => {

  const patientHistory = useSelector((state : any) => state.patientHistories.patientHistory)
  const patientDetails = useSelector((state : any) => state.patientDetails.patientDetails)

  return (
    <>
      {
        patientHistory && patientDetails && <>
          <PersonalTab data={patientHistory} patientDetails={patientDetails} selectedTab={tabSelected}/>
          <ContactsTab data={patientHistory} patientDetails={patientDetails} selectedTab={tabSelected}/>
          <PersonToNotifyTab data={patientHistory} selectedTab={tabSelected}/>
          <VitalSignTab data={patientHistory} selectedTab={tabSelected}/>
          <HistoryTab data={patientHistory} selectedTab={tabSelected}/>
          <SoapTab data={patientHistory} selectedTab={tabSelected}/>
          <PhysicianTab data={patientHistory} selectedTab={tabSelected}/>
        </>
      }

      {/* 
      
      
      
       */}
    </>
  )

  
};

export default EditPatientTabUtils;
