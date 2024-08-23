import { useSelector } from "react-redux";
import ContactsTab from "../patientTabs/add/ContactsTab";
import OpticalTab from "../patientTabs/add/OpticalTab";
import PersonalTab from "../patientTabs/add/PersonalTab";
import PhysicianTab from "../patientTabs/add/PhysicianTab";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AddPatientTabUtils = ({ tabSelected }: { tabSelected: number }) => {

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
        <PersonalTab selectedTab={tabSelected} requiredFields={requiredFields}/>
        <ContactsTab selectedTab={tabSelected}/>
        <OpticalTab selectedTab={tabSelected}/>
        <PhysicianTab selectedTab={tabSelected} clinicId={clinicId}/>
    </>
  )

  
};

export default AddPatientTabUtils;
