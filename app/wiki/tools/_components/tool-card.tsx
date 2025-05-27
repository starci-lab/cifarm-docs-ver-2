import Image from "next/image"
import { type ToolId, tools } from "../_data"

interface ToolCardProps {
  toolId: ToolId
}

export const ToolCard = ({ toolId }: ToolCardProps) => {
  const tool = tools[toolId]

  return (
    <div className="w-80 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden shadow-lg dark:shadow-gray-900/20 mt-5">
      {/* Header */}
      <div className="bg-orange-300 px-4 py-3 text-center">
        <h1 className="text-lg font-semibold text-gray-800 dark:text-white">{tool.name}</h1>
      </div>

      {/* Main content */}
      <div className="bg-gray-50 dark:bg-gray-800 px-6 py-8 text-center">
        {/* Tool illustration */}
        <div className="mb-4 flex justify-center">
          <img
            src={tool.imageUrl || "/placeholder.svg"}
            alt={tool.name}
            className="w-24 h-24 object-contain"
          />
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{tool.description}</p>
      </div>

      {/* Information section */}
      <div className="bg-blue-100 dark:bg-gray-600 px-4 py-2">
        <h2 className="text-center font-semibold text-gray-700 dark:text-gray-200">Information</h2>
      </div>

      {/* Information table */}
      <div className="bg-white dark:bg-gray-800">
        {tool.availableInShop && (
          <>
            <div className="grid grid-cols-2 border-b border-gray-200 dark:border-gray-600">
              <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
                Price
              </div>
              <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">
                <span className="ml-1 flex">
                  <Image src="/icons/gold.png" alt="coin" width={20} height={20} className="mr-1" />
                  {"x" + tool.price}
                </span>
              </div>
            </div>
            {tool.unlockLevel && (
              <div className="grid grid-cols-2 border-b border-gray-200 dark:border-gray-600">
                <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
                  Unlock level
                </div>
                <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">Level {tool.unlockLevel}</div>
              </div>
            )}
          </>
        )}
        {tool.default && (
          <div className="grid grid-cols-2 border-b border-gray-200 dark:border-gray-600">
            <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
              Status
            </div>
            <div className="px-4 py-3 text-sm text-green-600 dark:text-green-400">Default Tool</div>
          </div>
        )}
        {tool.givenAsDefault && (
          <div className="grid grid-cols-2 border-b border-gray-200 dark:border-gray-600">
            <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
              Status
            </div>
            <div className="px-4 py-3 text-sm text-green-600 dark:text-green-400">Given at Start</div>
          </div>
        )}
      </div>
    </div>
  )
}
