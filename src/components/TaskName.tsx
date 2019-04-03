import * as React from 'react'
import styled, { css } from 'styled-components'

import { Task } from 'src/hooks/useTask'
import TextWithHashTags from './TextWithHashtags'

interface TaskNameProps {
  task: Task
  onClickTag: (tag: string) => void
}
export default (props: TaskNameProps) => {
  return (
    <TaskName done={props.task.isDone}>
      <TextWithHashTags text={props.task.name} onClickTag={props.onClickTag} />
    </TaskName>
  )
}

const TaskName = styled.span<{ done: boolean }>`
  user-select: none;

  ${({ done }) =>
    done
      ? css`
          text-decoration: line-through;
          color: #aaa;
        `
      : null}
`
