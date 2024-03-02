import TextArea from "../../../../components/shared/form/TextArea";

const SoapTab = ({ data } : any) => {
  return (
    <>
      <div className="grid grid-cols-12 gap-4 mb-8">
        <div className="col-span-6">
          <TextArea label="Subjective" fieldName="subjective" defaultValue={data.soapSubjective}/>
        </div>

        <div className="col-span-6">
          <TextArea label="Objective" fieldName="objective" defaultValue={data.soapObjective}/>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 mb-8">
        <div className="col-span-6">
          <TextArea label="Assessment" fieldName="assessment" defaultValue={data.soapAssessment}/>
        </div>

        <div className="col-span-6">
          <TextArea label="Plan" fieldName="plan"  defaultValue={data.soapPlan}/>
        </div>
      </div>
    </>
  );
};
export default SoapTab;
