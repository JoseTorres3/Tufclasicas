
import React from 'react'
import { createRoot } from 'react-dom/client'
import { Sugerencias } from './Toro/sugerencias.jsx'
import { Footer } from './Toro/footer.jsx'


createRoot(document.getElementById('root')).render(
  <>
    <Footer />
    <Sugerencias />
  </>
)
