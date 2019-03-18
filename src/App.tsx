import * as React from 'react'
import './App.css'

import AddTaskBox from './components/AddTaskBox'

class App extends React.Component {
  public addTask(text: string) {
    alert(text)
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>My Todo</h1>
        </header>
        <div className="container">
          <AddTaskBox onClickAddButton={this.addTask} />
        </div>
      </div>
    )
  }
}

export default App
