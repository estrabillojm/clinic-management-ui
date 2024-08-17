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
    readonly?: boolean
}

const Input = ({ label, fieldName, type="text", defaultValue="", isRequired=false, readonly=false } : Props) => {
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
                />
            )}
        />
    );
}

export default Input;
