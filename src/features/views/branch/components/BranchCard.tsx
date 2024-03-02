import { Link } from "react-router-dom";
import { FaClinicMedical } from "react-icons/fa";
type Props = {
    branchName: string;
    description: string;
    id: string;
}
const BranchCard = ({ id, branchName, description } : Props) => {
    return ( 
        <>
            <Link to={`/patients/list/${id}`}>
                <div className="border-4 border-secondaryBg rounded-lg pb-4 px-2 pt-8 hover:bg-slate-300 transition-all relative overflow-hidden">
                    <FaClinicMedical className="absolute h-32 w-40 bottom-[-20px] right-1 text-secondaryBg z-0"/>
                    <div className="border-l-2 border-gray-300 pl-2 z-10 relative">
                        <h2 className="text-xl font-bold text-primary">{ branchName }</h2>
                        <h3 className="text-regular italic">{ description }</h3>
                    </div>
                </div>
            </Link>
        </>
    );
}
 
export default BranchCard;