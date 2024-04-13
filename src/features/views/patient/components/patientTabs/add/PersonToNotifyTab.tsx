import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import AutoComplete from "../../../../../components/shared/form/AutoComplete";
import Input from "../../../../../components/shared/form/Input";
import { City, Province } from "../../../../../../types/address";
import { setPersonToNotifyProvinceId } from "../../../../../../redux/features/addressSlice";
import { useLazyGetCitiesByProvinceQuery } from "../../../../../../redux/api/addressApi";

const PersonToNotifyTab = () => {
  const provinces = useSelector((state: any) => state.address.provinces);
  const selectedProvince = useSelector(
    (state: any) => state.address.personToNotifyProvinceId
  )

  const dispatch = useDispatch();

  const handleProvinceChange = (province: Province) => {
    dispatch(setPersonToNotifyProvinceId({ provinceId: province?.value }));
  }

  const [
    getCitiesByProvince,
    { data: cities, isSuccess: isCitiesSuccess, isLoading: isCitiesLoading}
  ] = useLazyGetCitiesByProvinceQuery();
  useEffect(() => {
    if(selectedProvince) {
      getCitiesByProvince(selectedProvince);
    }
  }, [selectedProvince]);

  const [transformedCities, setTransformedCities] = useState([]);
  useEffect(() => {
    if (cities && isCitiesSuccess && !isCitiesLoading) {
      setTransformedCities(() =>
        cities.results.map((city: City) => {})
      )
    }
  })

  return (
    <>
      <div className="grid grid-cols-12 gap-4 mb-8">
        <div className="col-span-3">
          <Input type="text" label="Emergency Contact Number" fieldName="contact"/>
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
            options={provinces}
            onAutoCompleteChange={(province: Province) => {
              handleProvinceChange(province)
            }}
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
