import React, {PropTypes} from 'react'

const Button = (props) => {
  return (
    <button>{props.value}</button>
  )
}

Button.propTypes = {
  value: PropTypes.string
}

export default Button
