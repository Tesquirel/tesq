import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-bfsi',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './bfsi.component.html',
  styleUrl: './bfsi.component.scss'
})
export class BfsiComponent implements OnInit, AfterViewInit {

  // ============ IMAGE PATHS ============
  heroImage = 'assets/images/platform/architecturehero.png';
  flowImage = 'assets/images/platform/architecture1.png';

  // ============ HERO CONTENT ============
  heroTitle = 'Quality Engineering for Banking & Financial Services';
  heroDescription1 = 'Banking and financial services applications operate across interconnected systems where a change in one component can affect customer journeys, transactions, integrations and downstream processes.';
  heroDescription2 = 'TesQuirel helps BFSI teams validate these business journeys across modern, legacy and hybrid application landscapes — using AI test intelligence, no-script automation, visual validation, execution intelligence and traceable evidence.';
  heroButton = 'Talk to a BFSI Testing Expert';

  // ============ WHY SECTION ============
  whyTitle = 'Why BFSI Testing Needs More Than Test Automation';
  whyParagraphs = [
    'Banking applications rarely exist as isolated systems. A single business journey can involve a customer-facing web or mobile application, APIs, authentication services, databases, third-party integrations and core or legacy systems.',
    'Traditional automation can become difficult to maintain when these journeys span different technologies.',
    'TesQuirel approaches BFSI Quality Engineering around the business journey, connecting requirements and business rules to scenarios, automated execution, results and evidence.',
    'This helps teams focus automation on the journeys that matter most rather than simply increasing the number of automated test cases.'
  ];

  // ============ PRODUCTS ============
  products = [
    { name: '@Test', tag: 'provides requirements, test management, traceability, approvals and audit-oriented reporting.', path: '/products/attest', key: 'attest' },
    { name: 'AIris', tag: 'can support visual and experience validation.', path: '/products/airis', key: 'airis' },
    { name: 'VeritAI', tag: 'provides an intelligent layer for Generating Test Scenarios, Test Cases and Synthetic Test Data protecting Data Privacy.', path: '/products/veritai', key: 'veritai' },
    { name: 'Breez', tag: 'provides no-script automation across supported target systems.', path: '/products/breez', key: 'breez' }
  ];

  // ============ DETAILED FEATURE SECTIONS ============
  featureSections = [
    {
      title: 'Automate Complex Banking Business Journeys',
      subtitle: 'TesQuirel can support automation across:',
      listItems: [
        'Customer on-boarding and account opening',
        'KYC and verification workflows',
        'Account and policy-related transactions',
        'Payments and transaction processing',
        'Loan and lending workflows',
        'Claims and servicing journeys',
        'API and integration validation',
        'Web and mobile applications',
        'Legacy and AS/400 environments',
        'Hybrid application landscapes'
      ],
      description: 'The emphasis is on end-to-end journey validation, including interactions between modern applications and established enterprise systems.',
      hasList: true,
      hasProducts: false
    },
    {
      title: 'AI Test Intelligence Before Automation',
      description: 'Automation is most effective when teams automate the right scenarios.',
      description2: 'VeritAI can help analyze requirements, business rules, acceptance criteria and application context to identify entities, relationships, constraints, scenarios and coverage opportunities.',
      description3: 'This provides a stronger foundation for test design and automation than simply converting an existing collection of manual test cases into scripts.',
      description4: 'The resulting test intelligence can help teams prioritize scenarios based on business relevance while maintaining a relationship between business intent, testing and execution.',
      hasList: false,
      hasProducts: false
    },
    {
      title: 'No-Script Automation Across BFSI Technology Landscapes',
      description: 'Breez provides the no-script automation layer for supported applications, reducing the dependency on programming for repetitive automation workflows.',
      description2: 'For BFSI teams, this can be particularly useful where domain knowledge resides with business-facing testers and functional teams while technical teams manage environments, integrations and automation governance.',
      description3: 'TesQuirel\'s existing insurance success story demonstrates the applicability of its no-code approach to an AS/400-based core insurance ERP, where 400 test cases covering onboarding, servicing and claims were configured and executed as part of a hybrid automation and manual-testing approach.',
      hasList: false,
      hasProducts: false
    },
    {
      title: 'From Test Execution to Release Confidence',
      subtitle: 'BFSI testing needs more than pass/fail results.',
      description: 'TesQuirel Platform encompasses the entire Quality Life Cycle:',
      hasList: false,
      hasProducts: true,
      description2: 'The result is a connected Quality Engineering approach rather than a collection of independent testing tools.'
    },
    {
      title: 'Built for Modernization Without Abandoning Legacy',
      description: 'Many BFSI organizations cannot replace established core systems simply to modernize their customer experience.',
      description2: 'TesQuirel is designed for this reality.',
      description3: 'Teams can start with a high-volume regression suite, a critical customer journey or an application undergoing modernization. Automation can then expand across applications and teams as measurable value is demonstrated.',
      description4: 'This allows organizations to modernize their testing approach without requiring immediate modernization of every underlying application.',
      hasList: false,
      hasProducts: false
    }
  ];

  // ============ EXPECTED OUTCOMES ============
  outcomesTitle = 'Expected BFSI Outcomes';
  outcomesDescription = 'A well-designed Quality Engineering program can help BFSI organizations:';
  outcomes = [
    { title: 'Shorten regression cycles', description: 'Repeat critical validations more efficiently.' },
    { title: 'Increase coverage', description: 'Validate more business journeys across connected systems.' },
    { title: 'Reduce repetitive manual execution', description: 'Move testers toward higher-value validation and analysis.' },
    { title: 'Improve failure visibility', description: 'Make execution results easier to understand and investigate.' },
    { title: 'Strengthen traceability', description: 'Connect requirements, tests, defects, execution and evidence.' },
    { title: 'Improve release confidence', description: 'Give stakeholders clearer evidence for release decisions.' }
  ];

  // ============ FAQs ============
  faqs = [
    {
      question: 'How TesQuirel platform helps in BFSI testing?',
      answer: 'TesQuirel Platform validates banking, financial services and related business applications across functional workflows, integrations, APIs, customer journeys, transactions, legacy systems and user experiences. Thus helping organizations to release their products and enhancements quickly and confidently.'
    },
    {
      question: 'Can TesQuirel test legacy banking systems?',
      answer: 'Yes. TesQuirel\'s Breez automation solution includes AS/400 as a supported target-system type, making it relevant to environments where modern applications coexist with legacy platform.'
    },
    {
      question: 'Can TesQuirel automate end-to-end banking journeys?',
      answer: 'Yes. The platform is designed to connect multiple testing capabilities around business journeys, including web, mobile, API and supported legacy environments.'
    },
    {
      question: 'Is TesQuirel only a test automation platform?',
      answer: 'No. TesQuirel positions Quality Engineering as a broader capability connecting AI test intelligence, test management, automation, visual validation, execution intelligence and evidence.'
    },
    {
      question: 'Can BFSI teams start with a specific application or regression suite?',
      answer: 'Yes. A practical adoption approach is to begin with a high-value regression scope or business journey, establish a baseline and expand automation as measurable value is demonstrated.'
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
    const elements = document.querySelectorAll('.detail-section, .outcome-card');
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