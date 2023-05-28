import React from 'react'
import Input from './Assessment_Metrocoid/pages/Input'
import { ContextProvider } from './Component/context/context'

function App() {
  return (
    <ContextProvider>
      <Input />
    </ContextProvider>
  )
}

export default App
