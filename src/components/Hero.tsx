import { ChefHat } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-amber-50 to-orange-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-orange-500 p-4 rounded-full">
              <ChefHat className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            La Cucina Bella
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Authentic Italian cuisine crafted with passion and tradition.
            Experience flavors that transport you straight to the heart of Italy.
          </p>
          <div className="flex justify-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <span className="font-semibold">Open Daily</span>
              <span>11:00 AM - 10:00 PM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
