import { RegisterHookForm } from "../../../../../types/generalTypes";

type Props = {
  register: RegisterHookForm;
}

const ContactsTab = ({ register } : Props) => {
    return ( 
        <>
          <div className="grid gap-6 mb-6 md:grid-row-1 p-3">
              <h4>
                <strong>Note:</strong>
                <i>
                  {" "}
                  The username will be auto-generated after saving and the
                  password will be the default password set in settings{" "}
                </i>
              </h4>

              <div className="grid grid-cols-3 gap-1">
                <div>
                  <label
                    htmlFor="phone_number"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phone_number"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="John"
                    {...register("phonenumber", { required: true })}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="John"
                    {...register("email", { required: true })}
                  />
                </div>
              </div>
            </div>
        </>
    );
}
 
export default ContactsTab;