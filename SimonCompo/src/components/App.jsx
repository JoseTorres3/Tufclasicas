import Shop from './Shop.jsx'
import img1 from '../img/barcelona.jpeg'
import img2 from '../img/argentina.jpeg'
import img3 from '../img/alemania.jpeg'




function App() {
  const camisas =
  [
    {id:1, nombre:'Barcelona',precio:"30$", img:img1},
    {id:2, nombre:'Real Madrid',precio:"35$",img:img2},
    {id:3, nombre:'Alemania',precio:"45$",img:img3}
  ]
  return(
    <Shop camisas={camisas} />
  )
}

export default App