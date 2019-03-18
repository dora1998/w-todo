import * as React from 'react'

interface ITaskListProps {
  tasks: string[]
}
function TaskList(props: ITaskListProps) {
  const listItems = props.tasks.map(task => <li key={task}>{task}</li>)
  return <ul>{listItems}</ul>
}

export default TaskList
