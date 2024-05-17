"use client";
import SubmitButton from "@/components/Button"
import InputField from "@/components/InputField"
import { LOGIN_ROUTE } from "@/constants/routes"
import { auth } from "@/lib/firebase";
import {useRegisterValidation } from "@/validationSchema/auth"
import { createUserWithEmailAndPassword} from "firebase/auth";
import Link from "next/link"
import { useRouter } from "next/navigation";




const Register = () => {

  const router = useRouter();

  const { handleSubmit, register, formState: { errors }, reset } = useRegisterValidation();


  const submitForm = async(values:any)=>{
    console.log("Register form values",values);
    createUserWithEmailAndPassword(auth,values.email,values.password).then(async(response)=>{
      
      alert("user registered successfully"); 
      reset();
      router.push(LOGIN_ROUTE);
    }).catch(e=>{
      console.log("catch ",e.message)
      alert("Something went wrong please try again.")
      reset();
    })
  }


  return (
    <div className="h-screen flex  justify-center items-center bg-gradient-to-br from-green-500 via-red-200 to-blue-500">
      <div className="w-1/2 rounded-md bg-white/40 shadow-lg flex justify-between flex-col">
        <div className="h-28 w-full justify-center flex items-end">
          <span className="mx-2 lg:text-3xl font-mono font-semibold bg-gradient-to-br from-blue-500 via-green-300 to-red-800 p-3 rounded-md">
            Welcome To SignUp
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
            label="Password" />
          <InputField
            register={register}
            error={errors.cnfpassword}
            type="password"
            placeholder="Confirm Password"
            name="cnfpassword"
            label="Retify Password"
          />
          <SubmitButton label="Submit" />
        </form>
        <div className="h-20 mx-auto">
          <span className="text-sm text-gray-600 font-semibold">
            Already have an account?
            <Link href={LOGIN_ROUTE}>
              <span className="text-blue-700 font-bold text-md hover:text-blue-950 underline">
                Login Here
              </span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Register
