import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type Props = {
    label: string;
    type?: string;
    fieldName: string;
    defaultValue?: string | number;
    onChange?: any;
}

const InputChange = ({ label, fieldName, type="text", defaultValue="", onChange } : Props) => {

    const { control } = useFormContext();

    return ( 
        <>
            <Controller
                name={fieldName}
                control={control}
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
                    onChange={onChange}
                    />
  )}
/>
        </>
     );
}
 
export default InputChange;