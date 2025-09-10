import React from 'react'

type CardProps = {
  title: string
  description: string
}

export default function Card({ title, description }: CardProps) {
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '1rem',
      borderRadius: '0.5rem',
      marginBottom: '1rem'
    }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
