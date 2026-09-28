import { Component, Input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * Tiny inline icon set so this page has zero external icon-library
 * dependency. Add a case here whenever a new `icon` key is used above.
 */
@Component({
  selector: 'app-icon',
  standalone: true,
  template: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
         stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      @switch (name) {
        @case ('bolt') { <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" /> }
        @case ('rocket') { <path d="M12 2c2.5 2 4 5 4 8 0 2-1 4-2 5l-2 2-2-2c-1-1-2-3-2-5 0-3 1.5-6 4-8Z" /><path d="M9 15l-3 3 1 3 3-1" /><path d="M15 15l3 3-1 3-3-1" /><circle cx="12" cy="10" r="1.5" /> }
        @case ('shield') { <path d="M12 3 4 6v6c0 4.5 3.2 7.7 8 9 4.8-1.3 8-4.5 8-9V6l-8-3Z" /><path d="m9 12 2 2 4-4" /> }
        @case ('users') { <circle cx="9" cy="8" r="3" /><path d="M2 20c0-3.3 3-6 7-6s7 2.7 7 6" /><circle cx="17" cy="9" r="2.4" /><path d="M22 20c0-2.6-2-4.8-4.6-5.4" /> }
        @case ('chart') { <path d="M4 20V10" /><path d="M11 20V4" /><path d="M18 20v-7" /><path d="M2 20h20" /> }
        @case ('monitor') { <rect x="3" y="4" width="18" height="12" rx="1.5" /><path d="M8 20h8M12 16v4" /> }
        @case ('mobile') { <rect x="7" y="2" width="10" height="20" rx="2" /><path d="M11 18h2" /> }
        @case ('api') { <rect x="3" y="9" width="6" height="6" rx="1" /><rect x="15" y="9" width="6" height="6" rx="1" /><path d="M9 12h6" /> }
        @case ('server') { <rect x="3" y="4" width="18" height="6" rx="1.2" /><rect x="3" y="14" width="18" height="6" rx="1.2" /><path d="M7 7h.01M7 17h.01" /> }
        @case ('cloud') { <path d="M7 18a4 4 0 0 1-.5-7.97A5 5 0 0 1 16.9 9 4 4 0 0 1 17 18H7Z" /> }
        @case ('target') { <circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r=".6" fill="currentColor" /> }
        @case ('design') { <path d="M4 4h11l5 5v11H4Z" /><path d="M15 4v5h5" /><path d="M8 13h8M8 17h5" /> }
        @case ('gear') { <circle cx="12" cy="12" r="3" /><path d="M19.4 13.5a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.9 2.9l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6V20a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.9-2.9l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H4a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.9-2.9l.1.1a1.7 1.7 0 0 0 1.9.3H10a1.7 1.7 0 0 0 1-1.6V4a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.9 2.9l-.1.1a1.7 1.7 0 0 0-.3 1.9V10a1.7 1.7 0 0 0 1.6 1H20a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.6 1Z" /> }
        @case ('eye') { <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /> }
        @case ('insight') { <circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /><path d="M8.5 11h5M11 8.5v5" /> }
        @case ('evidence') { <path d="M6 3h9l3 3v15H6Z" /><path d="M15 3v3h3" /><path d="M9 12h6M9 16h6M9 8h2" /> }
        @case ('bulb') { <path d="M9 18h6" /><path d="M10 21h4" /><path d="M12 3a6 6 0 0 0-3.6 10.8c.6.5 1.1 1.3 1.1 2.2h5c0-.9.5-1.7 1.1-2.2A6 6 0 0 0 12 3Z" /> }
        @case ('brain') { <path d="M9 4a3 3 0 0 0-3 3v.3A3.5 3.5 0 0 0 5 14a3.5 3.5 0 0 0 3.5 3.5H9V4Z" /><path d="M15 4a3 3 0 0 1 3 3v.3A3.5 3.5 0 0 1 19 14a3.5 3.5 0 0 1-3.5 3.5H15V4Z" /><path d="M9 8h6M9 12h6" /> }
        @case ('doc') { <path d="M7 3h7l4 4v14H7Z" /><path d="M14 3v4h4" /><path d="M9.5 12h5M9.5 15.5h5" /> }
        @default { <circle cx="12" cy="12" r="9" /> }
      }
    </svg>
  `,
  styles: [`
    :host { display: inline-flex; }
    svg { width: 100%; height: 100%; }
  `]
})
export class IconComponent {
  @Input() name = '';
}

interface ProductLink {
  name: string;
  tag: string;
  route: string;
  accent: 'veritai' | 'breez' | 'airis' | 'attest' | 'sakhai';
}

interface IconItem {
  icon: string;
  label: string;
}

interface PipelineStep {
  icon: string;
  title: string;
  sub: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

interface PlatformNavItem {
  title: string;
  desc: string;
  route: string;
}

@Component({
  selector: 'app-outcomes',
  standalone: true,
  imports: [RouterLink, IconComponent],
  templateUrl: './outcomes.component.html',
  styleUrl: './outcomes.component.scss'
})
export class OutcomesComponent {

  /** Hero quick stats */
  readonly heroStats: IconItem[] = [
    { icon: 'bolt', label: 'Faster Time to Market' },
    { icon: 'shield', label: 'Higher Quality Releases' },
    { icon: 'users', label: 'Happier Customers' },
    { icon: 'chart', label: 'Greater Business Impact' }
  ];

  /** "One platform. Multiple quality needs" checklist */
  readonly qualityNeeds: string[] = [
    'Understand requirements, business intent and test scope.',
    'Manage test assets with traceability.',
    'Automate execution without requiring every tester to write scripts.',
    'Validate web, mobile, API and selected legacy application environments.',
    'Detect user-experience changes that functional checks can miss.',
    'Interpret execution. Turn test data into actionable insight.',
    'Preserve evidence, reporting and traceability for business and delivery teams.',
    'Validate Business Journeys across applications seamlessly and not application testing in Silos.'
  ];

  /** Target system types the platform is built for */
  readonly targetSystems: IconItem[] = [
    { icon: 'monitor', label: 'Web Applications' },
    { icon: 'mobile', label: 'Mobile Applications' },
    { icon: 'api', label: 'API Integrations' },
    { icon: 'server', label: 'Legacy Systems (AS/400)' },
    { icon: 'cloud', label: 'Hybrid Environments' }
  ];

  /** The five connected products — real routes, not flat images */
  readonly products: ProductLink[] = [
    { name: 'VeritAI', tag: 'Test Intelligence & Design', route: '/products/veritai', accent: 'veritai' },
    { name: 'Breez', tag: 'No-Script Automation', route: '/products/breez', accent: 'breez' },
    { name: 'AIris', tag: 'Visual Validation', route: '/products/airis', accent: 'airis' },
    { name: '@Test', tag: 'Test Management & Traceability', route: '/products/attest', accent: 'attest' },
    { name: 'SakhAI', tag: 'Execution Intelligence', route: '/products/sakhai', accent: 'sakhai' }
  ];

  /** One operating model for quality */
  readonly operatingModel: IconItem[] = [
    { icon: 'target', label: 'Understand what needs to be tested' },
    { icon: 'design', label: 'Design the coverage' },
    { icon: 'gear', label: 'Execute it efficiently' },
    { icon: 'eye', label: 'Validate what users see' },
    { icon: 'insight', label: 'Understand what happened' },
    { icon: 'evidence', label: 'Retain evidence of quality' }
  ];

  /** End-to-end pipeline strip */
  readonly pipeline: PipelineStep[] = [
    { icon: 'bulb', title: 'Business Intent', sub: 'What needs to be achieved' },
    { icon: 'brain', title: 'Test Intelligence', sub: 'Understand and design coverage' },
    { icon: 'gear', title: 'No-Script Automation', sub: 'Execute efficiently across environments' },
    { icon: 'eye', title: 'Visual Validation', sub: 'Validate beyond functional' },
    { icon: 'insight', title: 'Execution Insight', sub: 'Understand what happened' },
    { icon: 'doc', title: 'Evidence & Traceability', sub: 'Retain proof and reporting' }
  ];

  /** Release confidence outcome stats */
  readonly outcomeStats: IconItem[] = [
    { icon: 'rocket', label: 'Faster Time to Market' },
    { icon: 'shield', label: 'Higher Quality Releases' },
    { icon: 'users', label: 'Happier Customers' },
    { icon: 'chart', label: 'Greater Business Impact' }
  ];

  /** Other platform pages to jump to */
  readonly platformNav: PlatformNavItem[] = [
    {
      title: 'How It Works',
      desc: 'Understand the operating flow from business intent to release confidence.',
      route: '/Platform/How-it-works'
    },
    {
      title: 'Architecture',
      desc: 'Understand how intelligence, management, automation and validation connect.',
      route: '/Platform/achitecture'
    },
    {
      title: 'Key Capabilities',
      desc: 'See the platform capabilities in detail.',
      route: '/Platform/key-capabilities'
    }
  ];

  readonly faqs: FaqItem[] = [
    {
      question: 'What is the TesQuirel Platform?',
      answer: 'An AI-powered Quality Engineering platform connecting test intelligence, test management, automation, visual validation and execution insight.'
    },
    {
      question: 'Does TesQuirel support legacy applications?',
      answer: 'Yes. Breez execution explicitly includes AS/400 alongside Web, API and Mobile.'
    },
    {
      question: 'Is TesQuirel for automation?',
      answer: 'No. The platform also covers requirements/test management, intelligence, visual validation and execution insight.'
    },
    {
      question: 'Who uses the platform?',
      answer: 'QA/QE, business analysts, engineering, product and stakeholders responsible for release quality.'
    }
  ];

  /** Index of the currently open FAQ, or null when all are collapsed */
  readonly openFaqIndex = signal<number | null>(0);

  toggleFaq(index: number): void {
    this.openFaqIndex.update(current => (current === index ? null : index));
  }

  isFaqOpen(index: number): boolean {
    return this.openFaqIndex() === index;
  }
}