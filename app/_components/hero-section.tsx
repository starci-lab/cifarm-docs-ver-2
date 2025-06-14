import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900/20" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fillRule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%2334d399&quot; fillOpacity=&quot;0.05&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
        <div className="text-center space-y-8">
          {/* Main heading */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-4 py-2 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              Documentation
            </div>

            <div className="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 px-4 py-2 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
              Wiki
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-gray-900 via-emerald-800 to-emerald-600 dark:from-white dark:via-emerald-200 dark:to-emerald-400 bg-clip-text text-transparent">
                Cifarm
              </span>
              <span className="block text-emerald-600 dark:text-emerald-400 mt-2">Documentation</span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Your complete guide to wallet creation, gameplay mechanics, game concepts, and in-game items management
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link
              href="/docs/getting-started"
              className="group inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/25"
            >
              Get Started
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>

            <Link
              href="/wiki"
              className="group inline-flex items-center gap-3 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-200 dark:border-gray-700"
            >
              Wiki
              <span className="transition-transform duration-300 group-hover:translate-x-1">📖</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
