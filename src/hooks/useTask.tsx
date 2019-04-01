import { useCallback, useState } from 'react'

import { v1 as uuidv1 } from 'uuid'

import TaskTag from '../utils/TaskTag'

export interface Task {
  id: string
  name: string
  isDone: boolean
  tags: string[]
}

interface Functions {
  add: (name: string) => void
  setDone: (id: string, isDone: boolean) => void
  setName: (id: string, text: string) => void
  remove: (id: string) => void
}
export function useTasks(initialData: Task[]): [Task[], Functions] {
  const [tasks, setTasks] = useState<Task[]>(initialData)

  const addTask = useCallback((name: string) => {
    setTasks(oldTasks => {
      const tags = TaskTag.getTagsFromTask(name)
      const task: Task = {
        id: uuidv1(),
        isDone: false,
        name,
        tags
      }
      return [...oldTasks, task]
    })
  }, [])

  const setDone = useCallback((id: string, isDone: boolean) => {
    setTasks(oldTasks => {
      const newTasks = [...oldTasks]
      const taskIdx = newTasks.findIndex(task => task.id === id)
      if (taskIdx === -1) {
        return oldTasks
      }

      const taskObj = { ...newTasks[taskIdx], isDone }
      newTasks[taskIdx] = taskObj
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

      const taskObj = {
        ...newTasks[taskIdx],
        name: text,
        tags: TaskTag.getTagsFromTask(text)
      }
      newTasks[taskIdx] = taskObj
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

  return [tasks, { add: addTask, setDone, setName, remove: removeTask }]
}
