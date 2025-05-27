import React from 'react'

// Purple gradient white text badge
export const Badge = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-purple-300 px-2 py-[1px] rounded-sm">
        <h2 className="text-center font-semibold text-white dark:text-gray-200">{children}</h2>
    </div>
  )
}
