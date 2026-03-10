export default function Input({value, onChange, placeholder}) {
    return (
        <input 
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="
            w-full rounded p-2
            border border-white/20
            bg-black/25 
            outline-none
          "   
        />
    )
}