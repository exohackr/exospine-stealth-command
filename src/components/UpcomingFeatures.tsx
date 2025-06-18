
const UpcomingFeatures = () => {
  const features = [
    {
      title: "Multi-Channel Command Execution",
      description: "Execute commands through PowerShell, WMI, and custom channels beyond standard EXE execution for ultimate flexibility",
      icon: "⚡"
    },
    {
      title: "Next-Gen Obfuscation Engine",
      description: "Military-grade obfuscation that adapts in real-time to bypass even the most advanced AI-powered security solutions",
      icon: "🛡️"
    },
    {
      title: "Advanced UAC Bypass Arsenal",
      description: "Multiple zero-day UAC bypass techniques that slip past Windows security prompts like they don't exist",
      icon: "🔓"
    },
    {
      title: "Interactive Troll Suite",
      description: "Professional chaos tools: flip screens, invert colors, simulate mouse movements, and create harmless digital mayhem",
      icon: "🎭"
    },
    {
      title: "Ghost Mode Execution",
      description: "Completely fileless operation running entirely in memory with zero disk footprint - invisible to forensic analysis",
      icon: "👻"
    }
  ];

  return (
    <div className="mt-16">
      <h2 className="text-4xl font-bold text-center mb-4">
        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent animate-pulse">
          ✨ Coming Soon ✨
        </span>
      </h2>
      <p className="text-center text-gray-300 mb-8">The future of remote access technology</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-br from-yellow-900/20 to-orange-900/20 p-6 rounded-xl border-2 border-yellow-500/30 hover:border-yellow-400/60 transition-all duration-300 hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-orange-500/5 rounded-xl animate-pulse"></div>
            <div className="relative flex items-start space-x-4">
              <span className="text-3xl animate-bounce">{feature.icon}</span>
              <div>
                <h3 className="text-xl font-bold text-yellow-300 mb-3">{feature.title}</h3>
                <p className="text-gray-200 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingFeatures;
