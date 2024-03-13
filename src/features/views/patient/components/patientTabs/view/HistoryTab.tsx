import { FormGroup } from "@mui/material";
import CheckBox from "../../../../../components/shared/form/CheckBox";
import TextArea from "../../../../../components/shared/form/TextArea";
import { useEffect, useState } from "react";

const HistoryTab = ({ data }: any) => {
  const [socialHistories, setSocialHistories] = useState<string[]>([]);
  const [pastHistories, setPastHistories] = useState<string[]>([]);
  useEffect(() => {
    if (data.historiesSocial && data.historiesPast) {
      setSocialHistories(data.historiesSocial.split(", "));
      setPastHistories(data.historiesPast.split(", "));
    }
  }, [data.historiesSocial, data.historiesPast]);

  const handleSocialHistoryCheck = (e: any) => {
    const { value } = e.target;
    const index = socialHistories.indexOf(value);
    if (index === -1) {
      setSocialHistories([...socialHistories, value]);
    } else {
      setSocialHistories(socialHistories.filter((item) => item !== value));
    }
  };

  const handlePastHistoryCheck = (e: any) => {
    const { value } = e.target;
    const index = pastHistories.indexOf(value);
    if (index === -1) {
      setPastHistories([...pastHistories, value]);
    } else {
      setPastHistories(pastHistories.filter((item) => item !== value));
    }
  };

  useEffect(() => {
    console.log(socialHistories);
  }, [socialHistories]);

  return (
    <>
      <div className="grid grid-cols-12 gap-8 mb-8">
        <div className="col-span-4 border-r border-gray-300 px-5">
          <FormGroup>
            <CheckBox
              label="Unremarkable"
              fieldName="socialHistory"
              isChecked={socialHistories.includes("Unremarkable")}
              onChange={handleSocialHistoryCheck}
            />
            <CheckBox
              label="HCVD"
              fieldName="socialHistory"
              isChecked={socialHistories.includes("HCVD")}
              onChange={handleSocialHistoryCheck}
            />
            <CheckBox
              label="CHD"
              fieldName="socialHistory"
              isChecked={socialHistories.includes("CHD")}
              onChange={handleSocialHistoryCheck}
            />
            <CheckBox
              label="CVA"
              fieldName="socialHistory"
              isChecked={socialHistories.includes("CVA")}
              onChange={handleSocialHistoryCheck}
            />
            <CheckBox
              label="Gut Disease"
              fieldName="socialHistory"
              isChecked={socialHistories.includes("Gut Disease")}
              onChange={handleSocialHistoryCheck}
            />
            <CheckBox
              label="Blood Disease"
              fieldName="socialHistory"
              isChecked={socialHistories.includes("Blood Disease")}
              onChange={handleSocialHistoryCheck}
            />
            <CheckBox
              label="Allergy"
              fieldName="socialHistory"
              isChecked={socialHistories.includes("Allergy")}
              onChange={handleSocialHistoryCheck}
            />
            <CheckBox
              label="Git Disease"
              fieldName="socialHistory"
              isChecked={socialHistories.includes("Git Disease")}
              onChange={handleSocialHistoryCheck}
            />
            <CheckBox
              label="Pulmo Disease"
              fieldName="socialHistory"
              isChecked={socialHistories.includes("Pulmo Disease")}
              onChange={handleSocialHistoryCheck}
            />
            <CheckBox
              label="CA"
              fieldName="socialHistory"
              isChecked={socialHistories.includes("CA")}
              onChange={handleSocialHistoryCheck}
            />
          </FormGroup>
          <TextArea label="Other (Remarks)" fieldName="pastHistoryRemarks" />
        </div>

        <div className="col-span-4 border-r border-gray-300 px-5">
          <FormGroup>
            <CheckBox
              label="Unremarkable"
              fieldName="pastHistory"
              isChecked={pastHistories.includes("Unremarkable")}
              onChange={handlePastHistoryCheck}
            />
            <CheckBox
              label="HCVD"
              fieldName="pastHistory"
              isChecked={pastHistories.includes("HCVD")}
              onChange={handlePastHistoryCheck}
            />
            <CheckBox
              label="CHD"
              fieldName="pastHistory"
              isChecked={pastHistories.includes("CHD")}
              onChange={handlePastHistoryCheck}
            />
            <CheckBox
              label="CVA"
              fieldName="pastHistory"
              isChecked={pastHistories.includes("CVA")}
              onChange={handlePastHistoryCheck}
            />
            <CheckBox
              label="Gut Disease"
              fieldName="pastHistory"
              isChecked={pastHistories.includes("Gut Disease")}
              onChange={handlePastHistoryCheck}
            />
            <CheckBox
              label="Blood Disease"
              fieldName="pastHistory"
              isChecked={pastHistories.includes("Blood Disease")}
              onChange={handlePastHistoryCheck}
            />
            <CheckBox
              label="Allergy"
              fieldName="pastHistory"
              isChecked={pastHistories.includes("Allergy")}
              onChange={handlePastHistoryCheck}
            />
            <CheckBox
              label="Git Disease"
              fieldName="pastHistory"
              isChecked={pastHistories.includes("Git Disease")}
              onChange={handlePastHistoryCheck}
            />
            <CheckBox
              label="Pulmo Disease"
              fieldName="pastHistory"
              isChecked={pastHistories.includes("Pulmo Disease")}
              onChange={handlePastHistoryCheck}
            />
            <CheckBox
              label="CA"
              fieldName="pastHistory"
              isChecked={pastHistories.includes("CA")}
              onChange={handlePastHistoryCheck}
            />
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
export default HistoryTab;
