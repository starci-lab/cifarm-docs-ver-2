import Image from "next/image"
import { type FlowerId, flowers } from "../_data"

interface FlowerUsageProps {
  flowerId: FlowerId
}

export const FlowerUsage = ({ flowerId }: FlowerUsageProps) => {
  const flower = flowers[flowerId]
  const { usage } = flower

  if (!usage) return null

  return (
    <div className="mt-6">
      <div className="space-y-4">
        {Object.entries(usage).map(([key, data]) => (
          <div key={key} className="bg-blue-100 dark:bg-gray-800 rounded-lg overflow-hidden">
            <div className="p-4">
              <div className="flex items-center space-x-4">
                <Image
                  src={data.imageUrl}
                  alt={data.title}
                  width={32}
                  height={32}
                  className="rounded"
                />
                <div className="flex-1">
                  <div className="font-medium">{data.title}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {data.description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 