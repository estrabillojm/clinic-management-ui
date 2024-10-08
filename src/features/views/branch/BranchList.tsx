import { useGetBranchListQuery } from "../../../redux/api/branchApi";
import { getUserInfo } from "../../../redux/features/userSlice";
import { Header } from "../../components/shared/global/Header";
import { Layout } from "../../components/shared/global/Layout";
import BranchCard from "./components/BranchCard";

const Content = () => {

    const accessToken = localStorage.getItem("accesstoken");
    const userInfo = getUserInfo(accessToken)
    const { data: branches, isLoading } = useGetBranchListQuery(userInfo.clinic.clinicId);

    return ( 
        <>
        {
          <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-5">
              {
                !isLoading &&  branches.results.map((branch : { id: string, name: string, description: string }) => (
                  <BranchCard 
                    key={branch.id}
                    id={branch.id}
                    branchName={branch.name}
                    description={ branch.description }
                    clinicId={userInfo.clinic.clinicId}
                  />
                ))
              }
              
        </div>
        }

        </>
     );
}

const BranchList = () => {
    return ( 
        <Layout
        pageTitle={"Administrator"}
        Header={
          <Header
            title="Branches"
            description=""
          />
        }
        Content={<Content/>}
      />
    );
}
 
 
export default BranchList;