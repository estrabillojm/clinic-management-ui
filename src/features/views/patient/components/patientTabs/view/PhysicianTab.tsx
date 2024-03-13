import { useEffect, useState } from "react";
import { useGetPhysicianListQuery } from "../../../../../../redux/api/physicianApi";
import AutoComplete from "../../../../../components/shared/form/AutoComplete";
import TextArea from "../../../../../components/shared/form/TextArea";

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

const PhysicianTab = ({ data }: any) => {
  const {
    data: physicians,
    isLoading,
  } = useGetPhysicianListQuery(null);
  const [physicianList, setPhysicianList] = useState<PhysicianList[]>([]);

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

  useEffect(() => {
    if(data){
      console.log(data);
    }
  }, [data])

  return (
    <>
      {isLoading ? (
        <h3>Loading Data</h3> // Create a loader for the content
      ) : (
        <div className="grid grid-cols-12 gap-4 mb-8">
          <div className="col-span-4">
            <AutoComplete
              label="Physician 1"
              fieldName="physician"
              isRequired={false}
              options={physicianList}
              defaultValue={data.physicianId}
            />
          </div>
          <div className="col-span-6">
            <TextArea label="Remarks" fieldName="remarks" 
            defaultValue={data.physicianRemarks}
            />
          </div>
        </div>
      )}
    </>
  );
};
export default PhysicianTab;
