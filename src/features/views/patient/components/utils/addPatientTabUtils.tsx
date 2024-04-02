import ContactsTab from "../patientTabs/add/ContactsTab";
import HistoryTab from "../patientTabs/add/HistoryTab"
import PersonToNotifyTab from "../patientTabs/add/PersonToNotifyTab";
import PersonalTab from "../patientTabs/add/PersonalTab";
import PhysicianTab from "../patientTabs/add/PhysicianTab";
import SoapTab from "../patientTabs/add/SoapTab";
import VitalSignTab from "../patientTabs/add/VitalSignTab";

const AddPatientTabUtils = ({ tabSelected }: { tabSelected: number }) => {

  switch (tabSelected) {
    case 0:
      return <PersonalTab />; 
    case 1:
      return <ContactsTab />;
    case 2:
      return <PersonToNotifyTab />;
    case 3:
      return <VitalSignTab />;
    case 4:
      return <HistoryTab />;
    case 5:
      return <SoapTab />;
    case 6:
      return <PhysicianTab />;
  }
};

export default AddPatientTabUtils;
