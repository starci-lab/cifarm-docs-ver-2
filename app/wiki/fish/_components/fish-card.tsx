import { type FishId, fish } from "../_data"

interface FishCardProps {
  fishId: FishId
}

export const FishCard = ({ fishId }: FishCardProps) => {
  const fishData = fish[fishId]

  return (
    <div className="w-80 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden shadow-lg dark:shadow-gray-900/20 mt-5">
      {/* Header */}
      <div className="bg-purple-300 px-4 py-3 text-center">
        <h1 className="text-lg font-semibold text-gray-800 dark:text-white">{fishData.displayId}</h1>
      </div>

      {/* Information section */}
      <div className="bg-blue-100 dark:bg-gray-600 px-4 py-2">
        <h2 className="text-center font-semibold text-gray-700 dark:text-gray-200">Information</h2>
      </div>

      {/* Information table */}
      <div className="bg-white dark:bg-gray-800">
        <div className="grid grid-cols-2 border-b border-gray-200 dark:border-gray-600">
          <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
            Available in Shop
          </div>
          <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">
            {fishData.availableInShop ? "Yes" : "No"}
          </div>
        </div>
        <div className="grid grid-cols-2 border-b border-gray-200 dark:border-gray-600">
          <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
            Price
          </div>
          <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">
            {fishData.price} coins
          </div>
        </div>
      </div>
    </div>
  )
} 