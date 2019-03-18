import * as React from 'react'
import './App.css'

import AddTaskBox from './components/AddTaskBox'
import TaskList from './components/TaskList'

interface IAppState {
  tasks: string[]
}
class App extends React.Component<{}, IAppState> {
  constructor(props: {}) {
    super(props)
    this.state = { tasks: [] }

    this.addTask = this.addTask.bind(this)
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>My Todo</h1>
        </header>
        <div className="container">
          <AddTaskBox onClickAddButton={this.addTask} />
          <TaskList tasks={this.state.tasks} />
        </div>
      </div>
    )
  }

  private addTask(text: string) {
    const newTasks = this.state.tasks.slice()
    newTasks.push(text)
    this.setState({ tasks: newTasks })
  }
}

export default App
