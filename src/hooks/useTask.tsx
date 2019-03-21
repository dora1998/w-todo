import { useCallback, useState } from 'react'

export interface Task {
  id: string
  name: string
  isDone: boolean
}

interface Functions {
  push: (item: Task) => void
  setDone: (id: string, isDone: boolean) => void
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

  return [tasks, { push, setDone }]
}
