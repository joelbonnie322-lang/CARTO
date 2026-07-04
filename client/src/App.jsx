import React, { useEffect, useState } from 'react'
import ProductList from './components/ProductList'

export default function App() {
  const [currency, setCurrency] = useState('USD')

  return (
    <div className="app">
      <header>
        <h1>CARTO — Market Expansion Toolkit</h1>
        <div className="controls">
          <label>Currency: </label>
          <select value={currency} onChange={e => setCurrency(e.target.value)}>
            <option>USD</option>
            <option>EUR</option>
            <option>GBP</option>
            <option>JPY</option>
          </select>
        </div>
      </header>
      <main>
        <ProductList currency={currency} />
      </main>
    </div>
  )
}
