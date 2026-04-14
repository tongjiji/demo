import React from 'react'
import { Category } from '../../types/task'

interface FilterButtonsProps {
  selectedCategory: Category | 'all'
  onFilterChange: (category: Category | 'all') => void
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ selectedCategory, onFilterChange }) => {
  const categories: Array<Category | 'all'> = ['all', '工作', '学习', '生活', '项目']

  const getCategoryColor = (category: Category | 'all') => {
    if (category === 'all') return 'bg-black hover:bg-gray-800'
    switch (category) {
      case '工作': return 'bg-black hover:bg-gray-800'
      case '学习': return 'bg-black hover:bg-gray-800'
      case '生活': return 'bg-black hover:bg-gray-800'
      case '项目': return 'bg-black hover:bg-gray-800'
      default: return 'bg-black hover:bg-gray-800'
    }
  }

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-900 mb-4">分类筛选</h2>
      <div className="space-y-1">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onFilterChange(category as any)}
            className={`w-full text-left px-4 py-2 rounded text-sm font-medium transition-colors ${selectedCategory === category ? getCategoryColor(category) + ' text-white' : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'}`}
          >
            {category === 'all' ? '全部任务' : category}
          </button>
        ))}
      </div>
    </div>
  )
}

export default FilterButtons