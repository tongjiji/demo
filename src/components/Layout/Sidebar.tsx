import React from 'react'

interface SidebarProps {
  children: React.ReactNode
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  return (
    <div className="w-64 bg-white border border-gray-300 rounded p-6">
      {children}
    </div>
  )
}

export default Sidebar