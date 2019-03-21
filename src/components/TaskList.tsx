import * as React from 'react'
import '../styles/TaskList.css'

import { Task } from '../hooks/useTask'

interface TaskListProps {
  tasks: Task[]
  onToggleDone: (id: string, isDone: boolean) => void
  onClickRemove: (id: string) => void
}
const TaskList: React.FunctionComponent<TaskListProps> = (
  props: TaskListProps
) => {
  const handleCheckboxChange = (event: React.FormEvent<HTMLInputElement>) => {
    const taskId = event.currentTarget.attributes.getNamedItem('data-taskid')
    if (taskId) {
      props.onToggleDone(taskId.value, event.currentTarget.checked)
    }
  }
  const handleClickRemove = (event: React.FormEvent<HTMLButtonElement>) => {
    const taskId = event.currentTarget.attributes.getNamedItem('data-taskid')
    if (taskId) {
      props.onClickRemove(taskId.value)
    }
  }

  const listItems = props.tasks.map(task => (
    <li key={task.id}>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={handleCheckboxChange}
        data-taskid={task.id}
      />
      <span>{task.name}</span>
      <button data-taskid={task.id} onClick={handleClickRemove}>
        削除
      </button>
    </li>
  ))
  return <ul>{listItems}</ul>
}

export default TaskList
