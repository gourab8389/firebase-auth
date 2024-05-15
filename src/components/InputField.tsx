import { InputFieldT } from "@/types/FormTypes"

const InputField = ({ type, name, placeholder, label, register, error }: InputFieldT) => {
    return (
        <div className="my-1 lg:my-2 flex flex-col">
            <label className="py-1 text-md text-black/60 font-mono font-medium">{label}</label>
            <input
            {...register(name)}
                className="px-2 py-2 border rounded-md border-black/30 placeholder:text-sm text-sm"
                type={type}
                name={name}
                placeholder={placeholder}
                id={`field_${name}`}
            />
            {
                error && <span className="text-red-500 py-1">{error.message}</span>
            }
        </div>
    )
}

export default InputField;
