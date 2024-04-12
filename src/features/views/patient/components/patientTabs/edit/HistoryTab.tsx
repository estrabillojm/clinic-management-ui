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
          <div className="grid grid-cols-1 gap-4 pb-2">
            <h3 className="text-primary font-semibold">Past History</h3>
          </div>
          <FormGroup>
            <CheckBox
              label="Unremarkable"
              fieldName="historiesPast"
              isChecked={familyHistories.includes("Unremarkable")}
              onChange={handleFamilyHistoryCheck}
            />
            <CheckBox
              label="HCVD"
              fieldName="historiesPast"
              isChecked={familyHistories.includes("HCVD")}
              onChange={handleFamilyHistoryCheck}
            />
            <CheckBox
              label="CHD"
              fieldName="historiesPast"
              isChecked={familyHistories.includes("CHD")}
              onChange={handleFamilyHistoryCheck}
            />
            <CheckBox
              label="CVA"
              fieldName="historiesPast"
              isChecked={familyHistories.includes("CVA")}
              onChange={handleFamilyHistoryCheck}
            />
            <CheckBox
              label="Gut Disease"
              fieldName="historiesPast"
              isChecked={familyHistories.includes("Gut Disease")}
              onChange={handleFamilyHistoryCheck}
            />
            <CheckBox
              label="Blood Disease"
              fieldName="historiesPast"
              isChecked={familyHistories.includes("Blood Disease")}
              onChange={handleFamilyHistoryCheck}
            />
            <CheckBox
              label="Allergy"
              fieldName="historiesPast"
              isChecked={familyHistories.includes("Allergy")}
              onChange={handleFamilyHistoryCheck}
            />
            <CheckBox
              label="Git Disease"
              fieldName="historiesPast"
              isChecked={familyHistories.includes("Git Disease")}
              onChange={handleFamilyHistoryCheck}
            />
            <CheckBox
              label="Pulmo Disease"
              fieldName="historiesPast"
              isChecked={familyHistories.includes("Pulmo Disease")}
              onChange={handleFamilyHistoryCheck}
            />
            <CheckBox
              label="CA"
              fieldName="historiesPast"
              isChecked={familyHistories.includes("CA")}
              onChange={handleFamilyHistoryCheck}
            />
          </FormGroup>
          <TextArea label="Other (Remarks)" fieldName="pastHistoryRemarks" defaultValue={data.historiesPastRemarks}/>
        </div>

        <div className="col-span-4 border-r border-gray-300 px-5">
          <div className="grid grid-cols-1 gap-4 pb-2">
            <h3 className="text-primary font-semibold">Family History</h3>
          </div>
          <FormGroup>
            <CheckBox
              label="Unremarkable"
              fieldName="historiesFamily"
              isChecked={pastHistories.includes("Unremarkable")}
              onChange={handlePastHistoryCheck}
            />
            <CheckBox
              label="HCVD"
              fieldName="historiesFamily"
              isChecked={pastHistories.includes("HCVD")}
              onChange={handlePastHistoryCheck}
            />
            <CheckBox
              label="CHD"
              fieldName="historiesFamily"
              isChecked={pastHistories.includes("CHD")}
              onChange={handlePastHistoryCheck}
            />
            <CheckBox
              label="CVA"
              fieldName="historiesFamily"
              isChecked={pastHistories.includes("CVA")}
              onChange={handlePastHistoryCheck}
            />
            <CheckBox
              label="Gut Disease"
              fieldName="historiesFamily"
              isChecked={pastHistories.includes("Gut Disease")}
              onChange={handlePastHistoryCheck}
            />
            <CheckBox
              label="Blood Disease"
              fieldName="historiesFamily"
              isChecked={pastHistories.includes("Blood Disease")}
              onChange={handlePastHistoryCheck}
            />
            <CheckBox
              label="Allergy"
              fieldName="historiesFamily"
              isChecked={pastHistories.includes("Allergy")}
              onChange={handlePastHistoryCheck}
            />
            <CheckBox
              label="Git Disease"
              fieldName="historiesFamily"
              isChecked={pastHistories.includes("Git Disease")}
              onChange={handlePastHistoryCheck}
            />
            <CheckBox
              label="Pulmo Disease"
              fieldName="historiesFamily"
              isChecked={pastHistories.includes("Pulmo Disease")}
              onChange={handlePastHistoryCheck}
            />
            <CheckBox
              label="CA"
              fieldName="historiesFamily"
              isChecked={pastHistories.includes("CA")}
              onChange={handlePastHistoryCheck}
            />
          </FormGroup>
          <TextArea label="Other (Remarks)" fieldName="pastHistoryRemarks" defaultValue={data.historiesFamilyRemarks}/>
        </div>

        <div className="col-span-4">
          <div className="grid grid-cols-1 gap-4 pb-2">
            <h3 className="text-primary font-semibold">Social History</h3>
          </div>
          <FormGroup>
            <CheckBox
              label="Smoking"
              fieldName="historiesSocial"
              isChecked={socialHistories.includes("Smoking")}
              onChange={handleSocialHistoryCheck}
            />
            <CheckBox
              label="Alcohol Intake"
              fieldName="historiesSocial"
              isChecked={socialHistories.includes("Alcohol Intake")}
              onChange={handleSocialHistoryCheck}
            />
            <CheckBox
              label="Betel Nut Chewing"
              fieldName="historiesSocial"
              isChecked={socialHistories.includes("Betel Nut Chewing")}
              onChange={handleSocialHistoryCheck}
            />
            <CheckBox
              label="Drug or Food Allergy"
              fieldName="historiesSocial"
              isChecked={socialHistories.includes("Drug or Food Allergy")}
              onChange={handleSocialHistoryCheck}
            />
          </FormGroup>
          <TextArea label="Other (Remarks)" fieldName="pastHistoryRemarks" defaultValue={data.historiesSocialRemarks}/>
        </div>
      </div>
    </>
  );
};
export default HistoryTab;
