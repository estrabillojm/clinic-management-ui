import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import TextArea from "../../../../../components/shared/form/TextArea";
import { useEffect, useState } from "react";

const HistoryTab = ({ data }: any) => {
  const [socialHistories, setSocialHistories] = useState<string[]>([]);
  const [pastHistories, setPastHistories] = useState<string[]>([]);
  const [familyHistories, setFamilyHistories] = useState<string[]>([]);

  useEffect(() => {
    if (data.historiesSocial) {
      setSocialHistories(data.historiesSocial.split(","));
    }
    if (data.historiesPast) {
      setPastHistories(data.historiesPast.split(","));
    }
    if (data.historiesFamily) {
      setFamilyHistories(data.historiesFamily.split(","));
    }
  }, [data, data.historiesFamily]);

  return (
    <>
      <div className="grid grid-cols-12 gap-8 mb-8">
        <div className="col-span-4 border-r border-gray-300 px-5">
        <FormGroup>
          {["Unremarkable", "HCVD", "CHD", "CVA", "Gut Disease", "Blood Disease", "Allergy", "Git Disease", "Pulmo Disease", "CA"].map(label => (
            <FormControlLabel
              key={label}
              control={
                <Checkbox
                  checked={familyHistories.includes(label)}
                  readOnly
                />
              }
              label={label}
            />
          ))}
        </FormGroup>
          <TextArea label="Other (Remarks)" fieldName="pastHistoryRemarks" />
        </div>

        <div className="col-span-4 border-r border-gray-300 px-5">
        <FormGroup>
          {["Unremarkable", "HCVD", "CHD", "CVA", "Gut Disease", "Blood Disease", "Allergy", "Git Disease", "Pulmo Disease", "CA"].map(label => (
            <FormControlLabel
              key={label}
              control={
                <Checkbox
                  checked={pastHistories.includes(label)}
                  readOnly
                />
              }
              label={label}
            />
          ))}
        </FormGroup>
          <TextArea label="Other (Remarks)" fieldName="pastHistoryRemarks" />
        </div>

        <div className="col-span-4">
        <FormGroup>
          {["Smoking", "Alcohol Intake", "Betel Nut Chewing", "Drug or Food Allergy"].map(label => (
            <FormControlLabel
              key={label}
              control={
                <Checkbox
                  checked={socialHistories.includes(label)}
                  readOnly
                />
              }
              label={label}
            />
          ))}
        </FormGroup>
          <TextArea label="Other (Remarks)" fieldName="pastHistoryRemarks" />
        </div>
      </div>
    </>
  );
};
export default HistoryTab;
