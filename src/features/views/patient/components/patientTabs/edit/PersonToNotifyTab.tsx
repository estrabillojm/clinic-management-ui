import { useEffect, useState } from "react";
import AutoComplete from "../../../../../components/shared/form/AutoComplete";
import Input from "../../../../../components/shared/form/Input";
import { useDispatch, useSelector } from "react-redux";
import { setPersonToNotifyProvinceId } from "../../../../../../redux/features/addressSlice";
import { useLazyGetCitiesByProvinceQuery } from "../../../../../../redux/api/addressApi";
import { City, Province } from "../../../../../../types/address";

const PersonToNotifyTab = ({ data, selectedTab } : any) => {
  const provinces = useSelector((state: any) => state.address.provinces);
  const dispatch = useDispatch();
  const selectedProvince = useSelector((state: any) => state.address.personToNotifyProvinceId);

  const handleProvinceChange = (province: Province) => {
    dispatch(setPersonToNotifyProvinceId({provinceId: province?.value}));  
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
      <div className={`${selectedTab === 2 ? "block" : "hidden"}`}>
        <div className="grid grid-cols-12 gap-4 mb-8">
          <div className="col-span-3">
            <Input type="text" label="Last Name" fieldName="notifyLastName"/>
          </div>

          <div className="col-span-3">
            <Input type="text" label="First Name" fieldName="notifyFirstName"/>
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
              fieldName="notifyCityId"
              isRequired={false}
              options={transformedCities.length && isCitiesSuccess && !isCitiesLoading && selectedProvince ? transformedCities : []}
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
      </div>
    </>
  );
};
export default PersonToNotifyTab;
