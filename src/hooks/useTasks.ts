import { useState, useEffect } from 'react'
import { Task } from '../types/task'
import { saveTasks, loadTasks } from '../utils/storage'

import { mockTasks } from '../utils/mockData'

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    // 初始化时加载本地存储的数据
    const storedTasks = loadTasks()
    // 如果本地存储为空，则使用模拟数据
    return storedTasks.length > 0 ? storedTasks : mockTasks
  })

  useEffect(() => {
    // 当 tasks 变化时保存到本地存储
    saveTasks(tasks)
  }, [tasks])

  const addTask = (task: Omit<Task, 'id' | 'status' | 'createdAt'>) => {
    const newTask: Task = {
      ...task,
      id: Date.now().toString(),
      status: 'pending',
      createdAt: new Date().toISOString(),
    }
    setTasks([...tasks, newTask])
  }

  const toggleTaskStatus = (id: string) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, status: task.status === 'completed' ? 'pending' : 'completed' } : task
      )
    )
  }

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const updateTask = (id: string, updatedTask: Partial<Task>) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, ...updatedTask } : task
      )
    )
  }

  return {
    tasks,
    addTask,
    toggleTaskStatus,
    deleteTask,
    updateTask,
  }
}