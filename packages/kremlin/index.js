import React from 'react'
import {render} from 'react-dom'
import Renderer from 'renderer'

render(<Renderer value='hello world!' />, document.getElementById('root'))

module.hot.accept()
