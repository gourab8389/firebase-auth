import { yupResolver } from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";
import * as Yup from 'yup';


// schema for login users
const loginSchema = Yup.object({
    email: Yup.string().email("please enter valid email").required("this field is required"),
    password: Yup.string().required("this field is required").min(6,"please enter minimum 6 characters for password")
})
export const useLoginValidation = ()=> useForm({resolver: yupResolver(loginSchema)});

// schema for registration

 const registerSchema = Yup.object({
    email: Yup.string().email("please enter valid email").required("this field is required"),
    password: Yup.string().required("this field is required").min(6,"please enter minimum 6 characters for password"),
    cnfpassword: Yup.string().required("this field is required").oneOf([Yup.ref('password')],"entered password not matched")
});
export const useRegisterValidation = ()=> useForm({resolver: yupResolver(registerSchema)});


// schema for profile update 



const profileSchema = Yup.object({
  name: Yup.string().required("Please enter your name"),
  email: Yup.string().email("Please enter a valid email").required("Please enter your email"),
  password: Yup.string().required("Please enter your password").min(6, "Password must be at least 6 characters"),
  cnfpassword: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref('password')], "Passwords must match")
});

export const useProfileValidation = () => useForm({ resolver: yupResolver(profileSchema) });
