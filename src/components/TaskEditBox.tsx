import * as React from 'react'
import styled from 'styled-components'

interface TaskEditBoxProps {
  taskId: string
  initialText: string
  onFinishEdit: (taskId: string, newText: string) => void
}
const TaskEditBox: React.FC<TaskEditBoxProps> = (props: TaskEditBoxProps) => {
  const [text, setText] = React.useState(props.initialText)

  function handleChange(event: React.FormEvent<HTMLInputElement>) {
    setText(event.currentTarget.value)
  }
  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.keyCode === 13) {
      props.onFinishEdit(props.taskId, text)
    }
  }

  return (
    <EditBox onChange={handleChange} onKeyDown={handleKeyDown} value={text} />
  )
}

const EditBox = styled.input.attrs({
  placeholder: '新しいタスク名...',
  type: 'text'
})`
  flex-grow: 1;
  margin-right: 16px;
  font-size: 100%;
`

export default TaskEditBox
