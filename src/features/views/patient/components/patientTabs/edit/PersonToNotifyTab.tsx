import { useEffect } from "react";
import AutoComplete from "../../../../../components/shared/form/AutoComplete";
import Input from "../../../../../components/shared/form/Input";

const PersonToNotifyTab = ({ data } : any) => {
  useEffect(() => {
    console.log(data);
  }, [])
  return (
    <>
      <div className="grid grid-cols-12 gap-4 mb-8">
        <div className="col-span-3">
          <Input type="text" label="Last Name" fieldName="notifyLastName" defaultValue={data.notifyPhone}/>
        </div>

        <div className="col-span-3">
          <Input type="text" label="First Name" fieldName="notifyFirstName" defaultValue={data.notifyPhone}/>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4 mb-8">
        <div className="col-span-3">
          <Input type="text" label="Emergency Contact Number" fieldName="notifyPhone" defaultValue={data.notifyPhone}/>
        </div>
        <div className="col-span-3">
          <AutoComplete
            label="Relation to Patient"
            fieldName="notifyRelation"
            isRequired={false}
            options={[]}
            defaultValue={data.notifyRelation}
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
            fieldName="notifyProvinceId"
            isRequired={false}
            options={[]}
          />
        </div>
        <div className="col-span-4">
          <AutoComplete
            label="City / Municipality*"
            fieldName="notifyCityId"
            isRequired={false}
            options={[]}
          />
        </div>
        <div className="col-span-4">
          <Input label="Barangay" fieldName="notifyBarangay" />
        </div>
      </div>


      <div className="grid grid-cols-12 gap-4 mb-8">
        <div className="col-span-8">
          <Input label="Street" fieldName="notifyStreet" />
        </div>
      </div>
    </>
  );
};
export default PersonToNotifyTab;
