import React from 'react'

interface StatsCardProps {
  title: string
  value: number
  percentage?: number
  color: string
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, percentage, color }) => {
  return (
    <div className="bg-white border border-gray-300 rounded p-3">
      <h3 className="text-xs font-medium text-gray-500 mb-1">{title}</h3>
      <div className="flex items-center justify-between">
        <p className={`text-xl font-bold ${color}`}>{value}</p>
        {percentage !== undefined && (
          <span className="text-xs text-gray-500">{percentage}%</span>
        )}
      </div>
    </div>
  )
}

export default StatsCard