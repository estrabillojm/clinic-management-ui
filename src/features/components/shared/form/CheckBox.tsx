import { Checkbox, FormControlLabel } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type Props = {
  label: string;
  type?: string;
  fieldName: string;
};

const CheckBox = ({ label, fieldName }: Props) => {
  const { control } = useFormContext();

  return (
    <>
      <Controller
        name={fieldName}
        control={control}
        defaultValue=""
        // rules={{ required: 'This field is required' }}
        render={({ field }) => (
          <FormControlLabel
            {...field}
            control={<Checkbox name="gilad" />}
            label={label}
          />
        )}
      />
    </>
  );
};

export default CheckBox;
