import { FaFont, FaGears, FaXmark } from "react-icons/fa6";

type Column = {
  label: string;
  column: string;
}
type Props = {
  title: string;
  columns: Column[]
}
const SortingOptions = ({ title, columns } : Props) => {
  return (
    <>
      <div className="justify-self-end w-[4em] col-span-1 min-h-[20em] bg-white border border-gray-200 rounded-lg shadow">
        <div className="grid grid-cols-1 gap-3 ml-[14px] mt-4">
          <button
            data-modal-target="authentication-modal"
            data-modal-toggle="authentication-modal"
            className="text-gray-700 text-3xl bg-transparent"
            type="button"
          >
            <FaGears />
          </button>
          <div
            id="authentication-modal"
            data-modal-backdrop="static"
            tabIndex={-1}
            aria-hidden="true"
            className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
          >
            <div 
              className="fixed top-0 right-0 bottom-0 left-0 bg-black z-50 flex justify-center items-center bg-opacity-70 backdrop-blur-md"
              data-modal-hide="authentication-modal"
            >
              <div className="relative p-4 w-full max-w-md max-h-full z-50">
                <div className="relative bg-gray-200 rounded-lg shadow dark:bg-gray-700">
                  <div className="flex items-center justify-between p-4 md:p-5 dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      { title }
                    </h3>
                    <button
                      type="button"
                      className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      data-modal-hide="authentication-modal"
                    >
                      <FaXmark />
                    </button>
                  </div>
                  <hr className="h-px mx-2 bg-gray-700 border-0 dark:bg-gray-700"></hr>
                  <div className="p-4 md:p-5">
                    <h4 className="text-primary">Visible Columns:</h4>
                    <div className="flex flex-cols gap-4 py-2 px-4">
                      <div className="grid lg:grid-cols-2 md:grid-cols-1 xs:grid-cols-1 gap-x-10">
                        {
                          columns.map((column, index) => (
                            <div className="flex items-center mb-1" key={index}>
                              <input
                                id={column.column}
                                type="checkbox"
                                value={column.column}
                                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:text-green-500 dark:focus:text-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                htmlFor={column.column}
                                className="ms-2 text-sm font-medium text-primary dark:text-gray-300"
                              >
                                { column.label }
                              </label>
                            </div>
                          ))
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 ml-[14px] mt-4">
          <button
            data-popover-target="popover-click"
            data-popover-trigger="click"
            data-popover-placement="left"
            type="button"
            className="text-gray-700 text-3xl bg-transparent"
          >
            <FaFont />
          </button>

          <div
            data-popover
            id="popover-click"
            role="tooltip"
            className="absolute z-10 invisible inline-block w-64 text-sm border-1 border-gray-100 text-gray-500 transition-opacity duration-300 bg-gray-200  rounded-lg shadow-md opacity-0 dark:text-gray-400"
          >
            <div className="px-3 py-2 bg-gray-200 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
              <h3 className="font-semibold text-primary dark:text-white">
                Sort by:
              </h3>
            </div>
            <div className="px-3 py-2">
              <div className="flex items-center mb-4">
                <input
                  id="disabled-radio-1"
                  type="radio"
                  value=""
                  name="radio1"
                  className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="disabled-radio-1"
                  className="ms-2 text-sm font-medium text-primary dark:text-gray-500"
                >
                  Last Name
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="disabled-radio-2"
                  type="radio"
                  value=""
                  name="radio1"
                  className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="disabled-radio-2"
                  className="ms-2 text-sm font-medium text-primary dark:text-gray-500"
                >
                  Consultation Date
                </label>
              </div>
            </div>
            <hr className="h-px mx-4 bg-primary border-0 dark:bg-gray-700"></hr>
            <div className="px-3 py-2 bg-gray-200 dark:bg-gray-700">
              <h3 className="font-semibold text-primary dark:text-white">
                Sort Order:
              </h3>
            </div>
            <div className="px-3 py-2">
              <div className="flex items-center mb-4">
                <input
                  id="disabled-radio-3"
                  type="radio"
                  value=""
                  name="radio2"
                  className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:text-green-500 dark:focus:text-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="disabled-radio-3"
                  className="ms-2 text-sm font-medium text-primary dark:text-gray-500"
                >
                  Ascending
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="disabled-radio-4"
                  type="radio"
                  value=""
                  name="radio2"
                  className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:text-green-500 dark:focus:text-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="disabled-radio-4"
                  className="ms-2 text-sm font-medium text-primary dark:text-gray-500"
                >
                  Descending
                </label>
              </div>
            </div>
            <div data-popper-arrow></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SortingOptions;
