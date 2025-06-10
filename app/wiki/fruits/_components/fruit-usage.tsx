import { cn } from "@/lib/utils"
import { type FruitId, fruits } from "../_data"
import { envConfig } from "@/config/envConfig"

interface FruitUsageProps {
  fruitId: FruitId
}

export const FruitUsage = ({ fruitId }: FruitUsageProps) => {
  const fruit = fruits[fruitId]
  const { usage } = fruit

  if (!usage) return null

  return (
    <div className="mt-8">
      {/* Mobile View */}
      <div className="block md:hidden">
        {Object.entries(usage).map(([key, data]) => (
          <div key={key} className="mb-4 p-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <img
                src={envConfig().assetBaseUrl + data.imageUrl}
                alt={data.title}
                className="w-8 h-8 object-contain"
              />
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                {data.title}
              </h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {data.description}
            </p>
          </div>
        ))}
      </div>

      {/* Desktop View */}
      <div className="hidden md:block">
        <div className="grid grid-cols-1 gap-4">
          {Object.entries(usage).map(([key, data]) => (
            <div key={key} className="p-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg">
              
              <img
                  src={data.imageUrl}
                  alt={data.title}
                />
            <div className="flex gap-2 mb-2 flex-col mt-4">
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                {data.title}
                </h3>
                <p className=" text-gray-600 dark:text-gray-400">
                {data.description}
                </p>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 