import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-xl font-semibold">基尔的待办清单</h1>
          <p className="text-sm text-gray-500 mt-1">Todo List 高效管理每日任务</p>
        </div>
      </header>
      <div className="container mx-auto px-4 py-8">
        {children}
      </div>
    </div>
  )
}

export default Layout