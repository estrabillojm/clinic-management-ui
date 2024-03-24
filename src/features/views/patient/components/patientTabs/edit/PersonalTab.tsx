import { useDispatch, useSelector } from "react-redux";
import AutoComplete from "../../../../../components/shared/form/AutoComplete";
import DatePicker from "../../../../../components/shared/form/DatePicker";
import Input from "../../../../../components/shared/form/Input";
import dayjs from "dayjs";
import { setPersonalProvinceId } from "../../../../../../redux/features/addressSlice";
import { useEffect, useState } from "react";
import { useLazyGetCitiesByProvinceQuery } from "../../../../../../redux/api/addressApi";
import { City, Province } from "../../../../../../types/address";

const PersonalTab = ({ data, patientDetails, selectedTab }: any) => {
  const gender = useSelector((state: any) => state.enum.gender);
  const civilStatus = useSelector((state: any) => state.enum.status);
  const provinces = useSelector((state: any) => state.address.provinces);
  const selectedProvince = useSelector((state: any) => state.address.personalProvinceId);

  const dispatch = useDispatch();

  const handleProvinceChange = (province: Province) => {
    dispatch(setPersonalProvinceId({provinceId: province?.value}));
  };

  const [getCitiesByProvince, { data: cities, isSuccess: isCitiesSuccess, isLoading: isCitiesLoading}] = useLazyGetCitiesByProvinceQuery();
  useEffect(() => {
    if(selectedProvince){
      getCitiesByProvince(selectedProvince);
    }
  }, [selectedProvince]);

  const [transformedCities, setTransformedCities] = useState([]);
  useEffect(() => {
    if(cities && isCitiesSuccess && !isCitiesLoading){
      setTransformedCities(() => cities.results.map((city : City) => {
        return {
          label: city.name,
          value: city.code
        }
      }))
    }
  }, [cities, isCitiesSuccess, isCitiesLoading])

  return (
    <>
      {patientDetails && data && (
        <div className={`${selectedTab === 0 ? "block" : "hidden"}`}>
          <div className="grid grid-cols-12 gap-4 mb-8" >
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
                options={provinces}
                onAutoCompleteChange={(province: Province) =>
                  handleProvinceChange(province)
                }
              />
            </div>
            <div className="col-span-4">
              <AutoComplete
                label="City / Municipality*"
                fieldName="birthPlaceCityId"
                isRequired={false}
                options={transformedCities.length && isCitiesSuccess && !isCitiesLoading && selectedProvince ? transformedCities : []}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default PersonalTab;
