import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTabSelected } from "../../../../redux/features/patientInfoTabSlice";
import { PiWarningDiamondFill } from "react-icons/pi";

type headers = {
  label: string;
};
type Props = {
  headers: headers[];
};

type Error = {
  column: string;
  value: string;
  tabIndex: number;
};
const MenuWithHeader = ({ headers }: Props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTabSelected(0));
  }, []);
  const tabSelected = useSelector((state: any) => state.patients.tabSelected);
  const handleTabSwitch = (index: number) => {
    dispatch(setTabSelected(index));
  };

  const formValidator = useSelector(
    (state: any) => state.patientValidator.invalidFields
  );
  const [errorIndexes, setErrorIndexes] = useState<number[]>([]);
  useEffect(() => {
    // setRequiredFields(formValidator.map((field: any) => field.column));
    setErrorIndexes(formValidator.map((error: Error) => error.tabIndex));
  }, [formValidator]);

  return (
    <>
      <ul className="flex flex-wrap text-sm font-medium text-center bg-primary text-white dark:border-gray-700 dark:text-gray-400">
        {headers.length &&
          headers.map((header, index) => (
            <li key={index}>
              <a
                href="#"
                aria-current="page"
                key={index}
                className={`flex justify-between py-4 pl-4 pr-4 hover:text-activeLink ${tabSelected === index ? "text-activeLink border-b-4 border-b-activeLink" : ""} hover:border-b-activeLink hover:border-b-4 hover:text-activeLink `}
                onClick={() => handleTabSwitch(index)}
              >
                {header.label}
                {errorIndexes.includes(index) && (
                  <PiWarningDiamondFill
                    size={20}
                    className="text-red-400 ml-2"
                  />
                )}
              </a>
            </li>
          ))}
      </ul>
    </>
  );
};

export default MenuWithHeader;
