import Image from "next/image"
import { type SupplyId, supplies } from "../_data"
import { envConfig } from "@/config/envConfig"

interface SupplyCardProps {
  supplyId: SupplyId
}

export const SupplyCard = ({ supplyId }: SupplyCardProps) => {
  const supply = supplies[supplyId]

  return (
    <div className="w-full max-w-4xl mx-auto bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden shadow-lg dark:shadow-gray-900/20 mt-5">
      {/* Header */}
      <div className="bg-orange-300 px-4 py-3 text-center">
        <h1 className="text-lg font-semibold text-gray-800 dark:text-white">{supply.name}</h1>
      </div>

      {/* Main content */}
      <div className="bg-gray-50 dark:bg-gray-800 px-6 py-8">
        <div className="flex flex-col items-center gap-8">
          {/* Supply illustration */}
          <div className="flex-shrink-0">
            <img
              src={envConfig().assetBaseUrl + supply.imageUrl || "/placeholder.svg"}
              alt={supply.name}
              className="w-32 h-32 object-contain"
            />
          </div>

          {/* Description */}
          <div className="flex-grow">
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{supply.description}</p>
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
            {supply.availableInShop && supply.price != null && (
              <>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
                    Price
                  </div>
                  <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">
                    <span className="ml-1 flex">
                      <Image src="/icons/gold.png" alt="coin" width={20} height={20} className="mr-1" />
                      {"x" + supply.price}
                    </span>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="col-span-1">
            {supply.fertilizerEffectTimeReduce != null && (
              <div className="grid grid-cols-2">
                <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
                  Effect Time Reduce
                </div>
                <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">
                  {supply.fertilizerEffectTimeReduce} seconds
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 