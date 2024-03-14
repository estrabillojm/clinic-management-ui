import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { Controller, useFormContext } from 'react-hook-form';
import { useSelector } from 'react-redux';

type Props = {
  label: string;
  fieldName: string;
  type?: string;
  defaultValue?: string;
};

const TextArea: React.FC<Props> = ({
  label,
  fieldName,
  type = "text",
  defaultValue = "",
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

  return (
    <>
      <Controller
        name={fieldName}
        control={control}
        defaultValue={defaultValue ?? ""}
        disabled={actionType === "View"}
        rules={{ required: false }}
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
