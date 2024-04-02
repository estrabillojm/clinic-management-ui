import { Grid, Card, CardHeader, CardContent, Alert } from "@mui/material/";
import CustomButton from "../../components/shared/global/Button";
import { AuthForm } from "../../../types/auths";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useLoginMutation, useVerifyTokenMutation } from "../../../redux/api/authApi";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/dumb/loader/Loader";
import { useDispatch } from "react-redux";
import { login as loginSlice } from "../../../redux/features/userSlice"; 
import Input from "../../components/shared/form/Input";

const LoginPage = () => {
  const dispatch = useDispatch();
  const [login, { data: loginResult, isSuccess, isLoading, isError }] = useLoginMutation();
  const navigate = useNavigate();

  const [verifyToken, {data:verifiedResult, isSuccess:isVerified, isLoading: isVerifying}] = useVerifyTokenMutation();
  const token = localStorage.getItem("accesstoken");

  useEffect(() => {
    if(token){
      verifyToken({token});
    }
  }, [verifyToken])

  useEffect(() => {
    if(isVerified){
      	if(verifiedResult.result){
          // TODO : CREATE A CONDITION HERE IF ADMIN OR USER
          navigate("/branches");
        }
    }
  }, [verifiedResult, isVerified, navigate])

  const handleLogin: SubmitHandler<AuthForm> = async (data) => {
    if(isLoading) return false;
    await login(data);
  };

  useEffect(() => {
    if(isSuccess){
      navigate("/branches");
      dispatch(loginSlice(loginResult));
    }
  }, [loginResult, isSuccess, isLoading]);

  const methods = useForm();

  return (
    <>
      {isVerifying && isLoading ?
      <Loader/> :
      <div className={`bg-defaultBg min-h-[100vh] max-h-[100vh] min-w-[100vw] max-w-[100vw] box-border md:fixed`}>
        {/* <Leaf 
          className="absolute right-[-140px] bottom-0 h-[500px] rotate-12 md:block sm:hidden xs:hidden"
          />
        <Leaf 
          fill="#87d67c"
          className="absolute left-[-340px] top-[-200px] h-[800px] rotate-180 md:block sm:hidden xs:hidden"
        />   */}
          <Grid container className="h-[80vh] max-w-[80vw]">
            <Grid item xs={12} md={8} className="border-r border-gray-300  justify-center items-center md:flex sm:hidden xs:hidden">
              {/* <Logo/> */}
            </Grid>
            <Grid item xs={12} md={4} className="flex justify-center items-center">
              <Card
                sx={{
                  minWidth: 450,
                  minHeight: 400,
                  borderRadius: "10px",
                }}
              >
                <CardHeader title="Clinic Name" />
                <CardContent sx={{ display: "flex", flexFlow: "column" }}>
                  { isError && <Alert variant="outlined" severity="warning">Invalid Credentials</Alert>}

                  <FormProvider {...methods}>
                    <form
                      onSubmit={methods.handleSubmit(handleLogin as () => void)}
                      className="p-4"
                    >
                      <div className="flex flex-col gap-1 mt-3">
                    <Input label="Username" fieldName="username" />
                  </div>
                  <div className="flex flex-col gap-1 mt-3">
                    <Input label="Password" fieldName="password" type="password"/>
                  </div>
                  <div className="flex justify-end items-end mt-3">
                    <CustomButton 
                    type="submit"
                    text="Login" 
                    color="primary"
                    />
                  </div>
                      
                    </form>
                  </FormProvider>
                  
                </CardContent>
              </Card>
            </Grid>
          </Grid>
      </div>
      }
    </>
  );
};

export default LoginPage;
