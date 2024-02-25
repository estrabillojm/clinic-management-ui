import ContactsTab from "../patientTabs/ContactsTab";
import HistoryTab from "../patientTabs/HistoryTab";
import PersonToNotifyTab from "../patientTabs/PersonToNotifyTab";
import PersonalTab from "../patientTabs/PersonalTab";
import PhysicianTab from "../patientTabs/PhysicianTab";
import SoapTab from "../patientTabs/SoapTab";
import VitalSignTab from "../patientTabs/VitalSignTab";

const PatientTabUtils = ({ tabSelected }: { tabSelected: number }) => {
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

export default PatientTabUtils;
