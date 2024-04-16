import { useState } from "react"

import { useDispatch, useSelector } from "react-redux"
// import { useAppDispatch, useAppSelector } from "../../app/hooks"
import styles from "./Counter.module.css"
import {
  decrement,
  increment,
  incrementByAmount,
} from "../../../Centralise-Store/src/feature/Counter"

export const Counter = () => {
  const dispatch = useDispatch()
  const count = useSelector((state:any)=>state.count?.value);
  const [incrementAmount, setIncrementAmount] = useState("2")

  const incrementValue = Number(incrementAmount) || 0

  return (
    <div>
       <h3>React App 2 </h3>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span aria-label="Count" className={styles.value}>
          {count}
        </span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          type="number"
          onChange={e => {
            setIncrementAmount(e.target.value)
          }}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
      </div>
    </div>
  )
}
