import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import 'bamboo.css'
import './App.css'
import Button from './components/Button'
import CardProduct from './components/CardProduct'
import FlexContainer from './components/FlexContainer'
import ClassStates from './components/ClassStates'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section>
        <h2>Testeo aquí</h2>
        <Button text="Iniciar Sesión" color="purple"/>
        <Button text="Iniciar Sesión" color ="brown" disabled= {true}/>
      </section>
    <FlexContainer>
        <CardProduct text="La mejor camiseta" title="Ecuador" price={10.50} color="brown"/>
        <CardProduct text="La mejor camiseta" title="Colombia" price={30.50} />
        <CardProduct text="La mejor camiseta" title="Venezuela" price={25.50} />
    </FlexContainer>
    <ClassStates></ClassStates>
    </>
  )
}

// 'greeting' is missing in props validation. Cuando diga esto, colocar
// "react/prop-types": "off" en el archivo .eslint.config.js antes del 4 bracket de abajo hacia arriba

export default App
