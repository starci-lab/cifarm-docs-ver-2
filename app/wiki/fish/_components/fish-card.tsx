import { type FishId, fish } from "../_data"

interface FishCardProps {
  fishId: FishId
}

export const FishCard = ({ fishId }: FishCardProps) => {
  const fishData = fish[fishId]

  return (
    <div className="my-4">
        Inprogress writing...
    </div>
  )
} 