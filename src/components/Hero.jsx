import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto text-center px-4">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-white backdrop-blur pointer-events-none">
          <span className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-400 via-indigo-400 to-orange-300 animate-pulse" />
          <span className="text-xs/4 tracking-wide">AI voice aura animation by Spline</span>
        </div>
        <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_20px_rgba(99,102,241,0.35)]">
          Portfolio Builder with AI Templates
        </h1>
        <p className="mt-4 text-base sm:text-lg text-white/90 max-w-3xl mx-auto">
          Create presentation-ready portfolios in minutes. Smart templates, academic documentation, and beautiful export — perfect for Phase-1 project showcase.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#builder" className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow hover:shadow-lg transition-all">
            Start Building
          </a>
          <a href="#abstract" className="px-6 py-3 rounded-full bg-white/90 text-gray-900 font-semibold shadow hover:bg-white">
            View Documentation
          </a>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white pointer-events-none" />
    </section>
  );
}
