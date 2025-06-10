import Image from "next/image"
import { type FruitId, fruits } from "../_data"
import { Badge, ExpIcon, GoldIcon, InformationGrid } from "@/app/_components"
import { envConfig } from "@/config/envConfig"

interface FruitCardProps {
  fruitId: FruitId
}

export const FruitCard = ({ fruitId }: FruitCardProps) => {
  const fruit = fruits[fruitId]
  const { infomation } = fruit

  return (
    <div className="w-full max-w-4xl mx-auto bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden shadow-lg dark:shadow-gray-900/20 mt-5">
      {/* Header */}
      <div className="bg-orange-300 px-4 py-3 text-center">
        <h1 className="text-lg font-semibold text-gray-800 dark:text-white">{fruitId}</h1>
      </div>

      {/* Main content */}
      <div className="bg-gray-50 dark:bg-gray-800 px-6 py-8">
        <div className="flex flex-col items-center gap-8">
          {/* Fruit illustration */}
          <div className="flex-shrink-0">
            <img
              src={infomation.imageUrl}
              alt={fruitId}
              className="w-32 h-32 object-contain"
            />
          </div>

          {/* description */}
          <div className="text-center text-gray-700 dark:text-gray-300">
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
              Type
            </div>
            <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">
              {infomation.isNFT ? <div className="w-fit">
                <Badge>NFT</Badge>
              </div> : "Regular"}
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
              Young Growth Time
            </div>
            <div className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
              {Math.round(infomation.youngGrowthStageDuration / 60)} minutes
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
              Mature Growth Time
            </div>
            <div className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
              {Math.round(infomation.matureGrowthStageDuration / 60)} minutes
            </div>
          </div>
          {infomation.price && (
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
          )}
        </div>
        <div className="col-span-1">
          <div className="grid grid-cols-2">
            <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
              Unlock level
            </div>
            <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">
              {infomation.unlockLevel ? `Level ${infomation.unlockLevel}` : "N/A"}
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
              Harvest quantity
            </div>
            <div className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">{infomation.harvestQuantity}</div>
          </div>
          <div className="grid grid-cols-2">
            <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
              Fertilizer Time
            </div>
            <div className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
              {Math.round(infomation.fertilizerTime / 60)} minutes
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

      {/* Sell price section */}
      {infomation.sellable && infomation.sellPrice && (
        <InformationGrid
          title="Market"
          leftTitle="Sell Price"
          leftValue={infomation.sellPrice.toString()}
          rightTitle=""
          rightValue=""
          leftIcon={<GoldIcon />}
          rightIcon={null}
        />
      )}
    </div>
  )
} 