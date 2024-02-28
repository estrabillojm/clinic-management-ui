import AccessTab from "../user/AccessTab";
import ContactsTab from "../user/ContactsTab";
import PersonalTab from "../user/PersonalTab";

const AdminTabUtils = ({ tabSelected }: { tabSelected: number }) => {
  switch (tabSelected) {
    case 0:
      return <PersonalTab />;
    case 1:
      return <ContactsTab />;
    case 2:
      return <AccessTab />;
  }
};

export default AdminTabUtils;
