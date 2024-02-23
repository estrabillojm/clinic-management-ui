import { RegisterHookForm } from "../../../../../types/generalTypes";
import { SystemRoles } from "../../../../../types/systemRoles";

type Props = {
  systemRoles: SystemRoles;
  register: RegisterHookForm;
}

const AccessTab = ({ systemRoles, register } : Props) => {
  return (
    <>
      <div className="grid gap-6 mb-6 md:grid-cols-2 p-3">
        <div className="grid grid-cols-3 gap-1">
          <div>
            <label
              htmlFor="system_role"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              System Role
            </label>
            <select
              id="system_role"
              {...register("systemRole", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option disabled>Choose a System Role</option>
              {systemRoles.results.map(
                (i: { id: string; name: string }, index: number) => (
                  <option key={index} value={i.id}>
                    {i.name}
                  </option>
                )
              )}
            </select>
          </div>
          <div>
            <label
              htmlFor="user_role"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              User Role
            </label>
            <select
              id="user_role"
              {...register("userRole", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option disabled>Choose a User Role</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccessTab;
