import * as React from 'react'
import styled from 'styled-components'

import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Button from '../shared/Button'
import Color from '../shared/Color'

interface IconButtonProps {
  icon: IconProp
  color?: Color
  margin?: string
  disabled?: boolean
  onClick: (event: React.FormEvent<HTMLButtonElement>) => void
}
export default (props: IconButtonProps) => {
  return (
    <IconButton
      colorStyle={props.color}
      margin={props.margin}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      <FontAwesomeIcon icon={props.icon} className="icon" fixedWidth={true} />
    </IconButton>
  )
}

const IconButton = styled(Button)<{
  colorStyle?: Color
  margin?: string
}>`
  background: none;
  color: ${({ colorStyle }) => {
    switch (colorStyle) {
      case Color.RED:
        return 'rgb(167, 8, 8)'
      default:
        return '#666'
    }
  }};
  padding: 8px;
  margin: ${({ margin }) => margin};
  border-radius: 100%;
  border: none;

  &:hover {
    background-color: ${({ colorStyle }) => {
      switch (colorStyle) {
        case Color.RED:
          return 'rgb(248, 223, 225)'
        default:
          return '#ddd'
      }
    }};
  }
  &:disabled {
    color: #aaa;
    cursor: initial;
  }
  &:disabled:hover {
    background: none;
  }
`
