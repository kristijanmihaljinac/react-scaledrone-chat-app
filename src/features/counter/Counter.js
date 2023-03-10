import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../counterSlice'

export function Counter() {

  const count = useSelector((state) => {
    console.log(state);
   return state.value;
  });
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <br/>
        <span>{count}</span>
        <br/>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}