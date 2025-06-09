import Image from "next/image"
import { type SupplyId, supplies } from "../_data"

interface SupplyObtainProps {
  supplyId: SupplyId
}

export const SupplyObtain = ({ supplyId }: SupplyObtainProps) => {
  const supply = supplies[supplyId]

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-4">Shop Availability</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {supply.name} can be obtained in these ways:
      </p>

      {supply.availableInShop && supply.price != null ? (
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
                  Location: Ingame shop - Supplies Tab
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
                ×{supply.price}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-green-100 dark:bg-gray-800 rounded-lg overflow-hidden">
          <div className="p-4">
            <div className="flex items-center space-x-4">
              <Image
                src="/icons/daily.png"
                alt="Gift"
                width={32}
                height={32}
                className="rounded"
              />
              <div className="flex-1">
                <div className="font-medium">Default Supply</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  This supply is given to you when you start the game
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 