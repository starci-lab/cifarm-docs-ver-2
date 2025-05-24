import Link from 'next/link'

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white tracking-tight">
              Cifarm
              <span className="block text-emerald-600 dark:text-emerald-400">Documentation</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Support for wallet creation, gameplay, game concepts explanation, and in-game items
            </p>
          </div>

          <div className="pt-4 flex items-center justify-center gap-4">
            <Link 
              href="/01-getting-started"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-200 hover:scale-105 hover:shadow-lg group"
            >
              Get started 
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </div>

          <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-lg p-6 border border-white/20 dark:border-gray-700/20">
              <div className="text-2xl mb-2">🎮</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Game Guide</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Detailed gameplay instructions</p>
            </div>
            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-lg p-6 border border-white/20 dark:border-gray-700/20">
              <div className="text-2xl mb-2">💰</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Wallet Setup</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Create and manage crypto wallets</p>
            </div>
            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-lg p-6 border border-white/20 dark:border-gray-700/20">
              <div className="text-2xl mb-2">📚</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Game Items</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Explanation of in-game items</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
