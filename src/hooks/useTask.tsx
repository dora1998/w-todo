import { useCallback, useState } from 'react'

export interface Task {
  id: string
  name: string
  isDone: boolean
}

interface Functions {
  push: (item: Task) => void
}
export function useTasks(initialData: Task[]): [Task[], Functions] {
  const [tasks, setTasks] = useState<Task[]>(initialData)

  const push = useCallback((task: Task) => {
    setTasks(oldTasks => [...oldTasks, task])
  }, [])

  return [tasks, { push }]
}
