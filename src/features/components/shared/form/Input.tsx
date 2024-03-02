import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { useSelector } from "react-redux";

type Props = {
    label: string;
    type?: string;
    fieldName: string;
    defaultValue?: string | number;
}

const Input = ({ label, fieldName, type="text", defaultValue="" } : Props) => {

    const { control } = useFormContext();
    const actionType = useSelector((state: any) => state.actionType.actionType)

    return ( 
        <>
            <Controller
                name={fieldName}
                control={control}
                defaultValue={defaultValue ?? ""}
                rules={{ required: 'This field is required' }}
                disabled={ actionType === "View" }
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