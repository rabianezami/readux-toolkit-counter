export default function CounterValue({ value }) {
    return (
        <div>
            <div className="text-sm opacity-70">
                Current Value
            </div>
            <div className="text-[54px] font-extrabold leading-none">
                {value}
            </div>
        </div>
    )
}