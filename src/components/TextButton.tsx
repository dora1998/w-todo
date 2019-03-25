import * as React from 'react'
import styled from 'styled-components'

import Button from '../shared/Button'

interface TextButtonProps {
  text: string
  elementParams: any
}
export default (props: TextButtonProps) => (
  <TextButton {...props.elementParams}>{props.text}</TextButton>
)

const TextButton = styled(Button)`
  color: #fff;
  background-color: #000;
  border-radius: 8px;
  padding: 4px 8px;

  &:hover {
    background-color: #aaa;
    transition: all 300ms 0s ease;
  }

  .red {
    background-color: #cc0000;
    &:hover {
      background-color: #efc1c4;
    }
  }
`
