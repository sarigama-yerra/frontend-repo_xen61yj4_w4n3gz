import AcademicSection from './AcademicSection';

export default function DocContent() {
  return (
    <div className="bg-gray-50/60 border-t">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AcademicSection id="abstract" title="Abstract">
          <p>
            Portfolio Builder with AI Templates is a web-based system that enables students and professionals to generate modern, presentation-ready portfolios using intelligent, pre-trained templates. The system leverages design heuristics and content prompts to quickly assemble sections, images, and timelines, providing export-ready outputs for academic reviews and demonstrations.
          </p>
        </AcademicSection>

        <AcademicSection id="introduction" title="Introduction">
          <p>
            Creating a compelling portfolio requires consistent visual design, clear information architecture, and professional copy. Many learners struggle with layout decisions and content writing. This project introduces an assistive tool that offers curated templates and AI-guided content suggestions, ensuring quality outputs with minimal effort.
          </p>
        </AcademicSection>

        <AcademicSection id="literature" title="Literature Survey">
          <ul>
            <li>Template-driven websites and static site generators popularize reuse and consistency in design.</li>
            <li>AI-assisted writing tools demonstrate improved drafting speed and clarity.</li>
            <li>Design systems and component libraries reduce cognitive load and standardize patterns.</li>
          </ul>
        </AcademicSection>

        <AcademicSection id="problem" title="Problem Definition">
          <p>
            Users need a fast, consistent method to create professional portfolios without expert design skills. Existing tools provide either rigid templates or complex editors with steep learning curves.
          </p>
        </AcademicSection>

        <AcademicSection id="objectives" title="Objectives">
          <ul>
            <li>Provide AI-guided templates covering common portfolio sections.</li>
            <li>Enable responsive, visually appealing layouts suitable for academic presentation.</li>
            <li>Offer simple export and showcase modes for viva and review.</li>
          </ul>
        </AcademicSection>

        <AcademicSection id="scope" title="Scope of Project">
          <p>
            The Phase-1 scope includes user interface, template selection, auto-filled sample content, and academic documentation. Advanced features such as authentication, persistent storage, and custom exports can be extended in Phase-2.
          </p>
        </AcademicSection>

        <AcademicSection id="requirements" title="System Requirements">
          <ul>
            <li>Frontend: Modern browser with JavaScript enabled, responsive viewports.</li>
            <li>Backend (Phase-2 optional): FastAPI with MongoDB for persistence and AI services.</li>
            <li>Development stack: React, Tailwind CSS, and Spline for hero animation.</li>
          </ul>
        </AcademicSection>

        <AcademicSection id="architecture" title="Proposed System Architecture">
          <p>
            The system follows a client-first architecture where the UI manages template selection and content assembly. In extended phases, the backend exposes endpoints for template catalogs, AI content generation, and user data persistence via MongoDB.
          </p>
        </AcademicSection>

        <AcademicSection id="block-diagram" title="Block Diagram">
          <p>
            Components: User Interface → Template Engine → Content Generator → Preview & Export. Optional services: Auth Service → Database → AI APIs.
          </p>
        </AcademicSection>

        <AcademicSection id="use-case" title="Use Case Diagram">
          <p>
            Primary actor: Student. Use cases: Select Template, Auto-Fill Content, Edit Sections, Preview, Present. Secondary actors (Phase-2): Reviewer, Admin.
          </p>
        </AcademicSection>

        <AcademicSection id="modules" title="Module Description">
          <ul>
            <li>Template Library: Curated, responsive layouts.</li>
            <li>AI Suggestor: Prompts and pre-filled example content.</li>
            <li>Editor: Lightweight form-based customization.</li>
            <li>Presenter: Full-screen showcase mode for viva.</li>
          </ul>
        </AcademicSection>

        <AcademicSection id="advantages" title="Advantages">
          <ul>
            <li>Time-efficient content creation with professional polish.</li>
            <li>Consistent, mobile-friendly design for all screens.</li>
            <li>Clear academic documentation included.
            </li>
          </ul>
        </AcademicSection>

        <AcademicSection id="applications" title="Applications">
          <ul>
            <li>Student portfolios and project showcases.</li>
            <li>Hackathon and internship profile pages.</li>
            <li>Department exhibitions and demo days.</li>
          </ul>
        </AcademicSection>

        <AcademicSection id="future-scope" title="Future Scope">
          <ul>
            <li>Account system with persistent storage and sharing links.</li>
            <li>Integration with AI summarizers and resume parsers.</li>
            <li>Export to PDF and static site builds.</li>
          </ul>
        </AcademicSection>
      </div>
    </div>
  );
}
