import React, { useEffect } from 'react';
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
  const { control, setValue } = useFormContext();
    const actionType = useSelector((state: any) => state.actionType.actionType);

    useEffect(() => {
        setValue(fieldName, defaultValue); 
    }, [defaultValue, setValue, fieldName]);

    const requiredValidations = isRequired ? { required: `${label} field is required` } : {};

    return ( 
        <Controller
            name={fieldName}
            control={control}
            defaultValue={defaultValue}
            rules={requiredValidations}
            render={({ field, fieldState: { error } }) => (
                <TextField
                    {...field}
                    type={type}
                    label={label}
                    variant="outlined"
                    multiline
                    minRows={3}
                    maxRows={3}
                    error={!!error}
                    helperText={error ? error.message : null}
                    fullWidth
                    disabled={actionType === "View"}
                    onChange={(e) => {
                        field.onChange(e);
                    }}
                />
            )}
        />
    );
};

export default TextArea;
