
import ParticleBackground from '../components/ParticleBackground';
import AnimatedTitle from '../components/AnimatedTitle';
import FeatureList from '../components/FeatureList';
import UpcomingFeatures from '../components/UpcomingFeatures';
import FAQ from '../components/FAQ';
import { Button } from '@/components/ui/button';

const Index = () => {
  const coreFeatures = [
    {
      title: "Advanced Client Management Dashboard",
      description: "Real-time monitoring of all connected clients with detailed IP geolocation, port information, system specs, and connection status in a beautiful centralized dashboard.",
      icon: "🖥️"
    },
    {
      title: "Stealth Command Execution Engine",
      description: "Execute commands completely invisibly with no user detection, full output capture, and advanced process hiding techniques that bypass all monitoring systems.",
      icon: "⚡"
    },
    {
      title: "Professional Shell Interface",
      description: "Full-featured remote shell with command history, auto-completion, real-time output streaming, and advanced terminal emulation for complete system control.",
      icon: "💻"
    },
    {
      title: "Military-Grade HVNC Technology",
      description: "Hidden Virtual Network Computing that creates an invisible desktop session, allowing complete remote control without any visual indicators on the target system.",
      icon: "👁️"
    },
    {
      title: "Bulletproof FUD Architecture",
      description: "Fully Undetectable runtime with advanced polymorphic obfuscation, anti-analysis techniques, and real-time evasion that defeats all major security solutions.",
      icon: "🛡️"
    },
    {
      title: "High-Definition Screen Streaming",
      description: "Crystal-clear live screen capture with customizable FPS, quality control, multi-monitor support, and bandwidth optimization for smooth remote viewing.",
      icon: "📺"
    },
    {
      title: "Encrypted Communication Channel",
      description: "Military-grade end-to-end encryption with perfect forward secrecy, ensuring all communications are completely secure and uninterceptable.",
      icon: "🔐"
    },
    {
      title: "Advanced Keylogger Suite",
      description: "Sophisticated keystroke capture with real-time display, application-specific logging, credential harvesting, and encrypted storage of sensitive data.",
      icon: "⌨️"
    },
    {
      title: "Intelligent Stub Builder",
      description: "One-click executable generation with advanced obfuscation, UAC bypass integration, custom icons, and multiple persistence options built-in.",
      icon: "🔧"
    },
    {
      title: "Rootkit-Level Persistence",
      description: "Deep system integration with multiple persistence mechanisms, registry manipulation, and survival techniques that withstand security scans and system updates.",
      icon: "🔗"
    }
  ];

  const performanceFeatures = [
    {
      title: "Intelligent Image Compression",
      description: "Advanced compression algorithms that maintain visual quality while minimizing bandwidth usage, with real-time quality adjustment based on connection speed.",
      icon: "📸"
    },
    {
      title: "Multi-Threaded Architecture",
      description: "Optimized threading system ensuring smooth performance across all operations with no lag, freezing, or resource conflicts during intensive tasks.",
      icon: "⚙️"
    },
    {
      title: "Comprehensive Error Handling",
      description: "Robust error logging, debug capabilities, and automatic fallback mechanisms that ensure continuous operation even in challenging environments.",
      icon: "🔍"
    },
    {
      title: "Secure Data Management",
      description: "Advanced client-side logging with encrypted storage, secure data transmission, and complete removal capabilities for operational security.",
      icon: "💾"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-gray-100 relative overflow-x-hidden">
      <ParticleBackground />
      
      {/* Header */}
      <header className="relative z-10 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 py-12 px-6 text-center shadow-2xl">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 animate-fade-in">
            Exospine RAT
          </h1>
          <AnimatedTitle />
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <img 
            src="https://files.catbox.moe/yofkgz.png" 
            alt="Exospine RAT Professional Interface" 
            className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl border border-purple-500/30 mb-8 hover:scale-105 transition-transform duration-300"
          />
          
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-4 px-8 text-xl rounded-xl shadow-2xl hover:scale-105 transition-all duration-300 hover:shadow-purple-500/50"
          >
            <a href="https://sell.app" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
              <span>🚀 Purchase Now – $99.99</span>
            </a>
          </Button>
        </div>

        {/* Core Features */}
        <FeatureList 
          title="🎯 Why Choose Exospine?" 
          features={coreFeatures}
        />

        {/* Performance Features */}
        <FeatureList 
          title="⚡ Stealth Meets Performance" 
          features={performanceFeatures}
          className="mt-16"
        />

        {/* Upcoming Features */}
        <UpcomingFeatures />

        {/* FAQ */}
        <FAQ />
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-slate-800 text-center py-8 px-6 mt-20 border-t border-purple-500/20">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-400 mb-2">© 2025 Exospine RAT. All rights reserved.</p>
          <p className="text-sm text-yellow-400 font-semibold">
            <strong>⚠️ Legal Disclaimer:</strong> The Exospine development team assumes no responsibility for illegal use. 
            This software is intended exclusively for authorized penetration testing, educational purposes, and IT administration.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
