import { type FruitId, fruits } from "../_data"

interface FruitCardProps {
  fruitId: FruitId
}

export const FruitCard = ({ fruitId }: FruitCardProps) => {
  const fruit = fruits[fruitId]

  return (
    <div className="my-4">
        Inprogress writing...
    </div>
  )
} 