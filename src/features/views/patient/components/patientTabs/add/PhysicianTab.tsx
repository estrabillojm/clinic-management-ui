import { useEffect, useState } from "react";
import { useGetPhysicianListQuery } from "../../../../../../redux/api/physicianApi";
import AutoComplete from "../../../../../components/shared/form/AutoComplete";
import Input from "../../../../../components/shared/form/Input";

type Physician = {
  id: string;
  firstName: string;
  lastName: string;
  middleName: string;
};

type PhysicianList = {
  label: string;
  value: string;
};

const PhysicianTab = ({ selectedTab, clinicId }: any) => {
  const { data: physicians, isLoading } = useGetPhysicianListQuery(clinicId);
  const [physicianList, setPhysicianList] = useState<PhysicianList[]>([]);

  const data = {
    physicianId: "",
    remarks: "",
    recommendation: ""
  };

  useEffect(() => {
    if (physicians) {
      setPhysicianList(
        physicians.result.users.map((physician: Physician) => ({
          label: `${physician.lastName.toUpperCase()}, ${physician.firstName.toUpperCase()}`,
          value: physician.id,
        }))
      );
    }
  }, [physicians]);

  return (
    <>
      {isLoading ? (
        <h3>Loading Data</h3> // Create a loader for the content
      ) : (
        <>
          <div
            className={`grid grid-cols-12 gap-4 mb-8 ${selectedTab === 6 ? "block" : "hidden"}`}
          >
            <div className="col-span-6">
              <AutoComplete
                label="Physician"
                fieldName="physicianId"
                isRequired={false}
                options={physicianList}
                defaultValue={data.physicianId}
              />
            </div>
          </div>

          <div
            className={`grid grid-cols-12 gap-4 mb-8 ${selectedTab === 6 ? "block" : "hidden"}`}
          >

            <div className="col-span-6">
              <Input
                type="string"
                label="Remarks"
                fieldName="remarks"
                defaultValue={data.remarks}
                isMultiline={true}
              />
            </div>
            <div className="col-span-6">
              <Input
                type="string"
                label="Recommendation"
                fieldName="recommendation"
                defaultValue={data.recommendation}
                isMultiline={true}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default PhysicianTab;
