import Nav from './Nav'
import MainPage from './MainPage'
import camisa1 from '../img/camisa1.jpg'
import camisa2 from '../img/camisa2.jpg'
import camisa3 from '../img/camisa3.jpg'
import camisa4 from '../img/camisa4.jpg'

const camisetas = [
  { id: 1, img: camisa1 },
  { id: 2, img: camisa2 },
  { id: 3, img: camisa3 },
  { id: 4, img: camisa4 }
];

function App() {
  return (
    <>
      <Nav />
      <MainPage camisetas={camisetas} />
    </>
  )
}

export default App
