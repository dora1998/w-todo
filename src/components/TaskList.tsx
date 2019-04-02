import * as React from 'react'
import styled from 'styled-components'

import TaskListItem from './TaskListItem'

import { Task } from '../hooks/useTask'

interface TaskListProps {
  tasks: Task[]
  onToggleDone: (id: string, isDone: boolean) => void
  onClickRemove: (id: string) => void
  onChangeTaskName: (id: string, newText: string) => void
  onClickTag: (tag: string) => void
}
export default (props: TaskListProps) => {
  const [editingId, setEditingId] = React.useState<null | string>(null)

  const handleToggleDone = (task: Task, isDone: boolean) =>
    props.onToggleDone(task.id, isDone)
  const handleRemove = (task: Task) => props.onClickRemove(task.id)
  const handleChangeTaskName = (task: Task, newText: string) =>
    props.onChangeTaskName(task.id, newText)
  const handleClickTag = (tag: string) => props.onClickTag(tag)

  const handleChangeIsEditing = (task: Task, newState: boolean) => {
    if (newState) {
      setEditingId(task.id)
    } else {
      setEditingId(null)
    }
  }

  const listItems = props.tasks.map(task => {
    return (
      <TaskListItem
        key={task.id}
        task={task}
        isEditing={editingId === task.id}
        onToggleDone={handleToggleDone}
        onChangeTaskName={handleChangeTaskName}
        onChangeIsEditing={handleChangeIsEditing}
        onClickRemove={handleRemove}
        onClickTag={handleClickTag}
      />
    )
  })
  return <TaskList>{listItems}</TaskList>
}

const TaskList = styled.ul`
  margin: 0;
  padding: 0;
`
