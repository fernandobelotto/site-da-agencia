import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {

  let products = [
    {name: 'Tennis listrado', price:  '240'},
    {name: 'Sapato estiloso', price:  '400'},
    {name: 'Chinelo branco', price:  '100'},
    {name: 'Sapatilha laranja', price:  '250'},
    {name: 'Pantufa fofa rosa', price:  '900'},
    // {name: 'Moleton', price:  '430'}
]

  return (
    <div className="App">
      <header className="App-header">
        <p>Site da Agencia</p>
        <p> Esse é um texto da agencia</p>
        {products.map( (product) => {
          return (
            <div>

             <p>{product.name}</p>
             <p>R${product.price}</p>
            </div>
          )
        } )}
      </header>
    </div>
  )
}

export default App
