import { type FruitId, fruits } from "../_data"

interface FruitCardProps {
  fruitId: FruitId
}

export const FruitCard = ({ fruitId }: FruitCardProps) => {
  const fruit = fruits[fruitId]

  return (
    <div className="w-80 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden shadow-lg dark:shadow-gray-900/20 mt-5">
      {/* Header */}
      <div className="bg-purple-300 px-4 py-3 text-center">
        <h1 className="text-lg font-semibold text-gray-800 dark:text-white">{fruit.displayId}</h1>
      </div>

      {/* Information section */}
      <div className="bg-blue-100 dark:bg-gray-600 px-4 py-2">
        <h2 className="text-center font-semibold text-gray-700 dark:text-gray-200">Information</h2>
      </div>

      {/* Information table */}
      <div className="bg-white dark:bg-gray-800">
        <div className="grid grid-cols-2 border-b border-gray-200 dark:border-gray-600">
          <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
            Price
          </div>
          <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">
            {fruit.price} coins
          </div>
        </div>
        {fruit.sellPrice && (
          <div className="grid grid-cols-2 border-b border-gray-200 dark:border-gray-600">
            <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
              Sell Price
            </div>
            <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">
              {fruit.sellPrice} coins
            </div>
          </div>
        )}
        <div className="grid grid-cols-2 border-b border-gray-200 dark:border-gray-600">
          <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
            Available in Shop
          </div>
          <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">
            {fruit.availableInShop ? "Yes" : "No"}
          </div>
        </div>
        <div className="grid grid-cols-2 border-b border-gray-200 dark:border-gray-600">
          <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
            Sellable
          </div>
          <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">
            {fruit.sellable ? "Yes" : "No"}
          </div>
        </div>
        {fruit.isNFT && (
          <div className="grid grid-cols-2 border-b border-gray-200 dark:border-gray-600">
            <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
              NFT
            </div>
            <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">
              Yes
            </div>
          </div>
        )}
        {fruit.unlockLevel && (
          <div className="grid grid-cols-2 border-b border-gray-200 dark:border-gray-600">
            <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
              Unlock Level
            </div>
            <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">
              Level {fruit.unlockLevel}
            </div>
          </div>
        )}
        <div className="grid grid-cols-2 border-b border-gray-200 dark:border-gray-600">
          <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
            Young Growth Duration
          </div>
          <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">
            {fruit.youngGrowthStageDuration / 3600} hours
          </div>
        </div>
        <div className="grid grid-cols-2 border-b border-gray-200 dark:border-gray-600">
          <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
            Mature Growth Duration
          </div>
          <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">
            {fruit.matureGrowthStageDuration / 3600} hours
          </div>
        </div>
        <div className="grid grid-cols-2 border-b border-gray-200 dark:border-gray-600">
          <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
            Fertilizer Time
          </div>
          <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">
            {fruit.fertilizerTime / 3600} hours
          </div>
        </div>
        <div className="grid grid-cols-2 border-b border-gray-200 dark:border-gray-600">
          <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
            Basic Harvest Experience
          </div>
          <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">
            {fruit.basicHarvestExperiences}
          </div>
        </div>
        <div className="grid grid-cols-2 border-b border-gray-200 dark:border-gray-600">
          <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
            Quality Harvest Experience
          </div>
          <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">
            {fruit.qualityHarvestExperiences}
          </div>
        </div>
        <div className="grid grid-cols-2 border-b border-gray-200 dark:border-gray-600">
          <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
            Harvest Quantity
          </div>
          <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">
            {fruit.harvestQuantity}
          </div>
        </div>
      </div>
    </div>
  )
} 