export function GamePreview() {

    return (
      <div className="py-20">
        <a className="py-20 sm:py-24 bg-gradient-to-b from-transparent to-emerald-50/50 dark:to-emerald-900/10"
        href="https://cifarm.xyz"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Explore the Cifarm Universe
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Dive into a rich farming simulation with blockchain integration
            </p>
          </div>
  
          <div className="relative">
            {/* Image container with enhanced styling */}
            <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-4 sm:p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-2xl">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="https://cifarm.sgp1.cdn.digitaloceanspaces.com/float_map.png"
                  alt="CiFarm Game World"
                  className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
                />
  
                {/* Overlay with play button */}
                <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white/90 hover:bg-white text-gray-900 rounded-full p-4 transform hover:scale-110 transition-all duration-300 shadow-lg">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              </div>
  
              {/* Floating stats */}
              <div className="absolute -top-4 -right-4 bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                Want to play?
              </div>
            </div>
  
            {/* Decorative elements */}
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-emerald-200 dark:bg-emerald-800 rounded-full opacity-60 animate-pulse" />
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-teal-200 dark:bg-teal-800 rounded-full opacity-40 animate-pulse delay-1000" />
          </div>
        </div>
      </a>
      </div>
    )
  }
  