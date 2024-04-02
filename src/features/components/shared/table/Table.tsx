import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { setDataTable } from "../../../../redux/features/patientInfoTabSlice";

type Prop = {
  headers: any;
  rows: any;
  btnText: string;
};

const Table = ({ headers, rows, btnText }: Prop) => {
  const dispatch = useDispatch();
  const handleView = (data: any) => {
    dispatch(setDataTable(data));
  }

  return (
    <>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 z-0">
        <thead className="text-xs text-white uppercase bg-primary dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {headers.map((header: any, index: number) => (
              <th scope="col" className="px-6 py-3" key={index}>
                {header.label}
              </th>
            ))}
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row: any, index: number) => (
            <tr key={index} className="bg-gray-100 border-b border-gray-300 hover:bg-blue-200 hover:transition-all cursor-pointer">
              {headers.map((header: any, index: number) => (
                <td className="px-6 py-4" key={index}>
                  {typeof row[header.column] === "string"
                    ? row[header.column].toUpperCase()
                    : row[header.column]}
                </td>
              ))}
              <td className="px-6 py-2">
                <Button onClick={() => handleView(row)}>{btnText}</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
