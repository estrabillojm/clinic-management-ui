import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Controller, useFormContext } from 'react-hook-form';
import { useSelector } from 'react-redux';

type Option = {
  label: string;
  value: string;
};

type Props = {
  label: string;
  fieldName: string;
  isRequired?: boolean;
  options: Option[];
  defaultValue?: string;
  onAutoCompleteChange?: (payload : any) => void | null,
};

const AutoComplete: React.FC<Props> = ({
  label,
  fieldName,
  isRequired = false,
  options,
  defaultValue = "",
  onAutoCompleteChange = null
}) => {
  const { control } = useFormContext();
  const actionType = useSelector((state: any) => state.actionType.actionType);
  const [value, setValue] = useState<Option | null>(null);

  useEffect(() => {
    if (defaultValue) {
      const defaultOption = options.find(option => option.value === defaultValue);
        setValue(defaultOption || null);
    }
  }, [defaultValue, options]);

  const handleValueChange = (newValue: Option | null) => {
    setValue(newValue);
  };

  const requiredValidations = () => {
    if(isRequired){
      return { required: `${label} field is required` };
    }
    return { required: undefined };
  }

  return (
    <Controller
      name={fieldName}
      control={control}
      rules={requiredValidations()}
      defaultValue={defaultValue ?? ""}
      render={({ field: { onChange }, fieldState: { error } } : any) => (
        <Autocomplete
          disablePortal
          disabled={actionType === "View"}
          id={`${fieldName}-autocomplete`}
          options={options}
          getOptionLabel={(option: Option) => option.label}
          onChange={(_, newValue: Option | null) => {
            onChange(newValue ? newValue.value : '');
            handleValueChange(newValue);
            if(onAutoCompleteChange){
              onAutoCompleteChange(newValue)
            }
          }}
          value={value}
          renderInput={(params: any) => (
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
