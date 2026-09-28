import { Component, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-achitecture',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './achitecture.component.html',
  styleUrl: './achitecture.component.scss'
})
export class AchitectureComponent {

  heroImage = 'assets/images/platform/architecturehero.png';
  flowImage = 'assets/images/platform/architecture1.png';

  products = [
    { name: 'VeritAI', tag: 'Test Intelligence', path: '/products/veritai', key: 'veritai' },
    { name: '@Test', tag: 'Test Management', path: '/products/attest', key: 'attest' },
    { name: 'Breez', tag: 'No-Script Automation', path: '/products/breez', key: 'breez' },
    { name: 'AIris', tag: 'Visual Validation', path: '/products/airis', key: 'airis' },
    { name: 'SakhAI', tag: 'Execution Intelligence', path: '/products/sakhai', key: 'sakhai' }
  ];

  layers = [
    {
      number: '01',
      title: 'Business & Requirement Context',
      description: 'The foundation layer that captures what the business expects and needs to achieve.',
      items: [
        'Requirements, user stories, BRDs and process flows',
        'Business rules, acceptance criteria and expected outcomes',
        'Entities, relationships and business journeys',
        'Change context and scope'
      ]
    },
    {
      number: '02',
      title: 'AI Test Intelligence',
      description: 'Interprets business and application context to identify relationships, constraints, scenarios and coverage opportunities.',
      items: [
        'Identify relationships and constraints',
        'Discover scenarios and coverage opportunities',
        'Build Test Intelligence / Knowledge Graph models',
        'Extensible architecture for future AI agents'
      ],
      product: { name: 'VeritAI', path: '/products/veritai', key: 'veritai' }
    },
    {
      number: '03',
      title: 'Test Design & Management',
      description: 'Provides the control plane for designing scenarios, managing test assets and ensuring traceability.',
      items: [
        'Scenario and test design',
        'Requirements-to-test traceability',
        'Role-based workflows and approvals',
        'Test asset organization & dashboards',
        'Effort and capacity visibility'
      ],
      product: { name: '@Test', path: '/products/attest', key: 'attest' }
    },
    {
      number: '04',
      title: 'Automation & Execution',
      description: 'Breez provides the no-script execution layer across supported target systems.',
      items: [
        'No-script execution across target systems',
        'Web, API, Mobile and AS/400 support',
        'Reusable screens, processes, objects and steps',
        'Execution fabric rather than browser-only automation',
        'One-click execution, no scripting required'
      ],
      product: { name: 'Breez', path: '/products/breez', key: 'breez' }
    },
    {
      number: '05',
      title: 'Visual & Experience Validation',
      description: 'AIris adds visual validation by comparing current and baseline visuals to identify presentation differences.',
      items: [
        'Compare current vs baseline visuals',
        'Identify layout and presentation differences',
        'Support multiple devices and resolutions',
        'Preserve evidence for review'
      ],
      product: { name: 'AIris', path: '/products/airis', key: 'airis' }
    },
    {
      number: '06',
      title: 'Execution Intelligence',
      description: 'SakhAI acts as an interpretation layer over execution data to help teams understand failures and patterns.',
      items: [
        'Understand failures and patterns',
        'Cycle summaries and comparisons',
        'No need to inspect raw logs',
        'Interpret execution operational data'
      ],
      product: { name: 'SakhAI', path: '/products/sakhai', key: 'sakhai' }
    },
    {
      number: '07',
      title: 'Evidence, Traceability & Release Confidence',
      description: 'The final layer that connects all evidence to support release decisions with confidence.',
      items: [
        'Step-level and test-level execution evidence',
        'Requirement-to-test-to-defect relationships',
        'Run comparison and reporting',
        'Stakeholder-ready summaries',
        'Audit-oriented evidence',
        'Release quality signals'
      ]
    }
  ];

  applicationTypes = [
    { icon: 'monitor', label: 'Web Applications' },
    { icon: 'mobile', label: 'Mobile Applications' },
    { icon: 'api', label: 'APIs & Integrations' },
    { icon: 'server', label: 'AS/400 / IBM i' },
    { icon: 'legacy', label: 'Mainframe / Legacy' },
    { icon: 'cloud', label: 'Cloud Applications' },
    { icon: 'hybrid', label: 'Hybrid Enterprise Landscapes' }
  ];

  outcomes = [
    { icon: 'target', label: 'Connected Quality Context' },
    { icon: 'eye', label: 'End-to-End Visibility' },
    { icon: 'shield', label: 'Greater Release Confidence' }
  ];

  faqs = [
    {
      question: 'Is the architecture only for cloud applications?',
      answer: 'No. The platform positioning includes modern, legacy and hybrid landscapes.'
    },
    {
      question: 'What is the role of AI?',
      answer: 'AI supports interpretation, test intelligence and execution insight while traceability and evidence remain important around AI-assisted outcomes.'
    },
    {
      question: 'Where does automation fit?',
      answer: 'Automation is one platform layer, not the entire platform.'
    },
    {
      question: 'Can products be used independently?',
      answer: 'Yes. They can address specific needs while remaining complementary platform components.'
    }
  ];

  openFaqIndex: number | null = 0;

  toggleFaq(index: number): void {
    this.openFaqIndex = this.openFaqIndex === index ? null : index;
  }

  isFaqOpen(index: number): boolean {
    return this.openFaqIndex === index;
  }

  // Scroll animation - track visible items
  visibleItems: Set<number> = new Set();

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const elements = document.querySelectorAll('.pipeline__step');
    elements.forEach((el, index) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        this.visibleItems.add(index);
      }
    });
  }

  isVisible(index: number): boolean {
    return this.visibleItems.has(index);
  }
}