import Image from "next/image"
import { type CropId, crops } from "../_data"
import { envConfig } from "@/config/envConfig"

interface CropObtainProps {
  cropId: CropId
}

export const CropObtain = ({ cropId }: CropObtainProps) => {
  const crop = crops[cropId]
  const { information } = crop

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-4">Shop Availability</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {information.seed.name} can be bought in these shops:
      </p>

      <div className="bg-blue-100 dark:bg-gray-800 rounded-lg overflow-hidden">
        <div className="p-4">
          <div className="flex items-center space-x-4">
            <Image
              src="/icons/shop.png"
              alt="Store"
              width={32}
              height={32}
              className="rounded"
            />
            <div className="flex-1">
              <div className="font-medium">Store</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Location: Left sidebar of ingame shop - Seed Tab
              </div>
            </div>
            <div className="flex items-center text-blue-600 dark:text-blue-400">
              <Image
                src="/icons/gold.png"
                alt="Gold"
                width={20}
                height={20}
                className="mr-1"
              />
              ×{information.seed.price}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 