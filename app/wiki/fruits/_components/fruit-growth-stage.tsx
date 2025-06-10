import { cn } from "@/lib/utils"
import { type FruitId, fruits } from "../_data"
import { envConfig } from "@/config/envConfig"

interface FruitGrowthStageProps {
  fruitId: FruitId
}

export const FruitGrowthStage = ({ fruitId }: FruitGrowthStageProps) => {
  const fruit = fruits[fruitId]
  const { growthStages } = fruit

  return (
    <div className="mt-8">
      {/* Mobile View */}
      <div className="block md:hidden">
        {Object.entries(growthStages).map(([stage, data]) => (
          <div key={stage} className="mb-4 p-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                {data.title}
              </h3>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {data.description}
              </span>
            </div>
            <div className="w-full h-32 flex items-center justify-center">
              <img
                src={envConfig().assetBaseUrl + data.imageUrl}
                alt={`${data.title} stage`}
                className={cn(
                  "w-fit h-fit max-h-28 object-contain mx-auto",
                  data.className
                )}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Desktop View */}
      <div className="hidden md:block">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg">
            <thead>
              <tr className="bg-blue-100 dark:bg-gray-700">
                {Object.entries(growthStages).map(([stage, data]) => (
                  <th key={stage} className="px-4 py-2 text-center text-sm font-semibold text-gray-700 dark:text-gray-200">
                    {data.title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-200 dark:border-gray-600">
                {Object.entries(growthStages).map(([stage, data]) => (
                  <td key={stage} className="px-4 py-3 text-center place-items-center">
                    <div className={cn(
                      "w-16 h-20 flex items-end justify-center",
                      data.containerClassName
                    )}>
                      <img
                        src={envConfig().assetBaseUrl + data.imageUrl}
                        alt={`${data.title} stage`}
                        className={cn(
                          "w-fit h-fit object-contain mx-auto",
                          data.className
                        )}
                      />
                    </div>
                  </td>
                ))}
              </tr>
              <tr className="border-t border-gray-200 dark:border-gray-600">
                {Object.entries(growthStages).map(([stage, data]) => (
                  <td key={stage} className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300 text-center">
                    {data.description}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
} 