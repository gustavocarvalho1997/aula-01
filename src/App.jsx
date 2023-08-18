import React from 'react'

export default function App() {
  var nome = "Ronald";
  const time = [
    "Corinthians",
    "São Paulo",
    "Flamengo",
    "Palmeiras",
    "Vasco",
    "Bahia"
  ];
  return (
    <>
      <div>
        <h1>React + Vite</h1>
        <h2>RM552466</h2>
        <p>Melhor Caminhoneiro: {nome}</p>
        <ul>
          {time.map((item, key) => 
            <li key={key}>{item}</li>
          )}
        </ul>
      </div>
    </>
  )
}
