import { SubmitButtonT } from '@/types/ButtonTypes'

const SubmitButton = ({label}:SubmitButtonT) => {
  return (
    <div className='flex justify-center mt-6 mb-3'>
      <button className='bg-blue-900 rounded-md py-2 px-6 font-semibold focus:outline-none lg:px-12 text-white hover:bg-blue-700 hover:shadow-md'>{label}</button>
    </div>
  )
}

export default SubmitButton;
