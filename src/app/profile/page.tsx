import SubmitButton from "@/components/Button"
import InputField from "@/components/InputField"
import { profileValidation } from "@/validationSchema/auth";


const Profile = () => {


  const {handleSubmit, register, formState:{errors}, reset} = profileValidation();

  return (
    <div className="h-screen flex  justify-center items-center bg-gradient-to-br from-pink-400 via-red-200 to-orange-400">
      <div className="w-1/2 rounded-md bg-white/40 shadow-lg flex justify-between flex-col bg-gradient-to-br from-orange-400 via-red-200 to-pink-400">
        <div className="h-28 w-full justify-center flex items-end">
          <span className="mx-2 lg:text-3xl font-mono font-semibold bg-gradient-to-br from-blue-500 via-yellow-200 to-gray-500 p-3 rounded-md">
            Settings
          </span>
        </div>
        <form className="h-full w-1/2 mx-auto">
          <InputField
          
            type="text"
            placeholder="Full Name"
            name="name"
            label="Full Name" register={undefined} error={undefined}          />
          <InputField
            type="text"
            placeholder="xyz@gmail.com"
            name="email"
            label="New Email" register={undefined} error={undefined}          />
          <InputField
            type="password"
            placeholder="Password"
            name="password"
            label="Password" register={undefined} error={undefined}          />
          <InputField
            type="password"
            placeholder="Confirm Password"
            name="conpassword"
            label="Ratify Password" register={undefined} error={undefined}          />
          <SubmitButton label="Update"/>
        </form>
      </div>
    </div>
  )
}

export default Profile

