import * as React from 'react'
import './styles/App.css'

import { v1 as uuidv1 } from 'uuid'

import AddTaskBox from './components/AddTaskBox'
import FilterSwitch from './components/FilterSwitch'
import TaskList from './components/TaskList'

import Filter from './Filter'
import { Task, useTasks } from './hooks/useTask'

const App: React.FunctionComponent = () => {
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

  const handleFilterChange = (newValue: string) => setFilter(newValue)

  const filteredTasks = tasks.filter(task => {
    if (filter === Filter.ALL) {
      return true
    }
    return filter === Filter.COMPLETED ? task.isDone : !task.isDone
  })

  return (
    <div className="App">
      <header>
        <h1>My Todo</h1>
      </header>
      <div className="container">
        <AddTaskBox onClickAddButton={addTask} />
        <FilterSwitch selected={filter} onChange={handleFilterChange} />
        <TaskList
          onToggleDone={setDone}
          onClickRemove={removeTask}
          tasks={filteredTasks}
        />
      </div>
    </div>
  )
}

export default App
