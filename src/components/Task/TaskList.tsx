import React from 'react'
import TaskItem from './TaskItem'
import { Task } from '../../types/task'

interface TaskListProps {
  tasks: Task[]
  onToggleStatus: (id: string) => void
  onDelete: (id: string) => void
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggleStatus, onDelete }) => {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">暂无任务，添加一个新任务吧！</p>
      </div>
    )
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggleStatus={onToggleStatus} onDelete={onDelete} />
      ))}
    </div>
  )
}

export default TaskList