import { FormGroup } from "@mui/material";
import CheckBox from "../../../../../components/shared/form/CheckBox";
import TextArea from "../../../../../components/shared/form/TextArea";
import { useEffect, useState } from "react";

const HistoryTab = ({ data, selectedTab }: any) => {
  const [socialHistories, setSocialHistories] = useState<string[]>([]);
  const [pastHistories, setPastHistories] = useState<string[]>([]);
  const [familyHistories, setFamilyHistories] = useState<string[]>([]);

  useEffect(() => {
    if (data.historiesSocial) {
      setSocialHistories(data.historiesSocial.split(", "));
    }
    if (data.historiesPast) {
      setPastHistories(data.historiesPast.split(", "));
    }
    if (data.historiesFamily) {
      setFamilyHistories(data.historiesFamily.split(", "));
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

  const handleFamilyHistoryCheck = (e: any) => {
    const { value } = e.target;
    const index = familyHistories.indexOf(value);
    if (index === -1) {
      setFamilyHistories([...familyHistories, value]);
    } else {
      setFamilyHistories(familyHistories.filter((item) => item !== value));
    }
  };

  useEffect(() => {
    console.log(socialHistories);
  }, [socialHistories]);

  return (
    <>
      <div className={`grid grid-cols-12 gap-8 mb-8 ${selectedTab === 4 ? "block" : "hidden"}`}>
        <div className="col-span-4 border-r border-gray-300 px-5">
          <FormGroup>
            <CheckBox
              label="Unremarkable"
              fieldName="familyHistory"
              isChecked={familyHistories.includes("Unremarkable")}
              onChange={handleFamilyHistoryCheck}
            />
            <CheckBox
              label="HCVD"
              fieldName="familyHistory"
              isChecked={familyHistories.includes("HCVD")}
              onChange={handleFamilyHistoryCheck}
            />
            <CheckBox
              label="CHD"
              fieldName="familyHistory"
              isChecked={familyHistories.includes("CHD")}
              onChange={handleFamilyHistoryCheck}
            />
            <CheckBox
              label="CVA"
              fieldName="familyHistory"
              isChecked={familyHistories.includes("CVA")}
              onChange={handleFamilyHistoryCheck}
            />
            <CheckBox
              label="Gut Disease"
              fieldName="familyHistory"
              isChecked={familyHistories.includes("Gut Disease")}
              onChange={handleFamilyHistoryCheck}
            />
            <CheckBox
              label="Blood Disease"
              fieldName="familyHistory"
              isChecked={familyHistories.includes("Blood Disease")}
              onChange={handleFamilyHistoryCheck}
            />
            <CheckBox
              label="Allergy"
              fieldName="familyHistory"
              isChecked={familyHistories.includes("Allergy")}
              onChange={handleFamilyHistoryCheck}
            />
            <CheckBox
              label="Git Disease"
              fieldName="familyHistory"
              isChecked={familyHistories.includes("Git Disease")}
              onChange={handleFamilyHistoryCheck}
            />
            <CheckBox
              label="Pulmo Disease"
              fieldName="familyHistory"
              isChecked={familyHistories.includes("Pulmo Disease")}
              onChange={handleFamilyHistoryCheck}
            />
            <CheckBox
              label="CA"
              fieldName="familyHistory"
              isChecked={familyHistories.includes("CA")}
              onChange={handleFamilyHistoryCheck}
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
            <CheckBox
              label="Smoking"
              fieldName="pastHistory"
              isChecked={socialHistories.includes("Smoking")}
              onChange={handleSocialHistoryCheck}
            />
            <CheckBox
              label="Alcohol Intake"
              fieldName="pastHistory"
              isChecked={socialHistories.includes("Alcohol Intake")}
              onChange={handleSocialHistoryCheck}
            />
            <CheckBox
              label="Betel Nut Chewing"
              fieldName="pastHistory"
              isChecked={socialHistories.includes("Betel Nut Chewing")}
              onChange={handleSocialHistoryCheck}
            />
            <CheckBox
              label="Drug or Food Allergy"
              fieldName="pastHistory"
              isChecked={socialHistories.includes("Drug or Food Allergy")}
              onChange={handleSocialHistoryCheck}
            />
          </FormGroup>
          <TextArea label="Other (Remarks)" fieldName="pastHistoryRemarks" />
        </div>
      </div>
    </>
  );
};
export default HistoryTab;
