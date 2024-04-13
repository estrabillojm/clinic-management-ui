import { useDispatch, useSelector } from "react-redux";
import AutoComplete from "../../../../../components/shared/form/AutoComplete";
import DatePicker from "../../../../../components/shared/form/DatePicker";
import Input from "../../../../../components/shared/form/Input";
import { setBirthPlaceProvinceId } from "../../../../../../redux/features/addressSlice";
import { useEffect, useState } from "react";
import { City, Province } from "../../../../../../types/address";
import { useLazyGetCitiesByProvinceQuery } from "../../../../../../redux/api/addressApi";

const PersonalTab = () => {
  const gender = useSelector((state: any) => state.enum.gender);
  const civilStatus = useSelector((state: any) => state.enum.status);
  const provinces = useSelector((state: any) => state.address.provinces);
  const selectedProvince = useSelector(
    (state: any) => state.address.birthPlaceProvinceId
  )

  const dispatch = useDispatch();

  const handleProvinceChange = (province: Province) => {
    dispatch(setBirthPlaceProvinceId({ provinceId: province?.value }));
  };

  const [
    getCitiesByProvince,
    { data: cities, isSuccess: isCitiesSuccess, isLoading: isCitiesLoading },
  ] = useLazyGetCitiesByProvinceQuery();
  useEffect(() => {
    if(selectedProvince) {
      getCitiesByProvince(selectedProvince);
    }
  },[selectedProvince])

  const [transformedCities, setTransformedCities] = useState([]);
  useEffect(() => {
    if(cities && !isCitiesLoading && isCitiesSuccess){
      setTransformedCities(()=>
        cities.results.map((city: City) => {
          return {
            label: city.name,
            value: city.code,
          };
        })
      );
    }
  }, [cities, isCitiesSuccess, isCitiesLoading]);

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
          <DatePicker label="Date of Birth*" fieldName="dateOfBirth" />
        </div>
        <div>
          <Input label={"Age*"} type="number" fieldName="age" />
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
            options={provinces}
            onAutoCompleteChange={(province: Province) =>
              handleProvinceChange(province)
            }
          />
        </div>
        <div className="col-span-4">
          <AutoComplete
            label="City / Municipality*"
            fieldName="city"
            isRequired={false}
            options={
              transformedCities.length &&
              isCitiesSuccess &&
              !isCitiesLoading &&
              selectedProvince
                ? transformedCities
                : []
            }
          />
        </div>
      </div>
    </>
  );
};
export default PersonalTab;
