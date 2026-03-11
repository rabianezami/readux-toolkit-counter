import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  decrement,
  increment,
  incrementByAmount,
  reset
} from "./features/counter/counterSlice"

import Card from "./components/Card"
import CounterValue from "./components/CounterValue"
import CounterControls from "./components/CounterControls"
import AmountAdder from "./components/AmountAdder"

function App() {
  const count = useSelector((state) => state.counter.value)

    useEffect(() => {
    localStorage.setItem("counter", count)
  }, [count])

  
  const dispatch = useDispatch()

  const [amount, setAmount] = useState("")

  const parsedAmount = Number(amount)
  const amountIsValid = Number.isFinite(parsedAmount)

  return (
    <div className="
       min-h-screen 
       p-15 
       bg-gray-800
       text-white
     "
    >

      <Card>
        <h1 className="
           text-md font-semibold 
           mb-2 opacity-70
         "
        >
          Redux Toolkit Counter
        </h1>

        <p className="opacity-80 mt-5 lineHeight-1">
          This project demonstrates RTK fundamentals: <b>store</b>, <b>slice</b>,
          <b>reducers</b>, and React bindings via <b>useSelector</b> and{" "}
          <b>useDispatch</b>.
        </p>

        <div className="
          grid grid-cols-[1fr_auto] 
          gap-2 alignItems-center 
          mt-5
         "
        >
          <CounterValue value={count}/>

          <CounterControls
            onIncrement={() => dispatch(increment())}
            onDecrement={() => dispatch(decrement())}
            onReset={() => dispatch(reset())}
          />
        </div>

        <AmountAdder
          amount={amount}
          setAmount={setAmount}
          amountIsValid={amountIsValid}
          onAdd={() => dispatch(incrementByAmount(parsedAmount))}
        />

      </Card>
    </div>
  )
}

export default App
