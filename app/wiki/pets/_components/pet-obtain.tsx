import { type PetId, pets } from "../_data"

interface PetObtainProps {
  petId: PetId
}

export const PetObtain = ({ petId }: PetObtainProps) => {
  const pet = pets[petId]

  return (
    <div className="mt-6">
      <div className="bg-blue-100 dark:bg-gray-800 rounded-lg overflow-hidden">
        {Object.entries(pet.obtain).map(([key, obtain]) => (
          <div key={key} className="p-4">
            <div className="flex items-center space-x-4">
              <img
                src={obtain.imageUrl}
                alt={obtain.title}
                className="w-8 h-8 object-contain"
              />
              <div className="flex-1">
                <div className="font-medium">{obtain.title}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {obtain.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 