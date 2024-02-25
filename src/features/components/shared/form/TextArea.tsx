import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type Props = {
    label: string;
    type?: string;
    fieldName: string;
}

const TextArea = ({ label, fieldName, type="text" } : Props) => {

    const { control } = useFormContext();

    return ( 
        <>
            <Controller
                name={fieldName}
                control={control}
                defaultValue=""
                // rules={{ required: 'This field is required' }}
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
            />
  )}
/>
        </>
     );
}
 
export default TextArea;