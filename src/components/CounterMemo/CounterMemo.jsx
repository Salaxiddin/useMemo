import React from 'react'
import IsFive from './isFive'

let render2 = 0

export default function CounterMemo() {
  const [count1,setCount1] =React.useState(0)
  const [count2,setCount2] =React.useState(0)

  const addNumbCount1 =()=>{
    setCount1(count1 + 1)
    console.warn(`count1 ${++render2}`)
  }

  const addNumbCount2 =()=>{
    setCount2(count2 + 1)
  }



  return (
    <div>
      <div className='conteiner'>
        <button className='btn' onClick={addNumbCount1}>+</button>
        <h3>{count1}</h3>
      </div>
      <div className='conteiner'>
        <button className='btn' onClick={addNumbCount2}>+</button>
        <h3>{count2}</h3>
        <IsFive value={count2}></IsFive>
      </div>
    </div>
  )
}
