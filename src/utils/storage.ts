import { Task } from '../types/task'

const STORAGE_KEY = 'todo_list_tasks'

export const saveTasks = (tasks: Task[]): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
}

export const loadTasks = (): Task[] => {
  const storedTasks = localStorage.getItem(STORAGE_KEY)
  if (storedTasks) {
    try {
      return JSON.parse(storedTasks)
    } catch (error) {
      console.error('Failed to parse tasks from localStorage', error)
    }
  }
  return []
}

export const clearTasks = (): void => {
  localStorage.removeItem(STORAGE_KEY)
}