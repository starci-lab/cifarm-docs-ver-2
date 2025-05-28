import { GoldIcon } from "@/app/_components"
import { ExpIcon } from "@/app/_components"
import { InformationGrid } from "@/app/_components"
import { type TileId, tiles } from "../_data"

interface TileCardProps {
  tileId: TileId
}

export const TileCard = ({ tileId }: TileCardProps) => {
  const tile = tiles[tileId]

  return (
    <div className="w-80 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden shadow-lg dark:shadow-gray-900/20 mt-5">
      {/* Header */}
      <div className="bg-orange-300 px-4 py-3 text-center">
        <h1 className="text-lg font-semibold text-gray-800 dark:text-white">{tile.name}</h1>
      </div>

      {/* Main content */}
      <div className="bg-gray-50 dark:bg-gray-800 px-6 py-8 text-center">
        {/* Tile illustration */}
        <div className="mb-4 flex justify-center">
          <img
            src={tile.imageUrl || "/placeholder.svg"}
            alt={tile.name}
            className="w-24 h-24 object-contain"
          />
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{tile.description}</p>
      </div>

      {/* Information section */}
      <div className="bg-blue-100 dark:bg-gray-600 px-4 py-2">
        <h2 className="text-center font-semibold text-gray-700 dark:text-gray-200">Information</h2>
      </div>

      {/* Information table */}
      <div className="bg-white dark:bg-gray-800">
        <div className="grid grid-cols-2 border-b border-gray-200 dark:border-gray-600">
          <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
            NFT
          </div>
          <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">
            {tile.isNFT ? "Yes" : "No"}
          </div>
        </div>
        <div className="grid grid-cols-2 border-b border-gray-200 dark:border-gray-600">
          <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
            Sellable
          </div>
          <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">
            {tile.sellable ? "Yes" : "No"}
          </div>
        </div>
        <div className="grid grid-cols-2 border-b border-gray-200 dark:border-gray-600">
          <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
            Available in Shop
          </div>
          <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">
            {tile.availableInShop ? "Yes" : "No"}
          </div>
        </div>
        <div className="grid grid-cols-2 border-b border-gray-200 dark:border-gray-600">
          <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
            Quality Stack
          </div>
          <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">
            {tile.qualityProductChanceStack}%
          </div>
        </div>
        <div className="grid grid-cols-2 border-b border-gray-200 dark:border-gray-600">
          <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
            Quality Limit
          </div>
          <div className="px-4 py-3 text-sm text-blue-600 dark:text-blue-400">
            {tile.qualityProductChanceLimit}%
          </div>
        </div>
      </div>
      
      <InformationGrid
        title="Market"
        leftTitle="Buy price"
        leftValue={tile.price.toString()}
        leftIcon={<GoldIcon />}
        rightTitle="Sell price"
        rightValue={tile.sellPrice.toString()}
        rightIcon={<GoldIcon />}
      />
    </div>
  )
} 