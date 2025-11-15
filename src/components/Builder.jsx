import { useState } from 'react';
import { Sparkles, LayoutTemplate, Download } from 'lucide-react';

const starterTemplates = [
  {
    id: 'minimal',
    name: 'Minimal Clean',
    preview: 'A minimalist layout focusing on typography and whitespace.',
    sections: ['About', 'Skills', 'Projects', 'Education', 'Contact']
  },
  {
    id: 'showcase',
    name: 'Showcase Grid',
    preview: 'Visual-first grid with project cards and badges.',
    sections: ['About', 'Featured Projects', 'Skills', 'Experience', 'Contact']
  },
  {
    id: 'timeline',
    name: 'Timeline Narrative',
    preview: 'Storytelling timeline with milestones and achievements.',
    sections: ['Overview', 'Journey', 'Projects', 'Achievements', 'Contact']
  }
];

export default function Builder() {
  const [selected, setSelected] = useState(starterTemplates[0]);
  const [name, setName] = useState('Your Name');
  const [tagline, setTagline] = useState('Aspiring Software Engineer | Problem Solver');

  const htmlPreview = () => {
    const sectionsHtml = selected.sections.map(s => `<section style="padding:16px 0"><h3 style="margin:0 0 8px">${s}</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></section>`).join('');
    return `<!doctype html><html><head><meta charset='utf-8'><meta name='viewport' content='width=device-width, initial-scale=1'><title>${name} - Portfolio</title><style>body{font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;padding:24px;max-width:860px;margin:auto;line-height:1.6}h1{font-size:28px;margin:0}h2{color:#6366f1;margin:4px 0 16px}section{border-top:1px solid #e5e7eb}</style></head><body><header><h1>${name}</h1><h2>${tagline}</h2></header>${sectionsHtml}</body></html>`;
  };

  const downloadHtml = () => {
    const blob = new Blob([htmlPreview()], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${name.replace(/\s+/g,'_').toLowerCase()}_portfolio.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="builder" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start justify-between gap-8 flex-col lg:flex-row">
          <div className="w-full lg:max-w-md">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2"><LayoutTemplate size={20}/> Template Picker</h2>
            <p className="mt-2 text-gray-600">Choose a style and personalize basic details. Smart defaults help you start quickly.</p>

            <div className="mt-6 space-y-3">
              {starterTemplates.map(t => (
                <button key={t.id} onClick={() => setSelected(t)} className={`w-full text-left rounded-xl border p-4 hover:shadow transition ${selected.id === t.id ? 'border-indigo-500 ring-2 ring-indigo-100' : 'border-gray-200'}`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-900">{t.name}</div>
                      <div className="text-sm text-gray-600">{t.preview}</div>
                    </div>
                    <Sparkles className="text-indigo-500" />
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {t.sections.map(s => (
                      <span key={s} className="text-xs px-2 py-1 rounded-full bg-indigo-50 text-indigo-700">{s}</span>
                    ))}
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Your Name</label>
                <input value={name} onChange={e=>setName(e.target.value)} className="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" placeholder="Enter your full name" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Tagline</label>
                <input value={tagline} onChange={e=>setTagline(e.target.value)} className="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" placeholder="e.g., ML Enthusiast | Web Developer" />
              </div>
              <button onClick={downloadHtml} className="inline-flex items-center gap-2 justify-center rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-3 text-white font-semibold shadow hover:shadow-lg">
                <Download size={18}/> Export HTML
              </button>
            </div>
          </div>

          <div className="w-full flex-1">
            <div className="rounded-2xl border border-gray-200 overflow-hidden bg-white">
              <div className="px-4 py-3 border-b bg-gray-50 text-sm text-gray-700">Live Preview</div>
              <iframe title="preview" className="w-full h-[520px]" srcDoc={htmlPreview()} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
