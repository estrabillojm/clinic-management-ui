import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { useSelector } from "react-redux";

type Props = {
    label: string;
    type?: string;
    fieldName: string;
    defaultValue?: string;
}

const TextArea = ({ label, fieldName, type="text", defaultValue = "" } : Props) => {

    const { control } = useFormContext();
    const actionType = useSelector((state: any) => state.actionType.actionType)

    return ( 
        <>
            <Controller
                name={fieldName}
                control={control}
                defaultValue={defaultValue}
                disabled={actionType === "View"}
                // rules={{ required: 'This field is required' }}
                render={({ field, fieldState: { error } }) => (
                    <TextField
                    id={fieldName}
                
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