import { useDispatch, useSelector } from "react-redux";
import AutoComplete from "../../../../../components/shared/form/AutoComplete";
import Input from "../../../../../components/shared/form/Input";
import { setContactProvinceId } from "../../../../../../redux/features/addressSlice";
import { City, Province } from "../../../../../../types/address";
import { useEffect, useState } from "react";
import { useLazyGetCitiesByProvinceQuery } from "../../../../../../redux/api/addressApi";

const ContactsTab = ({ patientDetails, selectedTab }: any) => {
  const provinces = useSelector((state: any) => state.address.provinces);
  const dispatch = useDispatch();
  const handleProvinceChange = (province: Province) => {
    dispatch(setContactProvinceId({provinceId: province?.value}));  
  };
  const selectedProvince = useSelector(
    (state: any) => state.address.contactProvinceId
  );

  const [
    getCitiesByProvince,
    { data: cities, isSuccess: isCitiesSuccess, isLoading: isCitiesLoading },
  ] = useLazyGetCitiesByProvinceQuery();

  useEffect(() => {
    if (selectedProvince) {
      getCitiesByProvince(selectedProvince);
    }
  }, [selectedProvince]);

  useEffect(() => {
    console.log("awiiiiiiiitttt", patientDetails.provinceId)
    if (patientDetails.provinceId) {
      dispatch(setContactProvinceId({provinceId: patientDetails.provinceId}));  
      getCitiesByProvince(patientDetails.provinceId);
    }
  }, [patientDetails.provinceId]);

  const [transformedCities, setTransformedCities] = useState([]);
  useEffect(() => {
    if (cities && isCitiesSuccess && !isCitiesLoading) {
      setTransformedCities(() =>
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
    <div className={`${selectedTab === 1 ? "" : "hidden"}`}>
      <div className={`grid grid-cols-12 gap-4 mb-8`}>
        <div className="col-span-5">
          <Input type="email" label="Email" fieldName="email" defaultValue={patientDetails.email} />
        </div>
        <div className="col-span-4">
          <Input type="text" label="Contact" fieldName="contact" defaultValue={patientDetails.contact}/>
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
            options={provinces}
            onAutoCompleteChange={(province: Province) =>
              handleProvinceChange(province)
            }
            defaultValue={patientDetails.provinceId} 
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
            defaultValue={patientDetails.cityId} 
          />
        </div>
        <div className="col-span-4">
          <Input type="text" label="Barangay" fieldName="barangay" defaultValue={patientDetails.barangay} />
        </div>
      </div>


      <div className="grid grid-cols-12 gap-4 mb-8">
        <div className="col-span-9">
          <Input label="House/Bldg floor/Street" fieldName="street" defaultValue={patientDetails.street}/>
        </div>
      </div>
      </div>
    </>
  );
};
export default ContactsTab;
