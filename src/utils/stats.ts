import { Task } from '../types/task'

export const calculateStats = (tasks: Task[]) => {
  const totalTasks = tasks.length
  const completedTasks = tasks.filter(task => task.status === 'completed').length
  const pendingTasks = tasks.filter(task => task.status === 'pending').length
  const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0

  return {
    totalTasks,
    pendingTasks,
    completedTasks,
    completionRate,
  }
}

export const getTasksByCategory = (tasks: Task[], category: string) => {
  if (category === 'all') return tasks
  return tasks.filter(task => task.category === category)
}