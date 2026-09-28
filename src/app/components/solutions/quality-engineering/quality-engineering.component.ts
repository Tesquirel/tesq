import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quality-engineering',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quality-engineering.component.html',
  styleUrl: './quality-engineering.component.scss'
})
export class QualityEngineeringComponent implements OnInit, AfterViewInit {

  // ============ IMAGE PATHS ============
  heroImage = 'assets/images/solution/End to End Quality Engineering - Hero image (2).png';
  flowImage = 'assets/images/solution/AI Testing and Governance Workflow - Image-2.png';

  // ============ HERO CONTENT ============
  heroTitle = 'From Business Intent to Release Confidence';
  heroDescription = 'Quality Engineering is broader than test execution. It connects business intent, risk, test intelligence, test design, automation, validation, execution insight and evidence into a connected quality model. TesQuirel brings these capabilities together across modern, legacy and hybrid enterprise application landscapes — helping teams move from fragmented testing activity toward measurable, evidence-based quality and greater release confidence.';

  // ============ WHY SECTION ============
  whyTitle = 'The Quality Challenge Is Bigger Than Test Execution';
  whyDescription = 'Enterprise applications rarely exist as a single system. A business journey can move through mobile and web applications, APIs, databases, integration services, cloud platforms and legacy systems. A change at one layer can affect a downstream process, calculation or business transaction. TesQuirel is designed around this reality. The platform connects the activities teams need to understand, design, execute and interpret quality across the application landscape — not simply automate individual test steps.';

  //
  whyTitle1 = 'From Business Intent to Release Confidence';
  whyDescription1 = 'Quality Engineering is broader than test execution. It connects business intent, risk, test intelligence, test design, automation, validation, execution insight and evidence into a connected quality model. TesQuirel brings these capabilities together across modern, legacy and hybrid enterprise application landscapes—helping teams move from fragmented testing activity toward measurable, evidence-based quality and greater release confidence.';

  // ============ DESCRIPTIVE FEATURE SECTIONS ============
  featureSections = [
    {
      title: 'One Quality Engineering Model. Multiple Quality Needs.',
      description: '',
      chips: 'check',
      bullets: [
        'Understand business intent, requirements, risks and expected outcomes.',
        'Turn requirements and business context into meaningful scenarios, test design and coverage.',
        'Manage test assets, workflows, traceability, approvals and reporting.',
        'Automate repeatable journeys across supported Web, Mobile, API and AS/400 environments.',
        'Validate visual and user-experience changes that functional checks may not detect.',
        'Support regression, UAT and cross-system business-journey validation.',
        'Interpret execution results, failures and patterns so teams can act on quality intelligence.',
        'Preserve evidence and traceability from requirements through execution, defects and release decisions.',
        'Extend the quality model toward AI application evaluation, trust, guardrails and accountable outcomes.'
      ]
    },
    {
      title: 'TrustVerse: Extending Quality Engineering to AI',
      description: 'AI-enabled applications introduce a different quality problem: correctness is not limited to deterministic outputs. TrustVerse extends TesQuirel\'s Quality Engineering perspective toward AI systems whose behavior can be probabilistic, context-sensitive, adaptive and capable of taking actions across systems. TrustVerse treats trust as an engineered property rather than a declaration. Accuracy remains important, but AI quality also requires appropriate guardrails, observable evidence, traceable decisions, accountable ownership and continuous evaluation.',
      chips: false,
      bullets: []
    },
    {
      title: 'Across Modern, Legacy and Hybrid Landscapes',
      description: 'TesQuirel\'s Quality Engineering model is positioned for enterprise landscapes in which modern and legacy systems coexist.',
      chips: 'tag',
      bullets: [
        'Modern web and cloud applications',
        'Mobile applications',
        'API and integration ecosystems',
        'AS/400 / IBM environments',
        'Mainframe and legacy systems',
        'Hybrid legacy-to-modern application landscapes',
        'Business journeys crossing multiple application layers'
      ]
    }
  ];

  // ============ NUMBERED STEPS ============
  steps = [
    { number: '1', title: 'Start with one business journey', description: 'Select a high-value journey, application or regression scope and establish the baseline.' },
    { number: '2', title: 'Establish quality context', description: 'Connect requirements, business rules, acceptance criteria, risks and expected outcomes.' },
    { number: '3', title: 'Build the right coverage', description: 'Use test intelligence, test design and management capabilities to create traceable quality assets.' },
    { number: '4', title: 'Automate repeatable work', description: 'Use no-script automation for suitable journeys and supported application technologies.' },
    { number: '5', title: 'Validate experience and outcomes', description: 'Add visual validation, business-journey validation and relevant quality controls.' },
    { number: '6', title: 'Turn execution into insight', description: 'Interpret failures, patterns, comparisons and residual risk rather than test counts alone.' },
    { number: '7', title: 'Preserve evidence', description: 'Connect requirements, tests, execution, defects and evidence to support decisions.' },
    { number: '8', title: 'Expand progressively', description: 'Scale across products, teams and application landscapes as evidence and confidence grow.' }
  ];

  // ============ BUSINESS OUTCOMES ============
  outcomesTitle = 'Business Outcomes';
  outcomes = [
    'Greater release confidence through connected quality information',
    'Less repetitive testing effort through repeatable automation',
    'Better visibility into business-journey coverage and residual risk',
    'Reduced dependence on disconnected testing tools and repositories',
    'Traceability from business intent to execution evidence',
    'Faster interpretation of failures and execution patterns',
    'Broader quality coverage across modern, legacy and hybrid landscapes',
    'A scalable foundation for AI application evaluation and trust engineering'
  ];

  // ============ FAQs ============
  faqs = [
    {
      question: 'What is End-to-End Quality Engineering?',
      answer: 'An approach connecting business intent, quality intelligence, test design, automation, validation, execution insight, traceability and evidence across the software lifecycle.'
    },
    {
      question: 'Is Quality Engineering only for modern cloud applications?',
      answer: 'No. TesQuirel is positioned across modern, legacy and hybrid enterprise landscapes, including Web, Mobile, APIs, AS/400 and mainframe/legacy environments.'
    },
    {
      question: 'How do TesQuirel products work together?',
      answer: 'VeritAI provides test intelligence and design context; @Test supports management and traceability; Breez provides no-script execution; Alris adds visual validation; SakhAI provides execution intelligence; TrustVerse extends the model to trustworthy AI.'
    },
    {
      question: 'Can an enterprise adopt TesQuirel incrementally?',
      answer: 'Yes. A focused business journey, application or regression scope can provide a practical starting point before expanding.'
    },
    {
      question: 'Does TesQuirel replace all existing testing tools?',
      answer: 'The model does not require wholesale replacement as a starting point. It can be adopted progressively around high-value journeys and application scopes.'
    },
    {
      question: 'How does TrustVerse relate to Quality Engineering?',
      answer: 'TrustVerse extends Quality Engineering to AI systems by connecting evaluation with guardrails, evidence, accountability, governance and continuous evaluation.'
    }
  ];

  // ============ FAQ STATE ============
  openFaqIndex: number | null = 0;

  toggleFaq(index: number): void {
    this.openFaqIndex = this.openFaqIndex === index ? null : index;
  }

  isFaqOpen(index: number): boolean {
    return this.openFaqIndex === index;
  }

  // ============ SCROLL ANIMATION ============
  visibleItems: Set<number> = new Set();
  allVisible = false;

  ngOnInit() {
    this.allVisible = true;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.checkVisibility();
    }, 100);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.checkVisibility();
  }

  checkVisibility() {
    const elements = document.querySelectorAll('.detail-section');
    elements.forEach((el, index) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 200) {
        this.visibleItems.add(index);
      }
    });
  }

  isVisible(index: number): boolean {
    if (this.allVisible) return true;
    return this.visibleItems.has(index);
  }
}