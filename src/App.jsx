import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {

  let produtos = [
    { name: 'Tennis listrado',   price: '240' },
    { name: 'Sapato estiloso',   price: '400' },
    { name: 'Chinelo branco',   price: '100' },
    { name: 'Sapatilha laranja', price: '250' },
    { name: 'Pantufa fofa rosa', price: '900' },
  ]

  return (
    <div className="App">
      <header className="App-header">
        <h1>Site da Agencia</h1>
        <p> Esse é um texto da agencia</p>
        {produtos.map((produto) => {
          return (
            <div style={{ border: '1px solid white', padding: 20, margin: 20}}>
            <p>Produto {produto.name}</p>
            <p>Preço R${produto.price}</p>
            </div>
          )
        })}
      </header>
    </div>
  )
}

export default App
