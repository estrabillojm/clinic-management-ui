import { FormGroup, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { useEffect, useState, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { setFamilyHistory, setPastHistory, setSocialHistory } from "../../../../../../redux/features/historyTabSlice";

// Define the type for props
interface HistoryTabProps {
  data: {
    historiesSocial: string;
    historiesPast: string;
    historiesFamily: string;
    historiesSocialRemarks: string;
    historiesPastRemarks: string;
    historiesFamilyRemarks: string;
  };
  selectedTab: number;
}

const HistoryTab: React.FC<HistoryTabProps> = ({ data, selectedTab }) => {
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

  // Generic function to handle checkbox changes
  const handleCheckChange = (type: 'social' | 'past' | 'family', value: string) => (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    const setHistories = {
      social: setSocialHistories,
      past: setPastHistories,
      family: setFamilyHistories
    }[type];

    if (checked) {
      setHistories(prev => [...prev, value]);
    } else {
      setHistories(prev => prev.filter(item => item !== value));
    }
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFamilyHistory(familyHistories));
  }, [familyHistories, dispatch]);

  useEffect(() => {
    dispatch(setPastHistory(pastHistories));
  }, [pastHistories, dispatch]);

  useEffect(() => {
    dispatch(setSocialHistory(socialHistories));
  }, [socialHistories, dispatch]);

  return (
    <div className={`grid grid-cols-12 gap-8 mb-8 ${selectedTab === 4 ? "block" : "hidden"}`}>
      <div className="col-span-4 border-r border-gray-300 px-5">
        <div className="grid grid-cols-1 gap-4 pb-2">
          <h3 className="text-primary font-semibold">Family History</h3>
        </div>
        <FormGroup>
          {["Unremarkable", "HCVD", "CHD", "CVA", "Gut Disease", "Blood Disease", "Allergy", "Git Disease", "Pulmo Disease", "CA"].map(label => (
            <FormControlLabel
              key={label}
              control={
                <Checkbox
                  checked={familyHistories.includes(label)}
                  onChange={handleCheckChange('family', label)}
                />
              }
              label={label}
            />
          ))}
        </FormGroup>
        <TextField
          label="Other (Remarks)"
          multiline
          rows={4}
          defaultValue={data.historiesFamilyRemarks}
          fullWidth
          margin="normal"
        />
      </div>

      <div className="col-span-4 border-r border-gray-300 px-5">
        <div className="grid grid-cols-1 gap-4 pb-2">
          <h3 className="text-primary font-semibold">Past History</h3>
        </div>
        <FormGroup>
          {["Unremarkable", "HCVD", "CHD", "CVA", "Gut Disease", "Blood Disease", "Allergy", "Git Disease", "Pulmo Disease", "CA"].map(label => (
            <FormControlLabel
              key={label}
              control={
                <Checkbox
                  checked={pastHistories.includes(label)}
                  onChange={handleCheckChange('past', label)}
                />
              }
              label={label}
            />
          ))}
        </FormGroup>
        <TextField
          label="Other (Remarks)"
          multiline
          rows={4}
          defaultValue={data.historiesPastRemarks}
          fullWidth
          margin="normal"
        />
      </div>

      <div className="col-span-4">
        <div className="grid grid-cols-1 gap-4 pb-2">
          <h3 className="text-primary font-semibold">Social History</h3>
        </div>
        <FormGroup>
          {["Smoking", "Alcohol Intake", "Betel Nut Chewing", "Drug or Food Allergy"].map(label => (
            <FormControlLabel
              key={label}
              control={
                <Checkbox
                  checked={socialHistories.includes(label)}
                  onChange={handleCheckChange('social', label)}
                />
              }
              label={label}
            />
          ))}
        </FormGroup>
        <TextField
          label="Other (Remarks)"
          multiline
          rows={4}
          defaultValue={data.historiesSocialRemarks}
          fullWidth
          margin="normal"
        />
      </div>
    </div>
  );
};

export default HistoryTab;
