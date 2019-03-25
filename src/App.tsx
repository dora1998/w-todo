import * as React from 'react'
import styles from 'styled-components'

import { v1 as uuidv1 } from 'uuid'
import FontAwesome from './FontAwesome'

import AddTaskBox from './components/AddTaskBox'
import FilterSwitch from './components/FilterSwitch'
import TaskList from './components/TaskList'

import Filter from './Filter'
import { Task, useTasks } from './hooks/useTask'

FontAwesome.init()

const App: React.FC = () => {
  const [tasks, updateTasks] = useTasks([])
  const [filter, setFilter] = React.useState(Filter.ALL)

  const addTask = (text: string) => {
    const task: Task = {
      id: uuidv1(),
      isDone: false,
      name: text
    }
    updateTasks.push(task)
  }
  const setDone = (id: string, isDone: boolean) =>
    updateTasks.setDone(id, isDone)
  const removeTask = (id: string) => updateTasks.remove(id)
  const changeTaskName = (id: string, newText: string) =>
    updateTasks.setName(id, newText)

  const handleFilterChange = (newValue: string) => setFilter(newValue)

  const filteredTasks = tasks.filter(task => {
    if (filter === Filter.ALL) {
      return true
    }
    return filter === Filter.COMPLETED ? task.isDone : !task.isDone
  })

  return (
    <Container>
      <Header>
        <h1>My Todo</h1>
      </Header>
      <div className="container">
        <AddTaskBox onClickAddButton={addTask} />
        <FilterSwitch selected={filter} onChange={handleFilterChange} />
        <TaskList
          onToggleDone={setDone}
          onClickRemove={removeTask}
          onChangeTaskName={changeTaskName}
          tasks={filteredTasks}
        />
      </div>
    </Container>
  )
}

const Container = styles.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 8px;
  box-sizing: border-box;
`
const Header = styles.header`
  text-align: center;
  display: block;
`

export default App
