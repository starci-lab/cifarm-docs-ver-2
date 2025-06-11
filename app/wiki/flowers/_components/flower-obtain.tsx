import Image from "next/image"
import { type FlowerId, flowers } from "../_data"

interface FlowerObtainProps {
  flowerId: FlowerId
}

export const FlowerObtain = ({ flowerId }: FlowerObtainProps) => {
  const flower = flowers[flowerId]
  const { infomation, obtain } = flower

  if (!obtain) return null

  return (
    <div className="mt-6">
      <div className="space-y-4">
        {Object.entries(obtain).map(([key, data]) => (
          <div key={key} className="bg-blue-100 dark:bg-gray-800 rounded-lg overflow-hidden">
            <div className="p-4">
              <div className="flex items-center space-x-4">
                {data.icon && (
                  <Image
                    src={data.icon}
                    alt={data.title}
                    width={32}
                    height={32}
                    className="rounded"
                  />
                )}
                <div className="flex-1">
                  <div className="font-medium">{data.title}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {data.description}
                  </div>
                </div>
                {data.price && data.priceIcon && (
                  <div className="flex items-center text-blue-600 dark:text-blue-400">
                    <Image
                      src={data.priceIcon}
                      alt="Price"
                      width={20}
                      height={20}
                      className="mr-1"
                    />
                    ×{data.price}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 