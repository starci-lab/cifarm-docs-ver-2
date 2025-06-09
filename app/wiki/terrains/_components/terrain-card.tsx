import Image from "next/image"
import { type TerrainId, terrains } from "../_data"
import { envConfig } from "@/config/envConfig"

interface TerrainCardProps {
  terrainId: TerrainId
}

export const TerrainCard = ({ terrainId }: TerrainCardProps) => {
  const terrain = terrains[terrainId]

  return (
    <div className="w-full max-w-4xl mx-auto bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden shadow-lg dark:shadow-gray-900/20 mt-5">
      {/* Header */}
      <div className="bg-orange-300 px-4 py-3 text-center">
        <h1 className="text-lg font-semibold text-gray-800 dark:text-white">{terrain.name}</h1>
      </div>

      {/* Main content */}
      <div className="bg-gray-50 dark:bg-gray-800 px-6 py-8">
        <div className="flex flex-col items-center gap-8">
          {/* Terrain illustration */}
          <div className="flex-shrink-0">
            <img
              src={envConfig().assetBaseUrl + terrain.imageUrl || "/placeholder.svg"}
              alt={terrain.name}
              className="w-32 h-32 object-contain"
            />
          </div>

          {/* Description */}
          <div className="flex-grow">
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{terrain.description}</p>
          </div>
        </div>
      </div>

      {/* Information section */}
      <div className="bg-blue-100 dark:bg-gray-600 px-4 py-2">
        <h2 className="text-center font-semibold text-gray-700 dark:text-gray-200">Information</h2>
      </div>

      {/* Information table */}
      <div className="bg-white dark:bg-gray-800">
        {/* 2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="col-span-1">
            {terrain.availableInShop && terrain.price != null && (
              <>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
                    Price
                  </div>
                  <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">
                    <span className="ml-1 flex">
                      <Image src="/icons/gold.png" alt="coin" width={20} height={20} className="mr-1" />
                      {"x" + terrain.price}
                    </span>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="col-span-1">
            {terrain.sellable && terrain.sellPrice != null && (
              <div className="grid grid-cols-2">
                <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
                  Sell Price
                </div>
                <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">
                  <span className="ml-1 flex">
                    <Image src="/icons/gold.png" alt="coin" width={20} height={20} className="mr-1" />
                    {"x" + terrain.sellPrice}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 