import Button from "./Button"
import Input from "./Input"

export default function AmountAdder({
    amount,
    setAmount,
    amountIsValid,
    onAdd,
}) {

  return (
    <div className="
      grid grid-cols-[1fr_auto]
      gap-2 items-center
      mt-5 pt-5 
      border-t border-white/20
    "
    >
    <div>
     <div className="
        text-sm mb-2
        opacity-70
      "
     >
       Add a custome amount
     </div>
        <Input 
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter a number (e.g.5)"
        />
        {!amountIsValid && (
            <div className="mt-2 text-red-400">
                Please enter a valid number.
            </div>
        )}
      </div> 

      <Button onClick={onAdd} disabled={!amountIsValid}>
        Add
      </Button>
    </div>
  )

}