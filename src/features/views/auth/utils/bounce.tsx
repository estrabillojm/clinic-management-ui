import Loader from "../../../components/dumb/loader/Loader";
import { useVerifyTokenMutation } from "../../../../redux/api/authApi";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdministratorPage from "../../administrator/SystemAdministratorPage";

type Token = {
  token: string | null | undefined;
}

const Bounce = ({ token } : Token ) => {
  const [verifyToken, {data:verifiedResult, isSuccess, isLoading}] = useVerifyTokenMutation();
  const navigate = useNavigate();

  useEffect(() => {
    if(token){
      verifyToken({token});
    }
  }, [verifyToken])

  useEffect(() => {
    if(isSuccess){
      	if(verifiedResult.result){
          navigate("/administrator/system");
        }else{
          navigate("/login");
        }
    }
  }, [verifiedResult, isSuccess, navigate])

  return (
    <>
      { isLoading && <Loader/> }
      { (isSuccess && verifiedResult) && <AdministratorPage/> }
    </>
  )
};

export default Bounce;
