import React from 'react'
import Card from "./components/card"
import Games from './components/Games'
import { db } from '../lib/db'
import { div } from 'motion/react-client'

type Post = {
  id: number
  title: string
  body: string
}

export default async function HomePage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts: Post[] = await res.json()
  console.log(db)

  // Visa bara de tre första
  const firstThree = posts.slice(0, 3)

  return (
    <div>
      <h1>Välkommen!</h1>
      {firstThree.map(post => (
        <Card
          key={post.id}
          title={post.title}
          description={post.body}
        />
      ))}
      <Games

      />
    </div>
  )
}
