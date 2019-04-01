import * as React from 'react'
import styled from 'styled-components'

import IconButton from './IconButton'
import TaskEditBox from './TaskEditBox'
import TaskName from './TaskName'

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
      setEditingId(taskId.value)
    }
  }
  const handleFinishEdit = (taskId: string, newText: string) => {
    props.onChangeTaskName(taskId, newText)

    setEditingId(null)
  }

  const getNameView = (task: Task) => {
    if (editingId === task.id) {
      return (
        <TaskEditBox
          taskId={task.id}
          initialText={task.name}
          onFinishEdit={handleFinishEdit}
        />
      )
    } else {
      return <TaskName task={task} onClickTag={props.onClickTag} />
    }
  }

  const listItems = props.tasks.map(task => {
    const nameView = getNameView(task)
    return (
      <TaskItem key={task.id}>
        <div className="nameDisplay">
          <input
            id={`check_${task.id}`}
            type="checkbox"
            checked={task.isDone}
            onChange={handleCheckboxChange}
            data-taskid={task.id}
          />
          {nameView}
        </div>

        <IconButton
          elementParams={{
            className: 'button flat',
            'data-taskid': task.id,
            disabled: editingId === task.id
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
      </TaskItem>
    )
  })
  return <TaskList>{listItems}</TaskList>
}

const TaskList = styled.ul`
  margin: 0;
  padding: 0;
`
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
