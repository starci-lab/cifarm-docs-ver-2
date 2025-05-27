import { type AnimalId, animals } from "../_data"

interface AnimalCardProps {
  animalId: AnimalId
}

export const AnimalCard = ({ animalId }: AnimalCardProps) => {
  const animal = animals[animalId]

  return (
    <div className="w-80 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden shadow-lg dark:shadow-gray-900/20 mt-5">
      {/* Header */}
      <div className="bg-orange-300 px-4 py-3 text-center">
        <h1 className="text-lg font-semibold text-gray-800 dark:text-white">{animal.name}</h1>
      </div>

      {/* Main content */}
      <div className="bg-gray-50 dark:bg-gray-800 px-6 py-8 text-center">
        {/* Animal illustration */}
        <div className="mb-4 flex justify-center">
          <img
            src={animal.imageUrl || "/placeholder.svg"}
            alt={animal.name}
            className="w-24 h-24 object-contain"
          />
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{animal.description}</p>
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
          <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">{animal.type}</div>
        </div>
        <div className="grid grid-cols-2 border-b border-gray-200 dark:border-gray-600">
          <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
            Price
          </div>
          <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">
            {animal.price} coins
          </div>
        </div>
        <div className="grid grid-cols-2 border-b border-gray-200 dark:border-gray-600">
          <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
            Sell Price
          </div>
          <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">
            {animal.sellPrice} coins
          </div>
        </div>
        <div className="grid grid-cols-2 border-b border-gray-200 dark:border-gray-600">
          <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
            NFT
          </div>
          <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">
            {animal.isNFT ? "Yes" : "No"}
          </div>
        </div>
        <div className="grid grid-cols-2 border-b border-gray-200 dark:border-gray-600">
          <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
            Available in Shop
          </div>
          <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">
            {animal.availableInShop ? "Yes" : "No"}
          </div>
        </div>
        <div className="grid grid-cols-2 border-b border-gray-200 dark:border-gray-600">
          <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
            Unlock Level
          </div>
          <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">
            Level {animal.unlockLevel}
          </div>
        </div>
        <div className="grid grid-cols-2 border-b border-gray-200 dark:border-gray-600">
          <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
            Sellable
          </div>
          <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">
            {animal.sellable ? "Yes" : "No"}
          </div>
        </div>
        <div className="grid grid-cols-2 border-b border-gray-200 dark:border-gray-600">
          <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
            Yield Time
          </div>
          <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">
            {animal.yieldTime / 3600} hours
          </div>
        </div>
        <div className="grid grid-cols-2 border-b border-gray-200 dark:border-gray-600">
          <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
            Offspring Price
          </div>
          <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">
            {animal.offspringPrice} coins
          </div>
        </div>
        <div className="grid grid-cols-2 border-b border-gray-200 dark:border-gray-600">
          <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
            Growth Time
          </div>
          <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">
            {animal.growthTime / (60 * 60 * 24)} days
          </div>
        </div>
        <div className="grid grid-cols-2 border-b border-gray-200 dark:border-gray-600">
          <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
            Hunger Time
          </div>
          <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">
            {animal.hungerTime / 3600} hours
          </div>
        </div>
        <div className="grid grid-cols-2 border-b border-gray-200 dark:border-gray-600">
          <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
            Harvest Quantity
          </div>
          <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">
            {animal.harvestQuantity}
          </div>
        </div>
        <div className="grid grid-cols-2 border-b border-gray-200 dark:border-gray-600">
          <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
            Basic Harvest XP
          </div>
          <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">
            {animal.basicHarvestExperiences}
          </div>
        </div>
        <div className="grid grid-cols-2 border-b border-gray-200 dark:border-gray-600">
          <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
            Quality Harvest XP
          </div>
          <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">
            {animal.qualityHarvestExperiences}
          </div>
        </div>
      </div>
    </div>
  )
} 