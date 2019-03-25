import * as React from 'react'
import styled from 'styled-components'

import FontAwesome from './FontAwesome'

import AddTaskBox from './components/AddTaskBox'
import FilterSwitch from './components/FilterSwitch'
import TagFilterBox from './components/TagFilterBox'
import TaskList from './components/TaskList'

import Filter from './Filter'
import { useTasks } from './hooks/useTask'

import TaskTag from './utils/TaskTag'

FontAwesome.init()

const App: React.FC = () => {
  const [tasks, updateTasks] = useTasks([])
  const [filter, setFilter] = React.useState(Filter.ALL)
  const [tagFilter, setTagFilter] = React.useState('')

  const addTask = (text: string) => updateTasks.add(text)
  const setDone = (id: string, isDone: boolean) =>
    updateTasks.setDone(id, isDone)
  const removeTask = (id: string) => updateTasks.remove(id)
  const changeTaskName = (id: string, newText: string) =>
    updateTasks.setName(id, newText)

  const handleFilterChange = (newValue: string) => setFilter(newValue)
  const handleClickTag = (tag: string) => setTagFilter(tag)

  let filteredTasks = tasks.filter(task => {
    if (filter === Filter.ALL) {
      return true
    }
    return filter === Filter.COMPLETED ? task.isDone : !task.isDone
  })
  if (tagFilter.length > 0) {
    filteredTasks = TaskTag.findTasksfromTag(filteredTasks, tagFilter)
  }

  return (
    <Container>
      <Header>
        <h1>My Todo</h1>
      </Header>
      <div className="container">
        <AddTaskBox onClickAddButton={addTask} />
        <ControlBox>
          <FilterSwitch selected={filter} onChange={handleFilterChange} />
          <TagFilterBox value={tagFilter} onChangeTagFilter={setTagFilter} />
        </ControlBox>
        <TaskList
          onToggleDone={setDone}
          onClickRemove={removeTask}
          onClickTag={handleClickTag}
          onChangeTaskName={changeTaskName}
          tasks={filteredTasks}
        />
      </div>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 8px;
  box-sizing: border-box;
`
const Header = styled.header`
  text-align: center;
  display: block;
`

const ControlBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export default App
