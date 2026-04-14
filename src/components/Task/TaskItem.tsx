import React from 'react'
import { Button, Popconfirm } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import { Task } from '../../types/task'

interface TaskItemProps {
  task: Task
  onToggleStatus: (id: string) => void
  onDelete: (id: string) => void
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggleStatus, onDelete }) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case '工作': return 'bg-blue-100 text-blue-800'
      case '学习': return 'bg-green-100 text-green-800'
      case '生活': return 'bg-yellow-100 text-yellow-800'
      case '项目': return 'bg-purple-100 text-purple-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case '高': return 'bg-yellow-100 text-yellow-800'
      case '中': return 'bg-blue-100 text-blue-800'
      case '低': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className={`flex items-center justify-between p-4 mb-2 border ${task.status === 'completed' ? 'bg-gray-50 border-gray-300' : 'bg-white border-gray-300'}`}>
      <div className="flex items-center space-x-4">
        <input
          type="checkbox"
          checked={task.status === 'completed'}
          onChange={() => onToggleStatus(task.id)}
          className="w-5 h-5 text-green-600 rounded"
        />
        <div className="flex-1">
          <h3 className={`text-lg font-medium ${task.status === 'completed' ? 'line-through text-gray-500' : 'text-gray-900'}`}>
            {task.title}
          </h3>
          {task.description && (
            <p className="text-sm text-gray-500 mt-1">{task.description}</p>
          )}
          <div className="flex space-x-2 mt-2">
            <span className={`px-2 py-1 text-xs rounded ${getCategoryColor(task.category)}`}>
              {task.category}
            </span>
            <span className={`px-2 py-1 text-xs rounded ${getPriorityColor(task.priority)}`}>
              {task.priority}
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="text-xs text-gray-500">
          {new Date(task.createdAt).toLocaleDateString('zh-CN')}
        </div>
        <Popconfirm
          title="确定要删除这个任务吗？"
          onConfirm={() => onDelete(task.id)}
          okText="确定"
          cancelText="取消"
        >
          <Button type="text" danger icon={<DeleteOutlined />} size="small" />
        </Popconfirm>
      </div>
    </div>
  )
}

export default TaskItem