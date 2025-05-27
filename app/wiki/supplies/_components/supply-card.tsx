import { type SupplyId, supplies } from "../_data"

interface SupplyCardProps {
  supplyId: SupplyId
}

export const SupplyCard = ({ supplyId }: SupplyCardProps) => {
  const supply = supplies[supplyId]

  return (
    <div className="w-80 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden shadow-lg dark:shadow-gray-900/20 mt-5">
      {/* Header */}
      <div className="bg-orange-300 px-4 py-3 text-center">
        <h1 className="text-lg font-semibold text-gray-800 dark:text-white">{supply.name}</h1>
      </div>

      {/* Main content */}
      <div className="bg-gray-50 dark:bg-gray-800 px-6 py-8 text-center">
        {/* Supply illustration */}
        <div className="mb-4 flex justify-center">
          <img
            src={supply.imageUrl || "/placeholder.svg"}
            alt={supply.name}
            className="w-24 h-24 object-contain"
          />
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{supply.description}</p>
      </div>

      {/* Information section */}
      <div className="bg-blue-100 dark:bg-gray-600 px-4 py-2">
        <h2 className="text-center font-semibold text-gray-700 dark:text-gray-200">Information</h2>
      </div>

      {/* Information table */}
      <div className="bg-white dark:bg-gray-800">
        <div className="grid grid-cols-2 border-b border-gray-200 dark:border-gray-600">
          <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
            Type
          </div>
          <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">{supply.type}</div>
        </div>
        <div className="grid grid-cols-2 border-b border-gray-200 dark:border-gray-600">
          <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
            Price
          </div>
          <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">
            {supply.price} coins
          </div>
        </div>
        <div className="grid grid-cols-2 border-b border-gray-200 dark:border-gray-600">
          <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
            Available in Shop
          </div>
          <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">
            {supply.availableInShop ? "Yes" : "No"}
          </div>
        </div>
        {supply.fertilizerEffectTimeReduce && (
          <div className="grid grid-cols-2 border-b border-gray-200 dark:border-gray-600">
            <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
              Growth Time Reduction
            </div>
            <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">
              {supply.fertilizerEffectTimeReduce / 60} minutes
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 