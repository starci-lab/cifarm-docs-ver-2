import Image from "next/image"
import { type CropId, crops } from "../_data"

interface CropCardProps {
  cropId: CropId
}

export const CropCard = ({ cropId }: CropCardProps) => {
  const crop = crops[cropId]
  const { information } = crop

  return (
    <div className="w-80 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden shadow-lg dark:shadow-gray-900/20 mt-5">
      {/* Header */}
      <div className="bg-orange-300 px-4 py-3 text-center">
        <h1 className="text-lg font-semibold text-gray-800 dark:text-white">{information.name}</h1>
      </div>

      {/* Main content */}
      <div className="bg-gray-50 dark:bg-gray-800 px-6 py-8 text-center">
        {/* Crop illustration */}
        <div className="mb-4 flex justify-center">
          <img
            src={information.imageUrl || "/placeholder.svg"}
            alt={information.name}
            className="w-24 h-24 object-contain"
          />
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{information.description}</p>
      </div>

      {/* Information section */}
      <div className="bg-blue-100 dark:bg-gray-600 px-4 py-2">
        <h2 className="text-center font-semibold text-gray-700 dark:text-gray-200">Information</h2>
      </div>

      {/* Information table */}
      <div className="bg-white dark:bg-gray-800">
        <div className="grid grid-cols-2 border-b border-gray-200 dark:border-gray-600">
          <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
            Type
          </div>
          <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">{information.type}</div>
        </div>
        <div className="grid grid-cols-2 border-b border-gray-200 dark:border-gray-600">
          <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
            Seed
          </div>
          <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400 flex items-center">
            <img
              src={information.seed.imageUrl || "/placeholder.svg"}
              alt={information.seed.name}
              className="w-8 h-8 mr-1"
            />
            {information.seed.name} 
          </div>
        </div>
        {/* price */}
        <div className="grid grid-cols-2 border-b border-gray-200 dark:border-gray-600">
          <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
            Price
          </div>
          <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">
            <span className="ml-1 flex">
             <Image src="/icons/gold.png" alt="coin" width={20} height={20} className="mr-1" />  {"x" + information.seed.price}
             </span>
          </div>
        </div>
        <div className="grid grid-cols-2 border-b border-gray-200 dark:border-gray-600">
          <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
            Growth time
          </div>
          <div className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
            {information.growthStageDuration / 60} minutes
          </div>
        </div>
        <div className="grid grid-cols-2 border-b border-gray-200 dark:border-gray-600">
          <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
            Unlock level
          </div>
          <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">Level {information.unlockLevel}</div>
        </div>
        <div className="grid grid-cols-2 border-b border-gray-200 dark:border-gray-600">
          <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
            Harvest quantity
          </div>
          <div className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">{information.harvestQuantity}</div>
        </div>
      </div>

      {/* Experience section */}
      <div className="bg-blue-100 dark:bg-gray-600 px-4 py-2">
        <h2 className="text-center font-semibold text-gray-700 dark:text-gray-200">Experience</h2>
      </div>

      {/* Experience grid */}
      <div className="bg-white dark:bg-gray-800 px-4 py-4">
        <div className="grid grid-cols-2 gap-2">
          <div className="text-center">
            <div className="text-gray-600 dark:text-gray-400 mb-1">Basic</div>
            <div className="text-sm font-semibold text-gray-900 dark:text-white">
              {information.basicHarvestExperiences} XP
            </div>
          </div>
          <div className="text-center">
            <div className="text-yellow-500 dark:text-yellow-400 mb-1">Quality</div>
            <div className="text-sm font-semibold text-gray-900 dark:text-white">
              {information.qualityHarvestExperiences} XP
            </div>
          </div>
        </div>
      </div>

      {/* Sell price section */}
      <div className="bg-blue-100 dark:bg-gray-600 px-4 py-2">
        <h2 className="text-center font-semibold text-gray-700 dark:text-gray-200">Sell price</h2>
      </div>

      <div className="bg-white dark:bg-gray-800 px-4 py-4">
        <div className="grid grid-cols-2 gap-2">
          <div className="text-center">
            <div className="text-gray-600 dark:text-gray-400 mb-1">Basic</div>
            <div className="text-sm font-semibold text-gray-900 dark:text-white flex justify-center gap-2">
              {information.basicSellPrice} 
              <Image src="/icons/gold.png" alt="coin" width={20} height={20} />
            </div>
          </div>
          <div className="text-center">
            <div className="text-yellow-500 dark:text-yellow-400 mb-1">Quality</div>
            <div className="text-sm font-semibold text-gray-900 dark:text-white flex justify-center gap-2">
              {information.qualitySellPrice} 
              <Image src="/icons/gold.png" alt="coin" width={20} height={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
