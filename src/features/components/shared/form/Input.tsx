import { useEffect } from "react";
import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { useSelector } from "react-redux";

type Props = {
    label: string;
    type?: string;
    fieldName: string;
    defaultValue?: string | number;
    isRequired?: boolean;
    readonly?: boolean;
    isMultiline?: boolean;
}

const Input = ({ label, fieldName, type="text", defaultValue="", isRequired=false, readonly=false, isMultiline=false } : Props) => {
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
                    error={!!error}
                    helperText={error ? error.message : null}
                    fullWidth
                    disabled={actionType === "View" || readonly}
                    onChange={(e) => {
                        field.onChange(e);
                    }}
                    multiline={isMultiline}
                    minRows={isMultiline ? 3 : 0}
                    maxRows={isMultiline ? 3 : 0}
                />
            )}
        />
    );
}

export default Input;
