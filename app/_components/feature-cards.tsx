const features = [
    {
      icon: "🎮",
      title: "Game Guide",
      description: "Comprehensive gameplay instructions and strategies",
      href: "/docs/gameplay",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "💰",
      title: "Wallet Setup",
      description: "Step-by-step crypto wallet creation and management",
      href: "/docs/wallet",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: "📚",
      title: "Game Items",
      description: "Detailed explanation of all in-game items and mechanics",
      href: "/docs/items",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: "⚡",
      title: "Quick Start",
      description: "Get up and running in minutes with our quick start guide",
      href: "/docs/quick-start",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: "🔧",
      title: "Advanced",
      description: "Advanced techniques and optimization strategies",
      href: "/docs/advanced",
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: "❓",
      title: "FAQ",
      description: "Frequently asked questions and troubleshooting",
      href: "/docs/faq",
      color: "from-gray-500 to-slate-500",
    },
  ]
  
  export function FeatureCards() {
    return (
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Everything you need to get started
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore our comprehensive documentation to master Cifarm
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 hover:border-emerald-300 dark:hover:border-emerald-600 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/10"
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                />
  
                <div className="relative">
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
  
                  <div className="flex items-center text-emerald-600 dark:text-emerald-400 font-medium group-hover:gap-2 transition-all duration-300">
                    <span>Learn more</span>
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  