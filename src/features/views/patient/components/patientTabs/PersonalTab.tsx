import { useSelector } from "react-redux";
import AutoComplete from "../../../../components/shared/form/AutoComplete";
import DatePicker from "../../../../components/shared/form/DatePicker";
import Input from "../../../../components/shared/form/Input";

const PersonalTab = () => {
  const gender = useSelector((state: any) => state.enum.gender);
  const civilStatus = useSelector((state: any) => state.enum.status);

  return (
    <>
      <div className="grid grid-cols-12 gap-4 mb-8">
        <div className="col-span-3">
          <Input label="Last Name*" fieldName="lastName" />
        </div>
        <div className="col-span-3">
          <Input label="First Name*" fieldName="firstName" />
        </div>
        <div className="col-span-3">
          <Input label="Middle Name" fieldName="middleName" />
        </div>
        
      </div>

      <div className="grid grid-cols-12 gap-4 mb-8">
        <div className="col-span-3">
          <DatePicker
            label="Date of Birth*"
            fieldName="dateOfBirth"
          />
        </div>
        <div>
          <Input
            label={"Age*"}
            type="number"
            fieldName="age"
          />
        </div>
        <div className="col-span-2">
          <AutoComplete
            label="Gender*"
            fieldName="gender"
            isRequired={false}
            options={gender}
          />
        </div>
        <div className="col-span-2">
          <AutoComplete
            label="Civil Status"
            fieldName="status"
            isRequired={false}
            options={civilStatus}
          />
        </div>

        <div></div>
      </div>

      <div className="grid grid-cols-1 gap-4 pb-2">
        <h3 className="text-primary font-semibold">Place of Birth</h3>
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
      </div>
    </>
  );
};
export default PersonalTab;
