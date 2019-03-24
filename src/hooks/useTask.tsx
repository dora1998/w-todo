import { useCallback, useState } from 'react'

export interface Task {
  id: string
  name: string
  isDone: boolean
}

interface Functions {
  push: (item: Task) => void
  setDone: (id: string, isDone: boolean) => void
  setName: (id: string, text: string) => void
  remove: (id: string) => void
}
export function useTasks(initialData: Task[]): [Task[], Functions] {
  const [tasks, setTasks] = useState<Task[]>(initialData)

  const push = useCallback((task: Task) => {
    setTasks(oldTasks => [...oldTasks, task])
  }, [])

  const setDone = useCallback((id: string, isDone: boolean) => {
    setTasks(oldTasks => {
      const newTasks = [...oldTasks]
      const taskIdx = newTasks.findIndex(task => task.id === id)
      if (taskIdx === -1) {
        return oldTasks
      }

      newTasks[taskIdx].isDone = isDone
      return newTasks
    })
  }, [])

  const setName = useCallback((id: string, text: string) => {
    setTasks(oldTasks => {
      const newTasks = [...oldTasks]
      const taskIdx = newTasks.findIndex(task => task.id === id)
      if (taskIdx === -1) {
        return oldTasks
      }

      newTasks[taskIdx].name = text
      return newTasks
    })
  }, [])

  const removeTask = useCallback((id: string) => {
    setTasks(oldTasks => {
      const newTasks = [...oldTasks]
      const taskIdx = newTasks.findIndex(task => task.id === id)
      if (taskIdx === -1) {
        return oldTasks
      }

      newTasks.splice(taskIdx, 1)
      return newTasks
    })
  }, [])

  return [tasks, { push, setDone, setName, remove: removeTask }]
}
