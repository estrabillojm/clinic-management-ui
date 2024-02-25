import AutoComplete from "../../../../components/shared/form/AutoComplete";
import TextArea from "../../../../components/shared/form/Textarea";

const PhysicianTab = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-4 mb-8">
        <div className="col-span-4">
          <AutoComplete
            label="Physician"
            fieldName="physician"
            isRequired={false}
            options={[]}
          />
        </div>
        <div className="col-span-6">
          <TextArea label="Remarks" fieldName="remarks" />
        </div>
      </div>
    </>
  );
};
export default PhysicianTab;
