import { type BuildingId, buildings } from "../_data"

interface BuildingCardProps {
  buildingId: BuildingId
}

export const BuildingCard = ({ buildingId }: BuildingCardProps) => {
  const building = buildings[buildingId]

  return (
    <div className="w-80 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden shadow-lg dark:shadow-gray-900/20 mt-5">
      {/* Header */}
      <div className="bg-orange-300 px-4 py-3 text-center">
        <h1 className="text-lg font-semibold text-gray-800 dark:text-white">{building.name}</h1>
      </div>

      {/* Main content */}
      <div className="bg-gray-50 dark:bg-gray-800 px-6 py-8 text-center">
        {/* Building illustration */}
        <div className="mb-4 flex justify-center">
          <img
            src={building.imageUrl || "/placeholder.svg"}
            alt={building.name}
            className="w-24 h-24 object-contain"
          />
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{building.description}</p>
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
          <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">{building.kind}</div>
        </div>
        <div className="grid grid-cols-2 border-b border-gray-200 dark:border-gray-600">
          <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
            Price
          </div>
          <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">
            {building.price} coins
          </div>
        </div>
        {building.sellPrice && (
          <div className="grid grid-cols-2 border-b border-gray-200 dark:border-gray-600">
            <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
              Sell Price
            </div>
            <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">
              {building.sellPrice} coins
            </div>
          </div>
        )}
        <div className="grid grid-cols-2 border-b border-gray-200 dark:border-gray-600">
          <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
            Available in Shop
          </div>
          <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">
            {building.availableInShop ? "Yes" : "No"}
          </div>
        </div>
        <div className="grid grid-cols-2 border-b border-gray-200 dark:border-gray-600">
          <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
            Upgradeable
          </div>
          <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">
            {building.upgradeable ? "Yes" : "No"}
          </div>
        </div>
        <div className="grid grid-cols-2 border-b border-gray-200 dark:border-gray-600">
          <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
            Max Upgrade
          </div>
          <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">
            Level {building.maxUpgrade}
          </div>
        </div>
        <div className="grid grid-cols-2 border-b border-gray-200 dark:border-gray-600">
          <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
            Unlock Level
          </div>
          <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">
            Level {building.unlockLevel}
          </div>
        </div>
        <div className="grid grid-cols-2 border-b border-gray-200 dark:border-gray-600">
          <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
            Max Ownership
          </div>
          <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">
            {building.maxOwnership}
          </div>
        </div>
        {building.animalContainedType && (
          <div className="grid grid-cols-2 border-b border-gray-200 dark:border-gray-600">
            <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
              Animal Type
            </div>
            <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">
              {building.animalContainedType}
            </div>
          </div>
        )}
        {building.beeHouseYieldTime && (
          <>
            <div className="grid grid-cols-2 border-b border-gray-200 dark:border-gray-600">
              <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
                Yield Time
              </div>
              <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">
                {building.beeHouseYieldTime / 3600} hours
              </div>
            </div>
            <div className="grid grid-cols-2 border-b border-gray-200 dark:border-gray-600">
              <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
                Basic Harvest XP
              </div>
              <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">
                {building.beeHouseBasicHarvestExperiences}
              </div>
            </div>
            <div className="grid grid-cols-2 border-b border-gray-200 dark:border-gray-600">
              <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
                Quality Harvest XP
              </div>
              <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">
                {building.beeHouseQualityHarvestExperiences}
              </div>
            </div>
            <div className="grid grid-cols-2 border-b border-gray-200 dark:border-gray-600">
              <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
                Base Honey Yield
              </div>
              <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">
                {building.baseHoneyYieldCoefficient}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Upgrades section */}
      {building.upgrades && building.upgrades.length > 0 && (
        <>
          <div className="bg-blue-100 dark:bg-gray-600 px-4 py-2 mt-4">
            <h2 className="text-center font-semibold text-gray-700 dark:text-gray-200">Upgrades</h2>
          </div>
          <div className="bg-white dark:bg-gray-800">
            {building.upgrades.map((upgrade, index) => (
              <div key={index} className="border-b border-gray-200 dark:border-gray-600 last:border-b-0">
                <div className="px-4 py-3">
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Level {upgrade.upgradeLevel}
                  </div>
                  <div className="mt-2 space-y-1">
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Capacity: {upgrade.capacity}
                    </div>
                    {upgrade.upgradePrice && (
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Upgrade Price: {upgrade.upgradePrice} coins
                      </div>
                    )}
                    {upgrade.honeyMultiplier && (
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Honey Multiplier: {upgrade.honeyMultiplier}x
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
} 