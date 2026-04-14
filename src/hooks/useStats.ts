import { useMemo } from 'react'
import { Task } from '../types/task'
import { calculateStats } from '../utils/stats'

export const useStats = (tasks: Task[]) => {
  const stats = useMemo(() => calculateStats(tasks), [tasks])

  return stats
}