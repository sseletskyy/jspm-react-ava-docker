import React from 'react'
import { render } from 'react-dom'

const Root = () => {
  return (
    <div>
      <h1>This is React Root 4</h1>
    </div>
  )
}

render(
  <Root />,
  document.getElementById('app')
)
