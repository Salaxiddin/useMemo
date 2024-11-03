import React from 'react'
import List from './ListRef2'

export default function Home() {
    const [visible,setVisibles]= React.useState(true)

    const toggle = ()=>{
      setVisibles((visible)=> !visible)
    }
  return (
    <div>
          <button onClick={toggle}>Open / Close</button>
          {visible && <List/>}
    </div>
  )
}
