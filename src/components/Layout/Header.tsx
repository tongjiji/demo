import React from 'react'

interface HeaderProps {
  children: React.ReactNode
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <div className="bg-white border border-gray-300 rounded p-6 mb-6">
      {children}
    </div>
  )
}

export default Header