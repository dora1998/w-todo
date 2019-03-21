import * as React from 'react'

import { Task } from '../hooks/useTask'

interface ITaskListProps {
  tasks: Task[]
}
function TaskList(props: ITaskListProps) {
  const listItems = props.tasks.map(task => <li key={task.id}>{task.name}</li>)
  return <ul>{listItems}</ul>
}

export default TaskList
