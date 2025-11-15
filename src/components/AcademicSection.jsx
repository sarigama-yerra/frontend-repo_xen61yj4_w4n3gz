export default function AcademicSection({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        <div className="mt-4 prose prose-indigo max-w-none">
          {children}
        </div>
      </div>
    </section>
  );
}
