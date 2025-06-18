
interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface FeatureListProps {
  title: string;
  features: Feature[];
  className?: string;
}

const FeatureList = ({ title, features, className = "" }: FeatureListProps) => {
  return (
    <div className={`mt-12 ${className}`}>
      <h2 className="text-3xl font-bold text-blue-300 mb-8 text-center">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-slate-800/50 p-6 rounded-xl border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
          >
            <div className="flex items-start space-x-4">
              <span className="text-2xl">{feature.icon}</span>
              <div>
                <h3 className="text-lg font-semibold text-purple-300 mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureList;
