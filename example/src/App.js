import React from 'react'

import {RButton} from 'adolf-ui'
import 'adolf-ui/dist/index.css'

const App = () => {
  return (
    <div style={{padding:20}}>
    <RButton onClick={()=>{alert("hello world")}}>Click me</RButton>
    </div>
  )
}

export default App
