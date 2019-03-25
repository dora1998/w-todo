import * as React from 'react'
import styled from 'styled-components'

import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Button from '../shared/Button'

interface IconButtonProps {
  icon: IconProp
  elementParams: any
  onClick: (event: React.FormEvent<HTMLButtonElement>) => void
}
export default (props: IconButtonProps) => {
  return (
    <IconButton {...props.elementParams} onClick={props.onClick}>
      <FontAwesomeIcon icon={props.icon} className="icon" fixedWidth={true} />
    </IconButton>
  )
}

const IconButton = styled(Button)`
  background: none;
  color: #666;
  padding: 8px;
  border-radius: 100%;
  border: none;

  &:hover {
    background: #ddd;
  }
  &:disabled {
    color: #aaa;
    cursor: initial;
  }
  &:disabled:hover {
    background: none;
  }

  &.red {
    color: rgb(167, 8, 8);
    &:hover {
      background-color: rgb(248, 223, 225);
    }
  }
`
