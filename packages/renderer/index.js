import React, {PropTypes} from 'react'
import Button from 'ui-components'

const Renderer = (props) => {
  return (
    <div className='renderer'>
      <h1>Buttons test</h1>
      <Button value={props.value} />
      <Button value={props.value} />
      <Button value={props.value} />
      <Button value={props.value} />
    </div>
  )
}

Renderer.propTypes = {
  value: PropTypes.string
}

export default Renderer
