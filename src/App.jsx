import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Team from './components/Team';
import DocContent from './components/DocContent';
import Builder from './components/Builder';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <section className="py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Why this project?</h2>
            <p className="mt-3 text-gray-600">A responsive, presentation-ready tool for building professional portfolios with AI-guided templates — ideal for academic Phase-1 review.</p>
          </div>
        </section>
        <Builder />
        <DocContent />
        <Team />
      </main>
      <footer className="border-t bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-gray-600">
          © {new Date().getFullYear()} Portfolio Builder with AI Templates — Phase-1 FYP
        </div>
      </footer>
    </div>
  );
}

export default App;
