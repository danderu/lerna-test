import React from 'react'
import {render} from 'react-dom'
import Renderer from 'renderer'

const rootNode = document.createElement('div')
document.body.appendChild(rootNode)
render(<Renderer value='hello yo!' />, rootNode)
