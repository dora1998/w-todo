import * as React from 'react'

import { Task } from '../hooks/useTask'

interface TaskListProps {
  tasks: Task[]
}
const TaskList: React.FunctionComponent<TaskListProps> = (
  props: TaskListProps
) => {
  const listItems = props.tasks.map(task => <li key={task.id}>{task.name}</li>)
  return <ul>{listItems}</ul>
}

export default TaskList
