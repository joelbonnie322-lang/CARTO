import React, { useEffect, useState } from 'react'

export default function ProductList({ currency }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetch(`/api/products?currency=${currency}`)
      .then(r => r.json())
      .then(data => setProducts(data))
      .finally(() => setLoading(false))
  }, [currency])

  function expand(productId) {
    setMessage('Starting expansion...')
    fetch('/api/expand', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId, targetMarket: currency })
    })
      .then(r => r.json())
      .then(j => setMessage(j.message))
      .catch(() => setMessage('Failed to start expansion'))
  }

  if (loading) return <div>Loading products...</div>

  return (
    <div>
      {message && <div className="message">{message}</div>}
      <ul className="products">
        {products.map(p => (
          <li key={p.id} className="product">
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <div className="price">{p.price} {p.currency}</div>
            <button onClick={() => expand(p.id)}>Expand to {p.currency} market</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
