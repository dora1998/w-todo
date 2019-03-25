import * as React from 'react'
import styled from 'styled-components'

interface TagFilterBoxProps {
  value: string
  onChangeTagFilter: (text: string) => void
}
export default (props: TagFilterBoxProps) => {
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    props.onChangeTagFilter(event.currentTarget.value)
  }

  return <TagFilterBox value={props.value} onChange={handleChange} />
}

const TagFilterBox = styled.input.attrs({
  placeholder: 'タグを入力...',
  type: 'text'
})`
  flex-basis: 50%;
  padding: 8px;
  font-size: 100%;
  border: 1px solid #ccc;
  border-radius: 8px;
`
