import { Pizza, Wine, Award } from 'lucide-react';

const features = [
  {
    icon: Pizza,
    title: 'Fresh Ingredients',
    description: 'We source the finest local and imported Italian ingredients daily'
  },
  {
    icon: Wine,
    title: 'Fine Wine Selection',
    description: 'Carefully curated wine list featuring Italian and international selections'
  },
  {
    icon: Award,
    title: 'Award-Winning Chef',
    description: 'Our head chef brings 20 years of experience from Italy'
  }
];

export function Features() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <feature.icon className="w-8 h-8 text-orange-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
