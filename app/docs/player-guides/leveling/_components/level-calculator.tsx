"use client"

import { useState, useEffect } from 'react'
import { computeExperiencesQuota } from '../data'

export const LevelCalculator = () => {
    const [currentLevel, setCurrentLevel] = useState<number>(1)
    const [targetLevel, setTargetLevel] = useState<number>(2)
    const [errors, setErrors] = useState<{
        currentLevel?: string;
        targetLevel?: string;
    }>({})

    const validateInputs = () => {
        const newErrors: typeof errors = {}

        if (isNaN(currentLevel) || currentLevel < 1) {
            newErrors.currentLevel = "Current level must be at least 1"
        }

        if (isNaN(targetLevel) || targetLevel <= currentLevel) {
            newErrors.targetLevel = "Target level must be greater than current level"
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    useEffect(() => {
        validateInputs()
    }, [currentLevel, targetLevel])

    const handleCurrentLevelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value)
        if (!isNaN(value)) {
            setCurrentLevel(Math.max(1, value))
            if (targetLevel <= value) {
                setTargetLevel(value + 1)
            }
        } else {
            setCurrentLevel(1)
        }
    }

    const handleTargetLevelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value)
        if (!isNaN(value)) {
            setTargetLevel(Math.max(currentLevel + 1, value))
        } else {
            setTargetLevel(currentLevel + 1)
        }
    }

    const currentExp = computeExperiencesQuota(currentLevel)
    const targetExp = computeExperiencesQuota(targetLevel)
    const expNeeded = targetExp - currentExp

    return (
        <div className="p-4 border rounded-lg bg-white dark:bg-gray-800 shadow-sm dark:border-gray-700 mt-4">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Level Calculator</h2>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Current Level
                    </label>
                    <input
                        type="number"
                        min="1"
                        value={currentLevel}
                        onChange={handleCurrentLevelChange}
                        className={`w-full p-2 border rounded-md bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent ${
                            errors.currentLevel ? 'border-red-500 dark:border-red-500' : ''
                        }`}
                    />
                    {errors.currentLevel && (
                        <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.currentLevel}</p>
                    )}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Target Level
                    </label>
                    <input
                        type="number"
                        min={currentLevel + 1}
                        value={targetLevel}
                        onChange={handleTargetLevelChange}
                        className={`w-full p-2 border rounded-md bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent ${
                            errors.targetLevel ? 'border-red-500 dark:border-red-500' : ''
                        }`}
                    />
                    {errors.targetLevel && (
                        <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.targetLevel}</p>
                    )}
                </div>
            </div>
            <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-md">
                <p className="text-sm text-gray-600 dark:text-gray-300">Current Level Experience: {currentExp}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Target Level Experience: {targetExp}</p>
                <p className="text-sm font-medium text-gray-800 dark:text-white mt-2">
                    Experience Needed: {expNeeded}
                </p>
            </div>
        </div>
    )
} 