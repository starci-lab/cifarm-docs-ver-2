import { FeatureCards, GamePreview, HeroSection, StatsSection } from "./_components"

const Page = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <HeroSection />
      <FeatureCards />
      <StatsSection />
      <GamePreview />
    </div>
  )
}

export default Page
