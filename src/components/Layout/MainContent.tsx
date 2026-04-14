import React from 'react'

interface MainContentProps {
  children: React.ReactNode
}

const MainContent: React.FC<MainContentProps> = ({ children }) => {
  return (
    <div className="flex-1 bg-white border border-gray-300 rounded p-6">
      {children}
    </div>
  )
}

export default MainContent