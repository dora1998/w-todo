import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'

interface IconButtonProps {
  icon: IconProp
  elementParams: any
  onClick: (event: React.FormEvent<HTMLButtonElement>) => void
}
export default (props: IconButtonProps) => {
  return (
    <button {...props.elementParams} onClick={props.onClick}>
      <FontAwesomeIcon icon={props.icon} className="icon" fixedWidth={true} />
    </button>
  )
}
