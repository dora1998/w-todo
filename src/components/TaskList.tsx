import * as React from 'react'
import '../styles/TaskList.css'

import IconButton from './IconButton'
import TaskEditBox from './TaskEditBox'

import { Task } from '../hooks/useTask'

interface TaskListProps {
  tasks: Task[]
  onToggleDone: (id: string, isDone: boolean) => void
  onClickRemove: (id: string) => void
  onChangeTaskName: (id: string, newText: string) => void
}
const TaskList: React.FC<TaskListProps> = (props: TaskListProps) => {
  const [isEditing, setEditing] = React.useState({})

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
      const newEditing = { ...isEditing }
      if (newEditing[taskId.value] === undefined) {
        newEditing[taskId.value] = true
      }
      setEditing(newEditing)
    }
  }
  const handleFinishEdit = (taskId: string, newText: string) => {
    props.onChangeTaskName(taskId, newText)

    const newEditing = { ...isEditing }
    delete newEditing[taskId]
    setEditing(newEditing)
  }

  const getNameView = (task: Task) => {
    if (isEditing[task.id] !== undefined) {
      return (
        <TaskEditBox
          taskId={task.id}
          initialText={task.name}
          onFinishEdit={handleFinishEdit}
        />
      )
    } else {
      return <span className={task.isDone ? 'done' : ''}>{task.name}</span>
    }
  }

  const listItems = props.tasks.map(task => {
    const nameView = getNameView(task)
    return (
      <li key={task.id}>
        <label htmlFor={`check_${task.id}`}>
          <input
            id={`check_${task.id}`}
            type="checkbox"
            checked={task.isDone}
            onChange={handleCheckboxChange}
            data-taskid={task.id}
          />
          {nameView}
        </label>

        <IconButton
          elementParams={{
            className: 'button flat',
            'data-taskid': task.id,
            disabled: isEditing[task.id] !== undefined
          }}
          onClick={handleClickEdit}
          icon="edit"
        />
        <IconButton
          elementParams={{
            className: 'button flat red',
            'data-taskid': task.id
          }}
          onClick={handleClickRemove}
          icon="trash-alt"
        />
      </li>
    )
  })
  return <ul>{listItems}</ul>
}

export default TaskList
