import React from 'react'
import { Stories } from 'react-stories'

const obj = [
  {
    thumbnail: 'https://picsum.photos/200',
    highlight: [
      {
        id: 1,
        asset: 'https://picsum.photos/id/1/450/900',
      },
      {
        id: 2,
        asset: 'https://picsum.photos/id/2/450/900',
      },
      {
        id: 3,
        asset: 'https://picsum.photos/id/3/450/900',
      },
    ],
    username: 'fulano',
    id: 1,
  },
  {
    thumbnail: 'https://picsum.photos/200',
    username: 'fulano 2',
    id: 2,
  },
  {
    thumbnail: 'https://picsum.photos/200',
    username: 'longusernametotestelipssis',
    id: 3,
  },
  {
    thumbnail: '',
    username: 'longusernametotestelipssis',
    id: 4,
  },
]

const App = () => {
  return <div style={{ maxWidth: '800px', margin: '50px auto' }}><Stories gradientColors={['blue', 'green']} stories={obj} /></div>
}

export default App
