import React from 'react'

interface InformationGridProps {
    title: string
    leftTitle: string
    leftValue: string
    rightTitle: string
    rightValue: string
    leftIcon?: React.ReactNode | string
    rightIcon?: React.ReactNode | string

}

export const InformationGrid = ({ title, leftTitle, leftValue, rightTitle, rightValue, leftIcon, rightIcon }: InformationGridProps) => {
  return (
    <div>
        <div className="bg-blue-100 dark:bg-gray-600 px-4 py-2">
            <h2 className="text-center font-semibold text-gray-700 dark:text-gray-200">{title}</h2>
        </div>
        <div className="bg-white dark:bg-gray-800 px-4 py-4">
            <div className="grid grid-cols-2 gap-2">
            <div className="text-center">
                <div className="text-gray-600 dark:text-gray-400 font-bold mb-1">{leftTitle}</div>
                <div className="text-sm font-semibold text-gray-900 dark:text-white flex items-center justify-center gap-2">
                {leftValue}
                {leftIcon}
                </div>
            </div>
            <div className="text-center">
                <div className="text-gray-600 dark:text-gray-400 font-bold mb-1">{rightTitle}</div>
                <div className="text-sm font-semibold text-gray-900 dark:text-white flex items-center justify-center gap-2">
                {rightValue}
                {rightIcon}
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

 InformationGrid