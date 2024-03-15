import { useEffect, useState } from "react";
import AutoComplete from "../../../../../components/shared/form/AutoComplete";
import Input from "../../../../../components/shared/form/Input";
import TextArea from "../../../../../components/shared/form/TextArea";
import InputChange from "../../../../../components/shared/form/InputChange";
import calculateBMI from "../../../../../../utils/bmiCalculator";
import { TextField } from "@mui/material";

const VitalSignTab = ({ data } : any) => {

  const [bmi, setBmi] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);

  const handleWeightChange = (field: string, e : any) => {
    if(field === "height"){
      setHeight(e.target.value)
    }
    if(field === "weight") {
      setWeight(e.target.value)
    }
  }

  useEffect(() => {
    if(data.physicianRemarksWeight && data.physicianRemarksHeight){
      setBmi(calculateBMI(data.physicianRemarksWeight, data.physicianRemarksHeight));
    }
  }, [data.physicianRemarksWeight, data.physicianRemarksHeight])


  useEffect(() => {
    if(height && weight){
      setBmi(calculateBMI(weight, height));
    }
  }, [height, weight])

  return (
    <>
      <div className="grid grid-cols-12 gap-4 mb-8">
        <div className="col-span-2">
        {
        data.physicianRemarksWeight ? 
          <Input 
          type="number" 
          label="Height (cm)*" 
          fieldName="physicianRemarksheight" 
          defaultValue={data.physicianRemarksHeight}
          /> :
          <InputChange type="number" label="Height (cm)*" fieldName="physicianRemarksheight" onChange={(e: any) => handleWeightChange("height", e)}/>
        }
        </div>
        <div className="col-span-2">
          { 
            data.physicianRemarksWeight ? 
            <Input type="number" label="Weight (kg)*" fieldName="physicianRemarksweight" defaultValue={data.physicianRemarksWeight}/> :
            <InputChange type="number" label="Weight (kg)*" fieldName="physicianRemarksweight" onChange={(e: any) => handleWeightChange("weight", e)}/>
          }
        </div>

        <div className="col-span-2">
        <TextField
          type="text"
          label="BMI"
          variant="outlined"
          fullWidth
          disabled={true}
          value={bmi}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 pb-2">
        <h3 className="text-primary font-semibold">Blood Pressure*</h3>
      </div>
      
      <div className="grid grid-cols-12 gap-4 mb-8">
        <div className="col-span-2">
          <Input type="number" label="Systolic*" fieldName="physicianRemarksSystolic" defaultValue={data.physicianRemarksBpSystolic} />
        </div>
        <div className="col-span-2">
          <Input type="number" label="Diastolic*" fieldName="physicianRemarksDiastolic" defaultValue={data.physicianRemarksBpDiastolic} />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4 my-8 border-t border-gray-300">
      </div>
      <div className="grid grid-cols-12 gap-4 mb-8">
        <div className="col-span-2">
          <Input type="number" label="Oxygen Saturation*" fieldName="physicianRemarksOxygenSaturation" defaultValue={data.physicianRemarksOxygenSaturation } />
        </div>
        <div className="col-span-2">
          <Input type="number" label="Temperature*" fieldName="physicianRemarksTemperature" defaultValue={data.physicianRemarksTemperature } />
        </div>
        <div className="col-span-2">
          <Input type="number" label="Respiratory Rate*" fieldName="physicianRemarksRespiratoryRate" defaultValue={data.physicianRemarksRespiratoryRate } />
        </div>
        <div className="col-span-2">
          <Input type="number" label="Pulse Rate*" fieldName="physicianRemarksPulseRate" defaultValue={data.physicianRemarksPulseRate } />
        </div>
        <div className="col-span-2">
          <AutoComplete
            label="Blood Type*"
            fieldName="physicianRemarksBloodType"
            isRequired={false}
            options={[]}
          />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 mb-8">
        <div className="col-span-6">
          <TextArea type="number" label="Remarks" fieldName="physicianRemarksRemarks" />
        </div>
      </div>
    </>
  );
};
export default VitalSignTab;
