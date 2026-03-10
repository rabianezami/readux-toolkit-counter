export default function Card({ children }) {
    return (
        <div className="
           rounded p-5
           border border-gray-100
           shadow bg-gray-700
           max-w-md mx-auto  
         "
        >
            {children}
        </div>
    )
}