import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import AutoComplete from "../../../../../components/shared/form/AutoComplete";
import Input from "../../../../../components/shared/form/Input";
import { TextField } from "@mui/material";
import { calculateBMI } from "../../utils/bmiCalculator";
import { BLOOD_TYPE_ENUM } from "../../../../../../enums/bloodType";

const VitalSignTab = ({ data, selectedTab }: any) => {
  const { watch, setValue } = useFormContext();
  const [bmi, setBmi] = useState<number>(0);

  const bloodTypes = BLOOD_TYPE_ENUM.map((blood) => ({
    label: blood,
    value: blood
  }));

  // Watch height and weight fields
  const height = watch("physicianRemarksHeight", data.physicianRemarksHeight || 0);
  const weight = watch("physicianRemarksWeight", data.physicianRemarksWeight || 0);

  useEffect(() => {
    if (weight && height) {
      setBmi(calculateBMI(weight, height));
    }
  }, [weight, height]);

  useEffect(() => {
    setValue("physicianRemarksHeight", data.physicianRemarksHeight || 0);
    setValue("physicianRemarksWeight", data.physicianRemarksWeight || 0);
  }, [data.physicianRemarksHeight, data.physicianRemarksWeight, setValue]);

  return (
    <div className={`${selectedTab === 3 ? "block" : "hidden"}`}>
      <div className="grid grid-cols-12 gap-4 mb-8">
        <div className="col-span-2">
          <Input
            type="number"
            label="Height (cm)*"
            fieldName="physicianRemarksHeight"
            defaultValue={data.physicianRemarksHeight}
          />
        </div>
        <div className="col-span-2">
          <Input
            type="number"
            label="Weight (kg)*"
            fieldName="physicianRemarksWeight"
            defaultValue={data.physicianRemarksWeight}
          />
        </div>
        <div className="col-span-2">
          <TextField
            type="text"
            label="BMI"
            variant="outlined"
            fullWidth
            disabled
            value={bmi}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 pb-2">
        <h3 className="text-primary font-semibold">Blood Pressure*</h3>
      </div>

      <div className="grid grid-cols-12 gap-4 mb-8">
        <div className="col-span-2">
          <Input
            type="number"
            label="Systolic*"
            fieldName="physicianRemarksBpSystolic"
            defaultValue={data.physicianRemarksBpSystolic}
          />
        </div>
        <div className="col-span-2">
          <Input
            type="number"
            label="Diastolic*"
            fieldName="physicianRemarksBpDiastolic"
            defaultValue={data.physicianRemarksBpDiastolic}
          />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 my-8 border-t border-gray-300"></div>

      <div className="grid grid-cols-12 gap-4 mb-8">
        <div className="col-span-2">
          <Input
            type="number"
            label="Oxygen Saturation*"
            fieldName="physicianRemarksOxygenSaturation"
            defaultValue={data.physicianRemarksOxygenSaturation}
          />
        </div>
        <div className="col-span-2">
          <Input
            type="number"
            label="Temperature*"
            fieldName="physicianRemarksTemperature"
            defaultValue={data.physicianRemarksTemperature}
          />
        </div>
        <div className="col-span-2">
          <Input
            type="number"
            label="Respiratory Rate*"
            fieldName="physicianRemarksRespiratoryRate"
            defaultValue={data.physicianRemarksRespiratoryRate}
          />
        </div>
        <div className="col-span-2">
          <Input
            type="number"
            label="Pulse Rate*"
            fieldName="physicianRemarksPulseRate"
            defaultValue={data.physicianRemarksPulseRate}
          />
        </div>
        <div className="col-span-2">
          <AutoComplete
            label="Blood Type*"
            fieldName="physicianRemarksBloodType"
            isRequired={false}
            options={bloodTypes}
            defaultValue={data.physicianRemarksBloodType}
          />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 mb-8">
        <div className="col-span-6">
          <Input
            type="string"
            label="Remarks"
            fieldName="physicianRemarksVitalSignRemarks"
            defaultValue={data.physicianRemarksVitalSignRemarks}
            isMultiline={true}
          />
        </div>
      </div>
    </div>
  );
};

export default VitalSignTab;
