import './styles.scss'

import PropTypes from 'prop-types'
import React from 'react'

const Button = props => (
  <button className='Button' onClick={props.onClick}>
    {props.text}
  </button>
)

Button.defaultProps = {
  text: ''
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Button
