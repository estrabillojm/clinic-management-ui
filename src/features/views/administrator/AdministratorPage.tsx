import { useState, useEffect } from "react";
import { Navbar, Header } from "../../components/IndexComponents";
import { Button, btnColor } from "../../components/Button";
import { useForm } from "react-hook-form";
import { useGetSystenrolesQuery } from "../../../redux/api/systemroleApi";
import PersonalTab from "./components/addUser/PersonalTab";
import ContactsTab from "./components/addUser/ContactsTab";
import AccessTab from "./components/addUser/AccessTab";
import { UserTypes } from "../../../types/users";

const AdministratorPage = () => {
  const { data: post, isLoading } = useGetSystenrolesQuery(null);
  const [tabSelected, setTab] = useState(0);
  // const [systemRoles, setSystemRoles] = useState()
  const handleTabSwitch = (props: number) => {
    setTab(props);
  };

  const { register, handleSubmit } = useForm();

  const onSubmit = (data : UserTypes) : void => {
    console.log(data)
  };

  useEffect(() => {
    if (!isLoading) {
    }
  }, [post, isLoading]);

  const content = (
    <div className="flex flex-col gap-2">
      <div className="min-w-[10em] min-h-[20em] bg-gray-100 border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <ul className="flex flex-wrap text-sm font-medium text-center bg-primary text-white dark:border-gray-700 dark:text-gray-400">
          <li className="">
            <a
              href="#"
              aria-current="page"
              key={0}
              className={`inline-block p-4  hover:text-activeLink ${tabSelected === 0 ? "text-activeLink border-b-4 border-b-activeLink" : ""} hover:border-b-activeLink hover:border-b-4 hover:text-activeLink dark:bg-gray-800 dark:text-blue-500`}
              onClick={() => handleTabSwitch(0)}
            >
              Personal
            </a>
          </li>
          <li className="">
            <a
              href="#"
              aria-current="page"
              key={1}
              className={`inline-block p-4  hover:text-activeLink ${tabSelected === 1 ? "text-activeLink border-b-4 border-b-activeLink" : ""} hover:border-b-activeLink hover:border-b-4  hover:text-activeLink dark:hover:bg-gray-800 dark:hover:text-gray-300`}
              onClick={() => handleTabSwitch(1)}
            >
              Contacts
            </a>
          </li>
          <li className="">
            <a
              href="#"
              aria-current="page"
              key={2}
              className={`inline-block p-4  hover:text-activeLink ${tabSelected === 2 ? "text-activeLink border-b-4 border-b-activeLink" : ""} hover:border-b-activeLink hover:border-b-4  hover:text-activeLink dark:hover:bg-gray-800 dark:hover:text-gray-300`}
              onClick={() => handleTabSwitch(2)}
            >
              Access
            </a>
          </li>
        </ul>
        <form onSubmit={handleSubmit(onSubmit as () => void)}>
          {tabSelected === 0 ? (
            <PersonalTab register={register} />
          ) : tabSelected === 1 ? (
            <ContactsTab register={register} />
          ) : tabSelected === 2 ? (
            <AccessTab systemRoles={post} register={register} />
          ) : null}
          <div className="flex justify-end mr-6">
            <Button type="submit" text="Save" color={btnColor.success} />
          </div>
        </form>
      </div>
    </div>
  );
  return (
    <div className="">
      <Navbar
        pageTitle={"Administrator"}
        activeLink={4}
        Header={
          <Header
            title="Administrator"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, veritatis."
          />
        }
        Content={content}
      />
    </div>
  );
};

export default AdministratorPage;
