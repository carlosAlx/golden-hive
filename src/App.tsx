import { useState } from 'react'
import './App.css'
import { Nav } from './component/nav/Nav'
import { GlobalStyle } from './styles/styleGlobal'
import { Banner } from './component/banner/Banner'
import { About } from './component/about/About'
import { Product } from './component/products/Product'
import { Shop } from './component/shop/Shop'
import { Beauty } from './component/beauty/Beauty'
import { Gallery } from './component/gallery/Gallery'
import { Reviews } from './component/reviews/Reviews'
import { MeetUs } from './component/meetus/MeetUs'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GlobalStyle />
      <Nav />
      <Banner />
      <About />
      <Product />
      <Shop />
      <Gallery />
      <Beauty />
      <Reviews />
      <MeetUs />
      
    </>
  )
}

export default App
