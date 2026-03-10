export default function CounterControls({ onIncrement, onDecrement, onReset }) {
    return (
        <div className="grid gap-3">
            <button onClick={onIncrement}>
                + Increment
            </button>
            <button onClick={onDecrement}>
                - Decrement
            </button>
            <button onClick={onReset} variant="ghost">
                Reset
            </button>
        </div>
    )
}