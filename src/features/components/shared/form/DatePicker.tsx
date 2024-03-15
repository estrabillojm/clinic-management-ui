import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { Controller, useFormContext } from "react-hook-form";
import { Dayjs } from "dayjs";
import { useSelector } from "react-redux";

interface Props {
  errors?: any;
  dateError?: { message: string; type: string };
  label: string;
  enteredDate?: Dayjs | null;
  className?: string;
  fieldName: string;
  onHandleChange?: (value: Dayjs | null) => any;
  maxDate?: Dayjs | null;
  minDate?: Dayjs | null;
  disabled?: boolean;
  disablePast?: boolean;
  defaultValue?: Dayjs | null;
  isRequired?: boolean;
}

const DatePicker = ({
  label = "",
  fieldName,
  maxDate = null,
  minDate = null,
  disablePast = false,
  defaultValue = null,
  isRequired = false
  //errors, // Add errors prop here
}: Props) => {
  const { control } = useFormContext();
  const actionType = useSelector((state: any) => state.actionType.actionType)

  const requiredValidations = () => {
    if(isRequired){
      return { required: `${label} field is required` };
    }
    return { required: undefined };
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller
        name={fieldName}
        control={control}
        defaultValue={defaultValue}
        rules={requiredValidations()}
        render={({ field }) => (
          <DesktopDatePicker
            {...field}
            label={label}
            disablePast={disablePast}
            disabled={actionType === "View"}
            minDate={minDate}
            maxDate={maxDate}
            sx={{
              "& .MuiInputBase-input": {
                fontWeight: 500,
                color: "#49526F",
                opacity: "80%",
              },
            }}
            className="w-full"
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default DatePicker;
