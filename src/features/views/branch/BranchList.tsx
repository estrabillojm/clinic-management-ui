import { useEffect } from "react";
import { useGetBranchListQuery } from "../../../redux/api/branchApi";
import { Header } from "../../components/shared/global/Header";
import { Layout } from "../../components/shared/global/Layout";
import BranchCard from "./components/BranchCard";

const Content = () => {

    const { data: branches, isLoading } = useGetBranchListQuery(null);

    useEffect(() => {
      console.log(branches)
    }, [branches]);


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
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, veritatis."
          />
        }
        Content={<Content/>}
      />
    );
}
 
 
export default BranchList;