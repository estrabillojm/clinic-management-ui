import { FormGroup } from "@mui/material";
import CheckBox from "../../../../components/shared/form/CheckBox";
import TextArea from "../../../../components/shared/form/TextArea";

const VitalSignTab = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-8 mb-8">
        <div className="col-span-4 border-r border-gray-300 px-5">
          <FormGroup>
            <CheckBox label="Unremarkable" fieldName="pastHistory" />
            <CheckBox label="HCVD" fieldName="pastHistory" />
            <CheckBox label="CHD" fieldName="pastHistory" />
            <CheckBox label="CVA" fieldName="pastHistory" />
            <CheckBox label="Gut Disease" fieldName="pastHistory" />
            <CheckBox label="Blood Disease" fieldName="pastHistory" />
            <CheckBox label="Allergy" fieldName="pastHistory" />
            <CheckBox label="Git Disease" fieldName="pastHistory" />
            <CheckBox label="Pulmo Disease" fieldName="pastHistory" />
            <CheckBox label="CA" fieldName="pastHistory" />
          </FormGroup>
          <TextArea label="Other (Remarks)" fieldName="pastHistoryRemarks" />
        </div>

        <div className="col-span-4 border-r border-gray-300 px-5">
          <FormGroup>
            <CheckBox label="Unremarkable" fieldName="pastHistory" />
            <CheckBox label="HCVD" fieldName="pastHistory" />
            <CheckBox label="CHD" fieldName="pastHistory" />
            <CheckBox label="CVA" fieldName="pastHistory" />
            <CheckBox label="Gut Disease" fieldName="pastHistory" />
            <CheckBox label="Blood Disease" fieldName="pastHistory" />
            <CheckBox label="Allergy" fieldName="pastHistory" />
            <CheckBox label="Git Disease" fieldName="pastHistory" />
            <CheckBox label="Pulmo Disease" fieldName="pastHistory" />
            <CheckBox label="CA" fieldName="pastHistory" />
          </FormGroup>
          <TextArea label="Other (Remarks)" fieldName="pastHistoryRemarks" />
        </div>

        <div className="col-span-4">
          <FormGroup>
            <CheckBox label="Smoking" fieldName="pastHistory" />
            <CheckBox label="Alcohol Intake" fieldName="pastHistory" />
            <CheckBox label="Betel Nut Chewing" fieldName="pastHistory" />
            <CheckBox label="Drug or Food Allergy" fieldName="pastHistory" />
          </FormGroup>
          <TextArea label="Other (Remarks)" fieldName="pastHistoryRemarks" />
        </div>
        
      </div>
    </>
  );
};
export default VitalSignTab;
