import { useEffect, useState } from "react";
import AutoComplete from "../../../../../components/shared/form/AutoComplete";
import Input from "../../../../../components/shared/form/Input";
import { useDispatch, useSelector } from "react-redux";
import { setPersonToNotifyProvinceId } from "../../../../../../redux/features/addressSlice";
import { useLazyGetCitiesByProvinceQuery } from "../../../../../../redux/api/addressApi";
import { City, Province } from "../../../../../../types/address";
import { RELATION_ENUM } from "../../../../../../enums/relation";

const OpticalTab = ({ selectedTab }: any) => {
  const provinces = useSelector((state: any) => state.address.provinces);
  const dispatch = useDispatch();
  const selectedProvince = useSelector(
    (state: any) => state.address.personToNotifyProvinceId
  );

  const handleProvinceChange = (province: Province) => {
    dispatch(setPersonToNotifyProvinceId({ provinceId: province?.value }));
  };

  const [
    getCitiesByProvince,
    { data: cities, isSuccess: isCitiesSuccess, isLoading: isCitiesLoading },
  ] = useLazyGetCitiesByProvinceQuery();

  useEffect(() => {
    if (selectedProvince) {
      getCitiesByProvince(selectedProvince);
    }
  }, [selectedProvince]);

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

  const data = {
    notifyLastName: "",
    notifyFirstName: "",
    notifyPhone: "",
    notifyRelation: "",
    notifyProvinceId: "",
    notifyCityId: "",
    notifyBarangay: "",
  };

  return (
    <>
      <div className={`${selectedTab === 2 ? "block" : "hidden"}`}>
        <div className="grid-span-12 gap-4 pb-2">
          <h3 className="text-primary font-semibold">Oculus Dexter (Right)</h3>
        </div>
        <div className="grid grid-cols-12 gap-4 mb-8">
          <div className="col-span-3">
            <Input
              type="text"
              label="OD Sphere"
              fieldName="opticOdSphere"
              defaultValue={data.notifyLastName}
            />
          </div>
          <div className="col-span-3">
            <Input
              type="text"
              label="OD Cyclinder"
              fieldName="opticOdCyclinder"
              defaultValue={data.notifyFirstName}
            />
          </div>
          <div className="col-span-3">
            <Input
              type="text"
              label="OD Axis"
              fieldName="opticOdAxis"
              defaultValue={data.notifyLastName}
            />
          </div>
          <div className="col-span-3">
            <Input
              type="text"
              label="OD Add"
              fieldName="opticOdAdd"
              defaultValue={data.notifyFirstName}
            />
          </div>
        </div>

        <div className="grid-span-12 gap-4 pb-2">
          <h3 className="text-primary font-semibold">Oculus Sinister (Left)</h3>
        </div>
        <div className="grid grid-cols-12 gap-4 mb-8">
          <div className="col-span-3">
            <Input
              type="text"
              label="OS Sphere"
              fieldName="opticOdSphere"
              defaultValue={data.notifyLastName}
            />
          </div>
          <div className="col-span-3">
            <Input
              type="text"
              label="OS Cyclinder"
              fieldName="opticOdCyclinder"
              defaultValue={data.notifyFirstName}
            />
          </div>
          <div className="col-span-3">
            <Input
              type="text"
              label="OS Axis"
              fieldName="opticOdAxis"
              defaultValue={data.notifyLastName}
            />
          </div>
          <div className="col-span-3">
            <Input
              type="text"
              label="OS Add"
              fieldName="opticOdAdd"
              defaultValue={data.notifyFirstName}
            />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 mb-8 pt-8 border-t">
          <div className="col-span-3">
            <AutoComplete
              label="Type"
              fieldName="opticType"
              isRequired={false}
              options={[]}
              // defaultValue={data.notifyCityId}
            />
          </div>
          <div className="col-span-3">
            <AutoComplete
              label="Coating Instrument"
              fieldName="opticCoatingInstrument"
              isRequired={false}
              options={[]}
              // defaultValue={data.opticCoatingInstrument}
            />
          </div>

          <div className="col-span-6">
            <Input
              type="string"
              label="Remarks"
              fieldName="opticRemark"
              // defaultValue={data.historiesSocialRemarks}
              isMultiline={true}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default OpticalTab;
