import React from 'react'
import StatsCard from './StatsCard'

interface StatsSectionProps {
  totalTasks: number
  pendingTasks: number
  completedTasks: number
  completionRate: number
}

const StatsSection: React.FC<StatsSectionProps> = ({ totalTasks, pendingTasks, completedTasks, completionRate }) => {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-3">统计数据</h2>
      <div className="grid grid-cols-2 gap-2">
        <StatsCard title="总任务数" value={totalTasks} color="text-gray-900" />
        <StatsCard title="待完成" value={pendingTasks} color="text-yellow-600" />
        <StatsCard title="已完成" value={completedTasks} color="text-green-600" />
        <StatsCard title="完成率" value={completionRate} percentage={completionRate} color="text-blue-600" />
      </div>
    </div>
  )
}

export default StatsSection