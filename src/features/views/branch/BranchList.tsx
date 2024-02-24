import { Header } from "../../components/Header";
import { Layout } from "../../components/Layout";
import BranchCard from "./components/BranchCard";

const Content = () => {
    return ( 
        <>
        <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-5">
            {/* CREATE A MAP FUNCTION HERE ONCE HTTP REQUEST IS READY */}
            <BranchCard 
                province="Pampanga" 
                city="Porac" 
                brgy="Brgy. Magliman"
            />
        </div>

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