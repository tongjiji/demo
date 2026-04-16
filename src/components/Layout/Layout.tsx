import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10 min-w-[1200px]">
        <div className="w-[1200px] mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">基尔的待办清单</h1>
            </div>
            <div className="flex items-center">
              <p className="text-sm text-gray-500 whitespace-nowrap">Todo List 高效管理每日任务</p>
            </div>
          </div>
        </div>
      </header>
      <main className="w-[1200px] mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  )
}

export default Layout