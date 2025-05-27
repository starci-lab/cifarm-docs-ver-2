import { type CropId, crops } from "../_data"

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
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">Stage</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">Image</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">Duration</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(growthStages).map(([stage, data]) => (
              <tr key={stage} className="border-t border-gray-200 dark:border-gray-600">
                <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">{data.title}</td>
                <td className="px-4 py-3">
                  <img
                    src={data.imageUrl}
                    alt={`${data.title} stage`}
                    className="w-16 h-16 object-contain"
                  />
                </td>
                <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">{data.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
