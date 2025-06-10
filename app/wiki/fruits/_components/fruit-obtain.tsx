import Image from "next/image"
import { type FruitId, fruits } from "../_data"
import { envConfig } from "@/config/envConfig"

interface FruitObtainProps {
  fruitId: FruitId
}

export const FruitObtain = ({ fruitId }: FruitObtainProps) => {
  const fruit = fruits[fruitId]
  const { infomation, obtain } = fruit

  if (!obtain) return null

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-4">How to Obtain</h3>
      <div className="space-y-4">
        {Object.entries(obtain).map(([key, data]) => (
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
                {key === "shop" && (
                  <div className="flex items-center text-blue-600 dark:text-blue-400">
                    <Image
                      src="/icons/gold.png"
                      alt="Gold"
                      width={20}
                      height={20}
                      className="mr-1"
                    />
                    ×{infomation.price}
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