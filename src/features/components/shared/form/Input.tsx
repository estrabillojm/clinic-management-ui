import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type Props = {
    label: string;
    type?: string;
    fieldName: string;
    defaultValue?: string | number;
}

const Input = ({ label, fieldName, type="text", defaultValue="" } : Props) => {

    const { control } = useFormContext();

    return ( 
        <>
            <Controller
                name={fieldName}
                control={control}
                defaultValue={defaultValue ?? ""}
                // rules={{ required: 'This field is required' }}
                disabled={defaultValue ? true : false }
                render={({ field, fieldState: { error } }) => (
                    <TextField
                    {...field}
                    type={type}
                    label={label}
                    variant="outlined"
                    error={!!error}
                    helperText={error ? error.message : null}
                    fullWidth
                    />
  )}
/>
        </>
     );
}
 
export default Input;