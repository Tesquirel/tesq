import { Component, OnInit, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MetaService } from '../../../service/meta.service';

@Component({
  selector: 'app-company',
  imports: [RouterLink],
  templateUrl: './company.component.html',
  styleUrl: './company.component.scss'
})
export class CompanyComponent implements OnInit {

  /* Scroll-spy highlight */
  activeSection = 'overview';

  /* FAQ accordion */
  openFaq: number | null = 0;

  /* Calendly booking link */
  readonly calendly = 'https://calendly.com/prasad-jwalapuram-tesquirel/30min';

  /*
   * ⚠️ IMPORTANT — match this number to your real site header height (in px).
   * Example: if your site header is 90px tall, set this to 90.
   * This is the single source of truth for the sticky sub-nav and scroll offsets.
   */
  readonly headerHeight = 80;

  /* Sub-link navigation */
  sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'story', label: 'Our Story' },
    { id: 'what-we-build', label: 'What We Build' },
    { id: 'customers', label: 'Our Customers' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'trust', label: 'Trust & Security' },
    { id: 'different', label: 'What Makes Us Different' },
    { id: 'perspective', label: 'Our Perspective' },
    { id: 'faqs', label: 'FAQs' }
  ];

  pillars = [
    { icon: 'fas fa-brain', title: 'AI Test Intelligence', text: 'Understand requirements, business rules, scenarios, entities and coverage opportunities.' },
    { icon: 'fas fa-robot', title: 'No-Script Automation', text: 'Automate repeatable workflows without making scripting the only route to automation.' },
    { icon: 'fas fa-sitemap', title: 'Test Management', text: 'Connect requirements, scenarios, tests, execution and evidence with full traceability.' },
    { icon: 'fas fa-eye', title: 'Visual Validation', text: 'Identify visual and experience-related changes that functional validation may not detect.' },
    { icon: 'fas fa-chart-line', title: 'Execution Intelligence', text: 'Turn execution data into useful failure analysis, patterns, summaries and insights.' },
    { icon: 'fas fa-microchip', title: 'AI Application Evaluation', text: 'Evaluate AI-enabled systems — RAG, LLM and agentic workflows — with a trust-oriented approach.' }
  ];

  storyPoints = [
    'Understand business intent',
    'Identify meaningful test scenarios',
    'Automate repetitive validation',
    'Validate complex business journeys',
    'Test across modern and legacy technologies',
    'Understand execution failures',
    'Maintain traceability and evidence',
    'Make better-informed release decisions'
  ];

  capabilities = [
    { icon: 'fas fa-brain', title: 'AI Test Intelligence', text: 'Understand requirements, business rules, scenarios, entities and coverage opportunities.' },
    { icon: 'fas fa-robot', title: 'No-Script Test Automation', text: 'Automate repeatable workflows without making scripting the only route to automation.' },
    { icon: 'fas fa-sitemap', title: 'Test Management & Traceability', text: 'Connect requirements, scenarios, tests, execution and evidence.' },
    { icon: 'fas fa-eye', title: 'Visual & Experience Validation', text: 'Identify visual and experience-related changes that functional validation may not detect.' },
    { icon: 'fas fa-chart-line', title: 'Execution Intelligence', text: 'Turn execution data into useful failure analysis, patterns, summaries and insights.' },
    { icon: 'fas fa-microchip', title: 'AI Application Evaluation', text: 'Evaluate AI-enabled systems, including RAG, LLM and agentic workflows, using a trusted Quality Engineering approach.' }
  ];

  industries = [
    'Insurance', 'Banking & Financial Services', 'Healthcare',
    'Retail', 'Manufacturing', 'Enterprise Software'
  ];

  landscape = [
    'Mobile', 'Web', 'APIs', 'Cloud', 'Databases',
    'AS/400 / IBM i / Mainframe', 'Enterprise Integrations'
  ];

  leadershipFocus = [
    'Software Quality', 'Enterprise Technology', 'AI', 'Automation', 'Business Outcomes'
  ];

  leadership = [
    {
      name: 'Prasad Jwalapuram', role: 'Co-Founder & Director', pic: 'assets/images/tsq/team/prasad-jwalapuram.jpg',
      text: 'Focused on the intersection of Quality Engineering, AI and enterprise business outcomes. Driving TesQuirel’s vision for intelligent testing, business-journey validation and trusted AI.',
      linkedIn: 'https://www.linkedin.com/in/prasadjwalapuram/'
    },
    {
      name: 'Srilakshmi Krishnamurthy', role: 'Co-Founder & Director', pic: 'assets/images/tsq/team/srilakshmi-krishnamurthy.jpg',
      text: 'Focused on making enterprise test automation practical and accessible across modern, legacy and hybrid application landscapes.',
      linkedIn: 'https://www.linkedin.com/in/srilakshmi-k-45ab148a/'
    },
    {
      name: 'Renu Aggarwal', role: 'Co-Founder & Director', pic: 'assets/images/tsq/team/renu-aggarwal2.jpg',
      text: 'Focused on transforming complex quality challenges into scalable, measurable enterprise solutions and shaping TesQuirel’s evolution as a Quality Engineering platform.',
      linkedIn: 'https://www.linkedin.com/in/renu-aggarwal-b7969521/'
    }
  ];

  trustItems = [
    'Application and data security', 'Access control', 'Environment separation',
    'Secure test data practices', 'Enterprise deployment models',
    'Evidence and traceability', 'Responsible use of AI',
    'Governance of AI-enabled capabilities'
  ];

  trustQuestions = [
    'What did the AI evaluate?', 'What did it decide?',
    'What controls were applied?', 'What evidence was generated?',
    'Who is accountable for the outcome?'
  ];

  faqs = [
    { q: 'What is TesQuirel?', a: 'TesQuirel is an AI-powered Quality Engineering company focused on helping enterprises validate applications, business journeys and AI-enabled systems across modern, legacy and hybrid technology landscapes.' },
    { q: 'What does TesQuirel do?', a: 'TesQuirel provides capabilities spanning AI test intelligence, test management, no-script test automation, visual validation, execution intelligence, evidence and AI application evaluation.' },
    { q: 'Which industries does TesQuirel serve?', a: 'TesQuirel focuses on enterprise industries including Insurance, Banking & Financial Services, Healthcare, Retail, Manufacturing and Enterprise Software.' },
    { q: 'Can TesQuirel work with legacy applications?', a: 'Yes. TesQuirel’s approach is designed for environments where modern applications coexist with legacy technologies, including AS/400 / IBM i and other enterprise systems.' },
    { q: 'Is TesQuirel an AI testing company?', a: 'AI is an important part of TesQuirel’s Quality Engineering approach. The platform addresses both conventional application quality and the evaluation of AI-enabled applications and agentic systems.' },
    { q: 'What is TrustVerse?', a: 'TrustVerse is TesQuirel’s thought-leadership framework for trusted AI Quality Engineering, focusing on evaluation, accuracy, guardrails, evidence, accountability and continuous evaluation.' }
  ];

  constructor(private metaService: MetaService) { }

  ngOnInit(): void {
    // Publish header height as a CSS variable for the whole page
    document.documentElement.style.setProperty('--header-h', `${this.headerHeight}px`);

    this.metaService.setMetaTags({
      title: 'About TesQuirel | AI Quality Engineering for Enterprise Applications',
      description:
        'Learn about TesQuirel, an AI-powered Quality Engineering company helping enterprises validate modern, legacy and hybrid applications with greater speed, coverage and release confidence.',
      keywords:
        'TesQuirel, TesQuirel Solutions, AI Quality Engineering company, AI testing company, enterprise test automation, AI-powered test automation, Quality Engineering platform, software testing company, enterprise AI testing',
      image: 'https://tesquirel.com/assets/images/home-banner.jpg',
      url: 'https://tesquirel.com/company',
      type: 'website'
    });
  }

  /* Smooth scroll with header offset */
  scrollTo(id: string, event?: Event): void {
    if (event) { event.preventDefault(); }

    const el = document.getElementById(id);
    if (!el) { return; }

    const subNav = document.getElementById('companySubnav');
    const subNavH = subNav ? subNav.offsetHeight : 0;

    const offset = this.headerHeight + subNavH + 20;
    const y = el.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({ top: y, behavior: 'smooth' });
    this.activeSection = id;

    // Update URL hash without jumping
    history.replaceState(null, '', `#${id}`);
  }

  /* Scroll-spy – highlight the section currently in view */
  @HostListener('window:scroll', [])
  onScroll(): void {
    const subNav = document.getElementById('companySubnav');
    const subNavH = subNav ? subNav.offsetHeight : 0;
    const offset = this.headerHeight + subNavH + 40;

    let current = this.sections[0].id;

    for (const s of this.sections) {
      const el = document.getElementById(s.id);
      if (!el) { continue; }
      if (el.getBoundingClientRect().top - offset <= 0) {
        current = s.id;
      }
    }

    if (current !== this.activeSection) {
      this.activeSection = current;
    }
  }

  toggleFaq(i: number): void {
    this.openFaq = this.openFaq === i ? null : i;
  }
}