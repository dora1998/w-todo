import * as React from 'react'
import '../styles/TaskList.css'

import IconButton from './IconButton'

import { Task } from '../hooks/useTask'

interface TaskListProps {
  tasks: Task[]
  onToggleDone: (id: string, isDone: boolean) => void
  onClickRemove: (id: string) => void
}
const TaskList: React.FC<TaskListProps> = (props: TaskListProps) => {
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
  const handleClickEdit = (event: React.FormEvent<HTMLButtonElement>) => {
    const taskId = event.currentTarget.attributes.getNamedItem('data-taskid')
    if (taskId) {
      // TODO: 編集処理の実装
      props.onClickRemove(taskId.value)
    }
  }

  const listItems = props.tasks.map(task => (
    <li key={task.id}>
      <label htmlFor={`check_${task.id}`}>
        <input
          id={`check_${task.id}`}
          type="checkbox"
          checked={task.isDone}
          onChange={handleCheckboxChange}
          data-taskid={task.id}
        />
        <span className={task.isDone ? 'done' : ''}>{task.name}</span>
      </label>

      <IconButton
        elementParams={{ className: 'button flat', 'data-taskid': task.id }}
        onClick={handleClickEdit}
        icon="edit"
      />
      <IconButton
        elementParams={{ className: 'button flat red', 'data-taskid': task.id }}
        onClick={handleClickRemove}
        icon="trash-alt"
      />
    </li>
  ))
  return <ul>{listItems}</ul>
}

export default TaskList
