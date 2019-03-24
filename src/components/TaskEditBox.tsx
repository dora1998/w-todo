import * as React from 'react'

import '../styles/TaskEditBox.css'

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
    <input
      type="text"
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      value={text}
      placeholder="新しいタスク名..."
      className="taskeditbox"
    />
  )
}

export default TaskEditBox
