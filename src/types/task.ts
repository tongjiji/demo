export interface Task {
  id: string
  title: string
  description?: string
  category: '工作' | '学习' | '生活' | '项目'
  priority: '高' | '中' | '低'
  status: 'completed' | 'pending'
  createdAt: string
  deadline?: string
}

export type Category = Task['category']
export type Priority = Task['priority']
export type Status = Task['status']