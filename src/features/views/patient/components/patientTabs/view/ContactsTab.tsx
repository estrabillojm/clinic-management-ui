import AutoComplete from "../../../../../components/shared/form/AutoComplete";
import Input from "../../../../../components/shared/form/Input";

const ContactsTab = ({ patientDetails }: any) => {
  return (
    <>
      <div className="grid grid-cols-12 gap-4 mb-8">
        <div className="col-span-5">
          <Input type="email" label="Email" fieldName="email" defaultValue={patientDetails.email} />
        </div>
        <div className="col-span-4">
          <Input type="text" label="Contact" fieldName="contact"  defaultValue={patientDetails.contact}/>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4 pb-2">
        <h3 className="text-primary font-semibold">Address</h3>
        <h4></h4>
      </div>

      <div className="grid grid-cols-12 gap-4 mb-8">
        <div className="col-span-4">
          <AutoComplete
            label="Province*"
            fieldName="province"
            isRequired={false}
            options={[]}
          />
        </div>
        <div className="col-span-4">
          <AutoComplete
            label="City / Municipality*"
            fieldName="city"
            isRequired={false}
            options={[]}
          />
        </div>
        <div className="col-span-4">
          <AutoComplete
            label="Barangay"
            fieldName="city"
            isRequired={false}
            options={[]}
          />
        </div>
      </div>


      <div className="grid grid-cols-12 gap-4 mb-8">
        <div className="col-span-9">
          <Input label="House/Bldg floor/Street" fieldName="street" />
        </div>
      </div>
    </>
  );
};
export default ContactsTab;
