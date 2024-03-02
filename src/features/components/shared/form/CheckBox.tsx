import { Checkbox, FormControlLabel } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type Props = {
  label: string;
  type?: string;
  fieldName: string;
  isChecked?: any;
  onChange?: any;
};

const CheckBox = ({ label, fieldName, isChecked, onChange }: Props) => {
  const { control } = useFormContext();

  return (
    <>
      <Controller
        name={fieldName}
        control={control}
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
