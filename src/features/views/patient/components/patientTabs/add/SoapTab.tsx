import TextArea from "../../../../../components/shared/form/TextArea";

const SoapTab = ({ selectedTab } : any) => {
  const data = {
    soapSubjective: "",
    soapObjective: "",
    soapAssessment: "",
    soapPlan: "",
  }
  return (
    <>
      <div className={`${selectedTab === 5 ? "block" : "hidden"}`}>
        <div className="grid grid-cols-12 gap-4 mb-8">
          <div className="col-span-6">
            <TextArea label="Subjective" fieldName="soapSubjective" defaultValue={data.soapSubjective}/>
          </div>

          <div className="col-span-6">
            <TextArea label="Objective" fieldName="soapObjective" defaultValue={data.soapObjective}/>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 mb-8">
          <div className="col-span-6">
            <TextArea label="Assessment" fieldName="soapAssessment" defaultValue={data.soapAssessment}/>
          </div>

          <div className="col-span-6">
            <TextArea label="Plan" fieldName="soapPlan"  defaultValue={data.soapPlan}/>
          </div>
        </div>
      </div>
    </>
  );
};
export default SoapTab;
