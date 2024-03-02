import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Controller, useFormContext } from 'react-hook-form';
import { useSelector } from 'react-redux';

type Option = {
  label: string;
};

type Props = {
  label: string;
  fieldName: string;
  isRequired?: boolean;
  options: Option[];
  defaultValue?: string;
};

const AutoComplete: React.FC<Props> = ({
  label,
  fieldName,
  isRequired = false,
  options,
  defaultValue = "",
}) => {
  const { control } = useFormContext();
  const actionType = useSelector((state: any) => state.actionType.actionType)
  return (
    <Controller
      name={fieldName}
      control={control}
      rules={{ required: isRequired }}
      defaultValue={defaultValue}
      
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Autocomplete
          disablePortal
          disabled={actionType === "View"}
          id={`${fieldName}-autocomplete`}
          options={options}
          getOptionLabel={(option: Option) => option.label}
          onChange={(event: any, newValue: Option | null) => {
            onChange(newValue ? newValue.label : '');
            return event;
          }}
          value={options.find(option => option.label === value) || null}
          renderInput={(params) => (
            <TextField
              {...params}
              label={label}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
        />
      )}
    />
  );
};

export default AutoComplete;
