import { useDispatch, useSelector } from "react-redux";
import AutoComplete from "../../../../../components/shared/form/AutoComplete";
import DatePicker from "../../../../../components/shared/form/DatePicker";
import Input from "../../../../../components/shared/form/Input";
import dayjs, { Dayjs } from "dayjs";
import { setBirthPlaceProvinceId } from "../../../../../../redux/features/addressSlice";
import { useEffect, useState } from "react";
import { useLazyGetCitiesByProvinceQuery } from "../../../../../../redux/api/addressApi";
import { City } from "../../../../../../types/address";

const PersonalTab = ({ data, patientDetails, selectedTab, requiredFields }: any) => {
  const gender = useSelector((state: any) => state.enum.gender);
  const civilStatus = useSelector((state: any) => state.enum.status);
  const provinces = useSelector((state: any) => state.address.provinces);
  const selectedProvince = useSelector(
    (state: any) => state.address.birthPlaceProvinceId
  );

  const dispatch = useDispatch();
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
    if (patientDetails.birthPlaceProvinceId) {
      dispatch(setBirthPlaceProvinceId({ provinceId: patientDetails.birthPlaceProvinceId }));
      getCitiesByProvince(patientDetails.birthPlaceProvinceId);
    }
  }, [patientDetails.birthPlaceProvinceId]);

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

  const calculateAge = (dob: Dayjs | null) => {
    if (!dob) return "";
    return dayjs().diff(dob, 'year');
  };

  const [age, setAge] = useState<string | number>("");

  const handleDateOfBirthChange = (date: Dayjs | null) => {
    setAge(calculateAge(date));
  };

  useEffect(() => {
    if (patientDetails.dateOfBirth) {
      const initialDate = dayjs(patientDetails.dateOfBirth);
      setAge(calculateAge(initialDate));
    }
  }, [patientDetails.dateOfBirth]);

  return (
    <>
      {patientDetails && data && (
        <div className={`${selectedTab === 0 ? "block" : "hidden"}`}>
          <div className="grid grid-cols-12 gap-4 mb-8">
            <div className="col-span-3">
              {requiredFields.includes("lastName") ? true : false}
              <Input
                label={"Last Name*"}
                fieldName={"lastName"}
                defaultValue={patientDetails.lastName.toUpperCase()}
              />

            </div>
            <div className="col-span-3">
              <Input
                label="First Name*"
                fieldName="firstName"
                defaultValue={patientDetails.firstName.toUpperCase()}
              />
            </div>
            <div className="col-span-3">
              <Input
                label="Middle Name"
                fieldName="middleName"
                defaultValue={
                  patientDetails.middleName
                    ? patientDetails.middleName.toUpperCase()
                    : ""
                }
              />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4 mb-8">
            <div className="col-span-3">
              <DatePicker
                label="Date of Birth*"
                fieldName="dateOfBirth"
                defaultValue={patientDetails.dateOfBirth ? dayjs(patientDetails.dateOfBirth) : null}
                onHandleChange={handleDateOfBirthChange}
              />
            </div>
            <div className="col-span-2">
              <Input
                label={"Age*"}
                type="number"
                fieldName="age"
                defaultValue={age}
                readonly={true}
              />
            </div>
            <div className="col-span-2">
              <AutoComplete
                label="Gender*"
                fieldName="gender"
                options={gender}
                defaultValue={patientDetails.gender}
              />
            </div>
            <div className="col-span-2">
              <AutoComplete
                label="Civil Status"
                fieldName="civilStatus"
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
                defaultValue={patientDetails.birthPlaceProvinceId}
              />
            </div>
            <div className="col-span-4">
              <AutoComplete
                label="City / Municipality*"
                fieldName="birthPlaceCityId"
                isRequired={false}
                options={
                  transformedCities.length &&
                  isCitiesSuccess &&
                  !isCitiesLoading &&
                  selectedProvince
                    ? transformedCities
                    : []
                }
                defaultValue={patientDetails.birthPlaceCityId}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PersonalTab;
