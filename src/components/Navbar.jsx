import { Menu, GraduationCap, Sparkles } from "lucide-react";
import { useState } from "react";

const sections = [
  { id: "abstract", label: "Abstract" },
  { id: "introduction", label: "Introduction" },
  { id: "literature", label: "Literature Survey" },
  { id: "problem", label: "Problem Definition" },
  { id: "objectives", label: "Objectives" },
  { id: "scope", label: "Scope" },
  { id: "requirements", label: "System Requirements" },
  { id: "architecture", label: "Architecture" },
  { id: "block-diagram", label: "Block Diagram" },
  { id: "use-case", label: "Use Case Diagram" },
  { id: "modules", label: "Module Description" },
  { id: "advantages", label: "Advantages" },
  { id: "applications", label: "Applications" },
  { id: "future-scope", label: "Future Scope" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-white/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 grid place-items-center rounded-full bg-gradient-to-tr from-purple-600 via-indigo-500 to-orange-400 text-white shadow">
            <GraduationCap size={18} />
          </div>
          <span className="font-semibold text-gray-900 tracking-tight">Portfolio Builder with AI Templates</span>
        </div>
        <nav className="hidden lg:flex items-center gap-6">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => handleNavClick(s.id)}
              className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
            >
              {s.label}
            </button>
          ))}
          <a href="#home" className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-medium px-4 py-2 rounded-full shadow hover:shadow-md transition-all">
            <Sparkles size={16} /> Try Demo
          </a>
        </nav>
        <button className="lg:hidden p-2 rounded-md hover:bg-gray-100" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          <Menu />
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-white/40 bg-white/90 backdrop-blur">
          <div className="max-w-7xl mx-auto px-4 py-3 grid grid-cols-2 gap-2">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => handleNavClick(s.id)}
                className="text-left text-sm text-gray-700 hover:text-gray-900 py-2"
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
