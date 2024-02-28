import AutoComplete from "../../../../components/shared/form/AutoComplete";
const AccessTab = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-4 mb-8">
        <div className="col-span-4">
          <AutoComplete
            label="Role*"
            fieldName="province"
            isRequired={false}
            options={[]}
          />
        </div>
        <div className="col-span-4">
          <AutoComplete
            label="JobTitle*"
            fieldName="city"
            isRequired={false}
            options={[]}
          />
        </div>
      </div>
    </>
  );
};
export default AccessTab;
