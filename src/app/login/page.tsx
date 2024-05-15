"use client";
import SubmitButton from "@/components/Button"
import InputField from "@/components/InputField"
import { HOME_ROUTE, REGISTER_ROUTE } from "@/constants/routes"
import Link from "next/link"
import {auth} from '@/services/firebase';
import { loginValidation } from "@/validationSchema/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";



const Login = () => {

  const router = useRouter();
  const {handleSubmit, register, formState:{errors}, reset} = loginValidation();

  const submitForm =async(values:any) => {
    console.log("form values", values)
    signInWithEmailAndPassword(auth,values.email,values.password).then((response)=>{
      alert("Login successfully");
      reset();
      router.push(HOME_ROUTE);
    }).catch(e=>{
         console.log("catch ",e.message)
         alert("Information incorrect")
       })
  }

  return (
    <div className="h-screen flex  justify-center items-center bg-gradient-to-br from-yellow-400/60 via-blue-400 to-purple-400/60">
      <div className="w-1/2 rounded-md bg-white/40 shadow-lg flex justify-between flex-col">
        <div className="h-28 w-full justify-center flex items-end">
          <span className="mx-2 lg:text-3xl font-mono font-semibold bg-gradient-to-br from-green-500 via-yellow-200 to-red-500 p-3 rounded-md">
            Welcome To SignIn
          </span>
        </div>
        <form onSubmit={handleSubmit(submitForm)} className="h-full w-1/2 mx-auto">
          <InputField
            register={register}
            error={errors.email}
            type="text"
            placeholder="xyz@gmail.com"
            name="email"
            label="Email"
          />
          <InputField
            register={register}
            error={errors.password}
            type="password"
            placeholder="Password"
            name="password"
            label="Password"
          />
          <SubmitButton label="Submit"/>
        </form>
        <div className="h-20 mx-auto">
          <span className="text-sm text-gray-600 font-semibold">
            Don't have an account?
            <Link href={REGISTER_ROUTE}>
            <span className="text-blue-700 font-bold text-md hover:text-blue-950 underline">
              Register Here
            </span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Login
