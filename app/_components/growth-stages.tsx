import Image from 'next/image'

interface GrowthStagesProps {
  type: 'crop' | 'fruit';
  name: string;
  stages: number;
}

export const GrowthStages = ({ type, name, stages }: GrowthStagesProps) => {
  return (
    <div className="flex flex-row gap-2 w-full mt-10">
      {Array.from({ length: stages }, (_, i) => i + 1).map((stage) => (
        <div key={stage} className="w-[20%]">
          <Image
            src={`/${type}s/${name}/${stage}.png`}
            alt={`${name} Stage ${stage} 2`}
            width={200}
            height={200}
            className="w-full h-[200px] object-contain"
          />
        </div>
      ))}
    </div>
  )
} 