import { createSlice } from "@reduxjs/toolkit";

type PatientValidator = {
    column: string;
    value: string;
    tabIndex: number;
}

type InitialState = {
    invalidFields: PatientValidator[] | [];
    patientDetails: any;
}

const initialState: InitialState = { // TODO : CHANGE THIS
  invalidFields: [],
  patientDetails: null,
};

const patientValidatorSlice = createSlice({
  name: "patientValidator",
  initialState,
  reducers: {
    validatePatientForm: (state, action) => {
  	//   PATIENT TABS INDEX LEGEND
    // 0 - PERSONAL
    // 1 - CONTACT
    // 2 - PERSON TO NOTIFY
    // 3 - VITAL SIGNS
    // 4 - HISTORY
    // 5 - SOAP
    // 6 - PHYSICIAN

    const { patient } = action.payload
      if(patient){
        const requiredFields = Object.freeze([
            { column: "firstName", value: "First Name", tabIndex: 0 },
            { column: "lastName", value: "Last Name", tabIndex: 0 },
            { column: "dateOfBirth", value: "Date of Birth", tabIndex: 0 },
            { column: "gender", value: "Gender", tabIndex: 0 },
            { column: "civilStatus", value: "Civil Status", tabIndex: 0 },
            { column: "contact", value: "Contact Number", tabIndex: 1 },
            { column: "birthPlaceProvinceId", value: "Birth Place - Province", tabIndex: 0 },
            { column: "birthPlaceCityId", value: "Birth Place - City", tabIndex: 0 },
            { column: "province", value: "Address - Province", tabIndex: 1 },
            { column: "city", value: "Address - City", tabIndex: 1 },
            { column: "physicianId", value: "Physician", tabIndex: 6 },
        ])

        const requiredFieldArray = requiredFields.map((data) => data.column);
        let invalidList: string[] = [];
        Object.keys(patient).forEach((key) => {

              if(!patient[key.trim()] && requiredFieldArray.includes(key)){

                  if(!patient[key]){
                    invalidList.push(key)
                  }
                
            }
        })

        state.invalidFields = requiredFields.filter((field) => invalidList.includes(field.column))
        state.patientDetails = patient

      }
    }
  },
});

export const { validatePatientForm } = patientValidatorSlice.actions;

export default patientValidatorSlice.reducer;
