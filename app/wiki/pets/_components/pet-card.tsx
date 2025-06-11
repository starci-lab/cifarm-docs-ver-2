import Image from "next/image"
import { type PetId, pets } from "../_data"
import { ExpIcon, GoldIcon, InformationGrid } from "@/app/_components"
import { envConfig } from "@/config/envConfig"

interface PetCardProps {
  petId: PetId
}

export const PetCard = ({ petId }: PetCardProps) => {
  const { information } = pets[petId]

  return (
    <div className="w-full max-w-4xl mx-auto bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden shadow-lg dark:shadow-gray-900/20 mt-5">
      {/* Header */}
      <div className="bg-purple-300 px-4 py-3 text-center">
        <h1 className="text-lg font-semibold text-gray-800 dark:text-white">{information.displayId}</h1>
      </div>

      {/* Main content */}
      <div className="bg-gray-50 dark:bg-gray-800 px-6 py-8">
        <div className="flex flex-col items-center gap-8">
          {/* Pet illustration */}
          <div className="flex-shrink-0">
            <img
              src={envConfig().assetBaseUrl + information.imageUrl || "/placeholder.svg"}
              alt={information.displayId}
              className="w-32 h-32 object-contain"
            />
          </div>

          {/* Description */}
          <div className="flex-grow">
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{information.description}</p>
          </div>
        </div>
      </div>

      {/* Information section */}
      <div className="bg-blue-100 dark:bg-gray-600 px-4 py-2">
        <h2 className="text-center font-semibold text-gray-700 dark:text-gray-200">Information</h2>
      </div>

      {/* Information table */}
      <div className="bg-white dark:bg-gray-800">
        {/* 2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="col-span-1">
            <div className="grid grid-cols-2">
              <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
                Type
              </div>
              <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">
                {information.type.charAt(0).toUpperCase() + information.type.slice(1)}
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
                Available in Shop
              </div>
              <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">
                {information.availableInShop ? "Yes" : "No"}
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
                Sellable
              </div>
              <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">
                {information.sellable ? "Yes" : "No"}
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="grid grid-cols-2">
              <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
                Unlock Level
              </div>
              <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">
                Level {information.unlockLevel}
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
                Help Success Experience
              </div>
              <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400 flex items-center gap-2">
                {information.helpSuccessExperience} <ExpIcon />
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
                Size
              </div>
              <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">
                {information.size.x}x{information.size.y}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Market section */}
      <InformationGrid
        title="Market"
        leftTitle="Buy price"
        leftValue={information.price.toString()}
        leftIcon={<GoldIcon />}
        rightTitle="Sell price"
        rightValue={information.sellPrice.toString()}
        rightIcon={<GoldIcon />}
      />
    </div>
  )
} 