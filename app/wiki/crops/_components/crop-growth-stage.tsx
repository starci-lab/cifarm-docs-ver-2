import { cn } from "@/lib/utils"
import { type CropId, crops } from "../_data"
import { envConfig } from "@/config/envConfig"

interface CropGrowthStageProps {
  cropId: CropId
}

export const CropGrowthStage = ({ cropId }: CropGrowthStageProps) => {
  const crop = crops[cropId]
  const { growthStages } = crop

  return (
    <div className="mt-8">
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
                      className={
                        cn("w-fit h-fit object-contain mx-auto",
                          data.className
                        )
                      }
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
  )
}
