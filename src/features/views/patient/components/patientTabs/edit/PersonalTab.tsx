import { useSelector } from "react-redux";
import AutoComplete from "../../../../../components/shared/form/AutoComplete";
import DatePicker from "../../../../../components/shared/form/DatePicker";
import Input from "../../../../../components/shared/form/Input";
import dayjs from "dayjs";

const PersonalTab = ({ data, patientDetails }: any) => {
  const gender = useSelector((state: any) => state.enum.gender);
  const civilStatus = useSelector((state: any) => state.enum.status);

  return (
    <>
      {patientDetails && data && (
        <>
          <div className="grid grid-cols-12 gap-4 mb-8">
            <div className="col-span-3">
              <Input label={"Last Name*"} fieldName={"lastName"} defaultValue={patientDetails.lastName.toUpperCase()} />
            </div>
            <div className="col-span-3">
              <Input label="First Name*" fieldName="firstName" defaultValue={patientDetails.firstName.toUpperCase()} />
            </div>
            <div className="col-span-3">
              <Input label="Middle Name" fieldName="middleName" defaultValue={patientDetails.middleName ? patientDetails.middleName.toUpperCase() : ""} />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4 mb-8">
            <div className="col-span-3">
              <DatePicker label="Date of Birth*" fieldName="dateOfBirth" defaultValue={dayjs(patientDetails.dateOfBirth)} />
            </div>
            <div>
              <Input
                label={"Age*"}
                type="number"
                fieldName="age"
                defaultValue={data.age}
              />
            </div>
            <div className="col-span-2">
              <AutoComplete
                label="Gender*"
                fieldName="gender"
                isRequired={false}
                options={gender}
                defaultValue={patientDetails.gender}
              />
            </div>
            <div className="col-span-2">
              <AutoComplete
                label="Civil Status"
                fieldName="civilStatus"
                isRequired={false}
                options={civilStatus}
                defaultValue={patientDetails.civilStatus}
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
                fieldName="birthPlaceProvinceId"
                isRequired={false}
                options={[]}
              />
            </div>
            <div className="col-span-4">
              <AutoComplete
                label="City / Municipality*"
                fieldName="birthPlaceCityId"
                isRequired={false}
                options={[]}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default PersonalTab;
