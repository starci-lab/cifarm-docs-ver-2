import Image from "next/image"
import { type CropId, crops } from "../_data"

interface CropTipsProps {
  cropId: CropId
}

export const CropTips = ({ cropId }: CropTipsProps) => {
  const crop = crops[cropId]
  const { information } = crop

  const tools = [
    {
      name: "Watering Can",
      icon: "/tools/watering-can.png",
      description: "Use if the crop is thirsty (Stages 2-3)",
    },
    {
      name: "Pesticide",
      icon: "/tools/pesticide.png",
      description: "Use if the crop is infested (Stage 4)",
    },
    {
      name: "Herbicide",
      icon: "/tools/herbicide.png",
      description: "Use if the crop is weedy (Stage 4)",
    },
  ]

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-4">Care Instructions</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        You can use the following tools to care for your {information.name.toLowerCase()}s:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tools.map((tool) => (
          <div 
            key={tool.name} 
            className="bg-blue-100 dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700"
          >
            <div className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-50 dark:bg-gray-700 p-3 rounded-full mb-4">
                  <Image
                    src={tool.icon}
                    alt={tool.name}
                    width={48}
                    height={48}
                    className="rounded"
                  />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  {tool.name}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {tool.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 