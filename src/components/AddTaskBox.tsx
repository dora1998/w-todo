import * as React from 'react'

import '../styles/AddTaskBox.css'

interface AddTaskBoxProps {
  onClickAddButton: (text: string) => void
}
const AddTaskBox: React.FC<AddTaskBoxProps> = (props: AddTaskBoxProps) => {
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
    <div className="addtaskbox">
      <input
        type="text"
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="タスクを入力..."
      />
      <button className="button" onClick={handleClick}>
        作成
      </button>
    </div>
  )
}

export default AddTaskBox
