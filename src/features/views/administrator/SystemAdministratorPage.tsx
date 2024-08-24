import { useEffect } from "react";
import { Layout, Header } from "../../components/shared/global/IndexComponents";
import { useGetSystenrolesQuery } from "../../../redux/api/systemroleApi";
import { UserTypes } from "../../../types/users";
import { FormProvider, useForm } from "react-hook-form";
import AdminTabUtils from "./components/utils/adminTabUtils";

import { useSelector } from "react-redux";
import MenuWithHeader from "../../components/shared/menuWithHeader/MenuWithHeader";
import { headerProps, tabSelectedProps } from "../../../types/adminTypes";

const SystemAdministratorPage = () => {
  const { data: post, isLoading } = useGetSystenrolesQuery(null);

  const headers = useSelector(
    (state: headerProps) => state.adminTabs.tabs
  );

  const tabSelected = useSelector(
    (state: tabSelectedProps) => state.adminTabs.tabSelected
  );

  const onSubmit = (data: UserTypes): void => {
    // console.log(data);
  };

  useEffect(() => {
    if (!isLoading) {
    }
  }, [post, isLoading]);

  const methods = useForm();

  const content = (
    <div className="flex flex-col gap-2">
      <div className="min-w-[10em] min-h-[20em] bg-gray-100 border border-gray-200 shadow">
      <MenuWithHeader headers={headers} />
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit as () => void)}
            className="p-4"
          >
            <AdminTabUtils tabSelected={tabSelected} />
          </form>
        </FormProvider>
      </div>
    </div>
  );
  return (
    <div className="">
      <Layout
        pageTitle={"Administrator"}
        activeLink={4}
        Header={
          <Header
            title="System Administrator"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, veritatis."
          />
        }
        Content={content}
      />
    </div>
  );
};

export default SystemAdministratorPage;
