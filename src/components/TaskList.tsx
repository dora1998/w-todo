import * as React from 'react'
import '../styles/TaskList.css'

import { Task } from '../hooks/useTask'

interface TaskListProps {
  tasks: Task[]
  onToggleDone: (id: string, isDone: boolean) => void
}
const TaskList: React.FunctionComponent<TaskListProps> = (
  props: TaskListProps
) => {
  const handleCheckboxChange = (event: React.FormEvent<HTMLInputElement>) => {
    props.onToggleDone(event.currentTarget.name, event.currentTarget.checked)
  }

  const listItems = props.tasks.map(task => (
    <li key={task.id}>
      <input
        name={task.id}
        type="checkbox"
        checked={task.isDone}
        onChange={handleCheckboxChange}
      />
      <span>{task.name}</span>
    </li>
  ))
  return <ul>{listItems}</ul>
}

export default TaskList
