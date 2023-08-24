interface InputProps {
  placeholder?: string;
  value?: string;
  type?: string;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}

const Input: React.FC<InputProps> = ({ placeholder, value, type = "text", onChange, disabled, label }) => {
  return (
    <div className="w-full">
      {label && <p className=" text-white mb-2">{label}</p>}
      <input
        disabled={disabled}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        type={type}
        className="
          w-full
          p-1
         text-base  
          border-2
          
          rounded-md
          outline-none
          focus:border-sky-500
          focus:border-2
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
        "
      />
    </div>
   );
}
 
export default Input;