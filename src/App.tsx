import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { ReviewForm } from './components/ReviewForm';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <ReviewForm />
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 La Cucina Bella. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
