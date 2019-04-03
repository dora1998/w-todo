import * as React from 'react'
import styled from 'styled-components'

import TextButton from '../components/TextButton'

interface AddTaskBoxProps {
  onClickAddButton: (text: string) => void
}
export default (props: AddTaskBoxProps) => {
  const [text, setText] = React.useState('')

  function handleChange(event: React.FormEvent<HTMLInputElement>) {
    setText(event.currentTarget.value)
  }
  function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    sendAddAction()
  }
  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.keyCode === 13) {
      sendAddAction()
    }
  }

  function sendAddAction() {
    props.onClickAddButton(text)
    setText('')
  }

  return (
    <AddTaskBox>
      <Input value={text} onChange={handleChange} onKeyDown={handleKeyDown} />
      <TextButton elementParams={{ onClick: handleClick }} text="作成" />
    </AddTaskBox>
  )
}

const AddTaskBox = styled.div`
  width: 600px;
  max-width: 100%;
  margin: 0 auto 16px;
  display: flex;
`
const Input = styled.input.attrs({
  placeholder: 'タスクを入力...',
  type: 'text'
})`
  flex-grow: 1;
  border: 2px solid #ccc;
  font-size: 1.1em;
  padding: 4px;
  margin-right: 8px;
`
