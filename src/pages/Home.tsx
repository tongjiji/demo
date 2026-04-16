import React, { useState } from 'react'
import Layout from '../components/Layout/Layout'
import TaskForm from '../components/Task/TaskForm'
import TaskList from '../components/Task/TaskList'
import StatsSection from '../components/Stats/StatsSection'
import FilterButtons from '../components/Filter/FilterButtons'
import { useTasks } from '../hooks/useTasks'
import { useStats } from '../hooks/useStats'
import { getTasksByCategory } from '../utils/stats'
import { Category } from '../types/task'

import { Pagination, DatePicker } from 'antd'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

// 设置 dayjs 为中文
dayjs.locale('zh-cn')

const Home: React.FC = () => {
  const { tasks, addTask, toggleTaskStatus, deleteTask } = useTasks()
  const stats = useStats(tasks)
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all')
  const [currentPage, setCurrentPage] = useState(1)
  const [searchText, setSearchText] = useState('')
  const [searchDate, setSearchDate] = useState<dayjs.Dayjs | null>(null)
  const pageSize = 5

  const filteredTasks = tasks
    .filter(task => getTasksByCategory([task], selectedCategory).length > 0)
    .filter(task => task.title.includes(searchText))
    .filter(task => {
      if (!searchDate) return true
      const taskDate = new Date(task.createdAt).toISOString().split('T')[0]
      const searchDateStr = searchDate.format('YYYY-MM-DD')
      return taskDate === searchDateStr
    })

  const paginatedTasks = filteredTasks.slice((currentPage - 1) * pageSize, currentPage * pageSize)

  return (
    <Layout>
      <div className="flex space-x-6">
        {/* 左侧边栏 */}
        <div className="w-64">
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 h-full">
            <StatsSection
              totalTasks={stats.totalTasks}
              pendingTasks={stats.pendingTasks}
              completedTasks={stats.completedTasks}
              completionRate={stats.completionRate}
            />
            <div className="mt-6">
              <FilterButtons
                selectedCategory={selectedCategory}
                onFilterChange={setSelectedCategory}
              />
            </div>
          </div>
        </div>

        {/* 主内容区 */}
        <div className="flex-1">
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">我的任务</h2>
              <TaskForm onSubmit={addTask} />
            </div>

            <div className="flex space-x-4 mb-6">
              <input
                type="text"
                placeholder="搜索任务标题..."
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value)
                  setCurrentPage(1)
                }}
                className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <DatePicker
                value={searchDate}
                onChange={(date) => {
                  setSearchDate(date)
                  setCurrentPage(1)
                }}
                placeholder="选择日期"
                className="w-40"
              />
            </div>

            <TaskList tasks={paginatedTasks} onToggleStatus={toggleTaskStatus} onDelete={deleteTask} />

            {filteredTasks.length > pageSize && (
              <div className="flex justify-center mt-6">
                <Pagination
                  current={currentPage}
                  pageSize={pageSize}
                  total={filteredTasks.length}
                  onChange={(page) => setCurrentPage(page)}
                  showSizeChanger={false}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home