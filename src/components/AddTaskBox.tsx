import * as React from 'react'

interface IAddTaskBoxProps {
  onClickAddButton: (text: string) => void
}
function AddTaskBox(props: IAddTaskBoxProps) {
  const [text, setText] = React.useState('')

  function handlerChange(event: React.FormEvent<HTMLInputElement>) {
    setText(event.currentTarget.value)
  }
  function handlerClick(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    props.onClickAddButton(text)
  }

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handlerChange}
        placeholder="タスクを入力..."
      />
      <button onClick={handlerClick}>作成</button>
    </div>
  )
}

export default AddTaskBox
