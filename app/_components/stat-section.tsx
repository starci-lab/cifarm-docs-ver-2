const stats = [
    { label: "Documentation Pages", value: "50+", icon: "📄" },
    { label: "Game Items", value: "50+", icon: "🎁" },
  ]
  
  export function StatsSection() {
    return (
      <section className="py-16 bg-emerald-600 dark:bg-emerald-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-emerald-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  