import { RegisterHookForm } from "../../../../../types/generalTypes";

type Props = {
  register: RegisterHookForm;
}

const PersonalTab = ({ register }: Props) => {
  return (
    <>
      <div className="grid gap-6 mb-6 md:grid-row-1 p-3">
        <div className="grid grid-cols-3 gap-1">
          <div className="flex flex-col">
            <label htmlFor="username">Username*</label>
            <input
              type="text"
              id="username"
              placeholder="Username..."
              {...register("username", { required: true })}
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-1">
          <div className="flex flex-col">
            <label htmlFor="last_name">Last name*</label>
            <input
              type="text"
              id="last_name"
              placeholder="Last Name..."
              {...register("lastname", { required: true })}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="first_name">First name*</label>
            <input
              type="text"
              id="first_name"
              placeholder="First Name..."
              {...register("firstname", { required: true })}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="middle_name">Middle name</label>
            <input
              type="text"
              id="middle_name"
              placeholder="Middle Name..."
              {...register("middlename", { required: true })}
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-1">
          <div className="flex flex-col">
            <label htmlFor="date_of_birth">Date Of Birth*</label>
            <input
              type="date"
              id="date_of_birth"
              placeholder="John"
              {...register("dateofbirth", { required: true })}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="age">Age</label>
            <input
              type="text"
              id="age"
              placeholder="John"
              {...register("age", { required: true })}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default PersonalTab;
