import * as React from 'react'
import './styles/App.css'

import { v1 as uuidv1 } from 'uuid'

import AddTaskBox from './components/AddTaskBox'
import TaskList from './components/TaskList'

import { Task, useTasks } from './hooks/useTask'

const App: React.FunctionComponent = () => {
  const [tasks, updateTasks] = useTasks([])

  const addTask = (text: string) => {
    const task: Task = {
      id: uuidv1(),
      isDone: false,
      name: text
    }
    updateTasks.push(task)
  }
  const setDone = (id: string, isDone: boolean) => {
    updateTasks.setDone(id, isDone)
  }
  const removeTask = (id: string) => updateTasks.remove(id)

  return (
    <div className="App">
      <header>
        <h1>My Todo</h1>
      </header>
      <div className="container">
        <AddTaskBox onClickAddButton={addTask} />
        <TaskList
          onToggleDone={setDone}
          onClickRemove={removeTask}
          tasks={tasks}
        />
      </div>
    </div>
  )
}

export default App
