import React from 'react'
import { Stories } from 'react-stories'

const obj = [
  {
    thumbnail: 'https://picsum.photos/200',
    username: 'fulano',
    id: 1,
  },
  {
    thumbnail: 'https://picsum.photos/200',
    username: 'fulano 2',
    id: 2,
  },
]

const App = () => {
  return <Stories stories={obj} />
}

export default App
