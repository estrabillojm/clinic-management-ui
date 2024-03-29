import { PiWarningDiamondFill } from "react-icons/pi";
import { useSelector } from "react-redux";
import { tabSelectedProps } from "../../../../../types/patientInfoTypes"; 

const EditPatientValidator = ({ formValidator } : any) => {
    const tabSelected = useSelector(
        (state: tabSelectedProps) => state.patients.tabSelected
      );

    return ( 
        <>
        <div className="border-2 border-red-900 bg-red-100 rounded-md py-4 px-2 mb-4">
                      <h3 className="font-bold text-sm flex align-center">
                        <PiWarningDiamondFill
                          size={20}
                          className="text-red-900"
                        />
                        <span className="ml-2 text-red-900 mb-3">
                          Please fill out all the required fields
                        </span>
                      </h3>
                      {formValidator.length ? (
                        <ul className="list-disc">
                          {formValidator.map((error: any, index: number) => (
                            error.tabIndex === tabSelected && <li
                              key={index}
                              className="text text-[12px] font-semibold ml-[42px] text-red-800 italic"
                            >
                              {error.value} is required
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <></>
                      )}
                    </div>
        </>
     );
}
 
export default EditPatientValidator;