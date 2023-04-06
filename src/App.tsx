import { useState } from 'react'
import './App.css'
import { Nav } from './component/nav/Nav'
import { GlobalStyle } from './styles/styleGlobal'
import styled from 'styled-components'
import { Banner } from './component/banner/Banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <GlobalStyle />
      <Nav />
      <Banner />
    </div>
  )
}

export default App
