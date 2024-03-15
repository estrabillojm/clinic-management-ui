import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { Controller, useFormContext } from 'react-hook-form';
import { useSelector } from 'react-redux';

type Props = {
  label: string;
  fieldName: string;
  type?: string;
  defaultValue?: string;
  isRequired?: boolean;
};

const TextArea: React.FC<Props> = ({
  label,
  fieldName,
  type = "text",
  defaultValue = "",
  isRequired = false
}) => {
  const { control } = useFormContext();
  const actionType = useSelector((state: any) => state.actionType.actionType);
  const [value, setValue] = useState(defaultValue ?? "");

  useEffect(() => {
    setValue(defaultValue ?? "");
  }, [defaultValue]);

  const handleValueChange = (newValue: string) => {
    setValue(newValue);
  };

  const requiredValidations = () => {
    if(isRequired){
      return { required: `${label} field is required` };
    }
    return { required: undefined };
  }

  return (
    <>
      <Controller
        name={fieldName}
        control={control}
        defaultValue={defaultValue ?? ""}
        disabled={actionType === "View"}
        rules={requiredValidations()}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            type={type}
            label={label}
            multiline
            rows={3}
            variant="outlined"
            error={!!error}
            helperText={error ? error.message : null}
            fullWidth
            value={value}
            onChange={(e) => handleValueChange(e.target.value)}
          />
        )}
      />
    </>
  );
};

export default TextArea;
