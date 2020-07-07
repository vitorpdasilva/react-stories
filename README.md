# react-stories

> React Stories Package

[![NPM](https://img.shields.io/npm/v/react-stories.svg)](https://www.npmjs.com/package/react-stories) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-stories
```

## Usage

```jsx
import React, { Component } from 'react'

import { Stories } from 'react-stories'


class Example extends Component {
  const obj = [
  {
    thumbnail: 'https://picsum.photos/200',
    highlight: [
      {
        id: 1,
        asset: 'https://picsum.photos/450/900',
      },
      {
        id: 2,
        asset: 'https://picsum.photos/450/900',
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
  render() {
    return <Stories gradientColors={['blue', 'green']} stories={obj} />
  }
}
```

## License

MIT © [vitorboccio](https://github.com/vitorboccio)
