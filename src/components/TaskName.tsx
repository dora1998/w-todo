import * as React from 'react'
import styled from 'styled-components'

import { Task } from 'src/hooks/useTask'
import TextWithHashTags from './TextWithHashtags'

interface TaskNameProps {
  task: Task
  onClickTag: (tag: string) => void
}
export default (props: TaskNameProps) => {
  return (
    <TaskName className={props.task.isDone ? 'done' : ''}>
      <TextWithHashTags text={props.task.name} onClickTag={props.onClickTag} />
    </TaskName>
  )
}

const TaskName = styled.span`
  user-select: none;

  &.done {
    text-decoration: line-through;
    color: #aaa;
  }
`
