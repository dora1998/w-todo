import * as React from 'react'
import styled from 'styled-components'

import Color from 'src/shared/Color'
import Button from '../shared/Button'

interface TextButtonProps {
  text: string
  elementParams: any
  colorStyle?: Color
}
export default (props: TextButtonProps) => (
  <TextButton colorStyle={props.colorStyle}>{props.text}</TextButton>
)

const TextButton = styled(Button)<{ colorStyle?: Color }>`
  color: #fff;
  background-color: ${({ colorStyle }) => {
    switch (colorStyle) {
      case Color.RED:
        return '#cc0000'
      default:
        return '#000'
    }
  }};
  border-radius: 8px;
  padding: 4px 8px;

  &:hover {
    background-color: ${({ colorStyle }) => {
      switch (colorStyle) {
        case Color.RED:
          return '#efc1c4'
        default:
          return '#aaa'
      }
    }};
    transition: all 300ms 0s ease;
  }
`
