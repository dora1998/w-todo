import * as React from 'react'
import styled from 'styled-components'

import IconButton from './IconButton'
import TaskEditBox from './TaskEditBox'
import TaskName from './TaskName'

import { Task } from '../hooks/useTask'

interface TaskListItemProps {
  task: Task
  isEditing: boolean
  onToggleDone: (task: Task, isDone: boolean) => void
  onClickRemove: (task: Task) => void
  onChangeTaskName: (task: Task, newText: string) => void
  onClickTag: (tag: string) => void
  onChangeIsEditing: (task: Task, newState: boolean) => void
}
export default (props: TaskListItemProps) => {
  const handleCheckboxChange = (event: React.FormEvent<HTMLInputElement>) => {
    props.onToggleDone(props.task, event.currentTarget.checked)
  }
  const handleClickRemove = () => {
    props.onClickRemove(props.task)
  }
  const handleClickEdit = () => {
    props.onChangeIsEditing(props.task, true)
  }
  const handleFinishEdit = (newText: string) => {
    props.onChangeTaskName(props.task, newText)
    props.onChangeIsEditing(props.task, false)
  }

  const getNameView = (task: Task) => {
    if (props.isEditing) {
      return <TaskEditBox task={task} onFinishEdit={handleFinishEdit} />
    } else {
      return <TaskName task={task} onClickTag={props.onClickTag} />
    }
  }

  const nameView = getNameView(props.task)
  return (
    <TaskItem key={props.task.id}>
      <div className="nameDisplay">
        <input
          type="checkbox"
          checked={props.task.isDone}
          onChange={handleCheckboxChange}
        />
        {nameView}
      </div>

      <IconButton
        elementParams={{
          className: 'button flat',
          disabled: props.isEditing
        }}
        onClick={handleClickEdit}
        icon="edit"
      />
      <IconButton
        elementParams={{
          className: 'button flat red'
        }}
        onClick={handleClickRemove}
        icon="trash-alt"
      />
    </TaskItem>
  )
}

const TaskItem = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 4px 8px;
  border-bottom: 1px solid #aaa;

  &:last-child {
    border-bottom: none;
  }
  .nameDisplay {
    flex-grow: 1;
    display: flex;
    align-items: center;
  }

  .button.flat {
    margin-right: 8px;
  }
  .button.flat:last-child {
    margin-right: 0px;
  }
`
