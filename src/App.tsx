import { useState } from 'react'
import './App.css'
import { Nav } from './component/nav/Nav'
import { GlobalStyle } from './styles/styleGlobal'
import styled from 'styled-components'
import { Banner } from './component/banner/Banner'
import { About } from './component/about/About'
import { Product } from './component/Products/Product'
import { Shop } from './component/shop/Shop'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <GlobalStyle />
      <Nav />
      <Banner />
      <About />
      <Product />
      <Shop />
    </div>
  )
}

export default App
