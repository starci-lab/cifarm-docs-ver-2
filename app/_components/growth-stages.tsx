import Image from 'next/image'

interface GrowthStagesProps {
  cropName: string;
  stages: number;
}

export const GrowthStages = ({ cropName, stages }: GrowthStagesProps) => {
  return (
    <div className="flex flex-row gap-2 w-full mt-10">
      {Array.from({ length: stages }, (_, i) => i + 1).map((stage) => (
        <div key={stage} className="w-[20%]">
          <Image
            src={`/crops/${cropName}/${stage}.png`}
            alt={`${cropName} Stage ${stage} 2`}
            width={200}
            height={200}
            className="w-full h-auto"
          />
        </div>
      ))}
    </div>
  )
} 