import AutoComplete from "../../../../components/shared/form/AutoComplete";
import Input from "../../../../components/shared/form/Input";

const PersonToNotifyTab = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-4 mb-8">
        <div className="col-span-3">
          <Input type="text" label="Emergency Contact Number" fieldName="contact" />
        </div>
        <div className="col-span-3">
          <AutoComplete
            label="Relation to Patient"
            fieldName="relationship"
            isRequired={false}
            options={[]}
          />
        </div>
        
      </div>
      <div className="grid grid-cols-12 gap-4 pb-2">
        <h3 className="text-primary font-semibold">Address</h3>
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
        <div className="col-span-8">
          <Input label="House/Bldg floor/Street" fieldName="street" />
        </div>
      </div>
    </>
  );
};
export default PersonToNotifyTab;
