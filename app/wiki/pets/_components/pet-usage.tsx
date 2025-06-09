import { type PetId, pets } from "../_data"

interface PetUsageProps {
  petId: PetId
}

export const PetUsage = ({ petId }: PetUsageProps) => {
  const pet = pets[petId]

  return (
    <div className="mt-8">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg">
          <thead>
            <tr className="bg-blue-100 dark:bg-gray-700">
              {Object.entries(pet.usage).map(([action, data]) => (
                <th key={action} className="px-4 py-2 text-center text-sm font-semibold text-gray-700 dark:text-gray-200">
                  {data.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-200 dark:border-gray-600">
              {Object.entries(pet.usage).map(([action, data]) => (
                <td key={action} className="px-4 py-3 text-center place-items-center">
                  <div className="flex items-end justify-center">
                    <img
                      src={data.imageUrl}
                      alt={`${data.title} action`}
                      className="w-fit h-fit object-contain mx-auto"
                    />
                  </div>
                </td>
              ))}
            </tr>
            <tr className="border-t border-gray-200 dark:border-gray-600">
              {Object.entries(pet.usage).map(([action, data]) => (
                <td key={action} className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300 text-center">
                  {data.description}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
} 