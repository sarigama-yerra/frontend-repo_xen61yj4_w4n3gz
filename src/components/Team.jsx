export default function Team() {
  const members = [
    { name: 'Student A', role: 'Project Lead' },
    { name: 'Student B', role: 'Frontend & UI' },
    { name: 'Student C', role: 'Backend & AI' },
  ];

  return (
    <section id="team" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Team</h2>
        <p className="mt-2 text-gray-600">Meet the students behind the project.</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((m) => (
            <div key={m.name} className="rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="h-16 w-16 rounded-full bg-gradient-to-tr from-purple-600 via-indigo-500 to-orange-400" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{m.name}</h3>
              <p className="text-sm text-gray-600">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
