import Button from "./Button"

export default function CounterControls({ onIncrement, onDecrement, onReset }) {
  return (
    <div className="grid gap-3">
      <Button onClick={onIncrement}>
        + Increment
      </Button>

      <Button onClick={onDecrement}>
        - Decrement
      </Button>

      <Button onClick={onReset} variant="ghost">
        Reset
      </Button>
    </div>
  )
}