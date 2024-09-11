import React from 'react'
import ParentClickCounter from './ParentClickCounter'


export default function ChildClickCounter({buttonClick}) {
    
    return (
    <div>
        <h1>button child</h1>
        <button onClick={ buttonClick }>Increment ParentClickCounter</button>
    </div>
  )
}
