import TextArea from "../../../../components/shared/form/Textarea";

const SoapTab = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-4 mb-8">
        <div className="col-span-6">
          <TextArea label="Subjective" fieldName="subjective" />
        </div>

        <div className="col-span-6">
          <TextArea label="Objective" fieldName="objective" />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 mb-8">
        <div className="col-span-6">
          <TextArea label="Assessment" fieldName="assessment" />
        </div>

        <div className="col-span-6">
          <TextArea label="Plan" fieldName="plan" />
        </div>
      </div>
    </>
  );
};
export default SoapTab;
