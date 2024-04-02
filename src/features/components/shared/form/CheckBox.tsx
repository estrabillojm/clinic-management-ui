import { Checkbox, FormControlLabel } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { useSelector } from "react-redux";

type Props = {
  label: string;
  type?: string;
  fieldName: string;
  isChecked?: any;
  onChange?: any;
};

const CheckBox = ({ label, fieldName, isChecked, onChange }: Props) => {
  const { control } = useFormContext();
  const actionType = useSelector((state: any) => state.actionType.actionType)
  return (
    <>
      <Controller
        name={fieldName}
        control={control}
        disabled={actionType === "View"}
            // rules={{ required: 'This field is required' }}
        render={({ field }) => (
          <FormControlLabel
            {...field}
            control={<Checkbox value={label}/>}
            label={label}
            checked={isChecked}
            onChange={onChange}
          />
        )}
      />
    </>
  );
};

export default CheckBox;
