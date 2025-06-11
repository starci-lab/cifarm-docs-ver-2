import Image from "next/image"
import { type FlowerId, flowers } from "../_data"
import { Badge, ExpIcon, GoldIcon, InformationGrid } from "@/app/_components"
import { envConfig } from "@/config/envConfig"

interface FlowerCardProps {
  flowerId: FlowerId
}

export const FlowerCard = ({ flowerId }: FlowerCardProps) => {
  const flower = flowers[flowerId]
  const { infomation } = flower

  return (
    <div className="w-full max-w-4xl mx-auto bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden shadow-lg dark:shadow-gray-900/20 mt-5">
      {/* Header */}
      <div className="bg-orange-300 px-4 py-3 text-center">
        <h1 className="text-lg font-semibold text-gray-800 dark:text-white">{flowerId.charAt(0).toUpperCase() + flowerId.slice(1)}</h1>
      </div>

      {/* Main content */}
      <div className="bg-gray-50 dark:bg-gray-800 px-6 py-8">
        <div className="flex flex-col items-center gap-8">
          {/* Flower illustration */}
          <div className="flex-shrink-0">
            <img
              src={envConfig().assetBaseUrl + infomation.imageUrl}
              alt={flowerId}
              className="w-32 h-32 object-contain"
            />
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {infomation.description}
          </div>
        </div>
      </div>

      {/* Information section */}
      <div className="bg-blue-100 dark:bg-gray-600 px-4 py-2">
        <h2 className="text-center font-semibold text-gray-700 dark:text-gray-200">Information</h2>
      </div>

      {/* Information table */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="col-span-1">
          <div className="grid grid-cols-2">
            <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
              Price
            </div>
            <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">
              <span className="ml-1 flex">
                <Image src="/icons/gold.png" alt="coin" width={20} height={20} className="mr-1" />
                {"x" + infomation.price}
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
              Growth Time
            </div>
            <div className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
              {Math.round(infomation.growthStageDuration / 60)} minutes
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
              Unlock Level
            </div>
            <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">
              Level {infomation.unlockLevel}
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="grid grid-cols-2">
            <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
              Harvest Quantity
            </div>
            <div className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
              {infomation.harvestQuantity}
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
              Honey Yield
            </div>
            <div className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
              {infomation.honeyYieldCoefficient}x
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
              Quality Chance
            </div>
            <div className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
              +{infomation.honeyQualityChancePlus}%
            </div>
          </div>
        </div>
      </div>

      {/* Experience section */}
      <InformationGrid
        title="Experience"
        leftTitle="Basic"
        leftValue={infomation.basicHarvestExperiences.toString()}
        rightTitle="Quality"
        rightValue={infomation.qualityHarvestExperiences.toString()}
        leftIcon={<ExpIcon />}
        rightIcon={<ExpIcon />}
      />
    </div>
  )
} 