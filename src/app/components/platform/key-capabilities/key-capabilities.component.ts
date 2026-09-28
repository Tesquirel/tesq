import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Capability {
  title: string;
  description: string;
  icon: string;
  product?: string;
  productPath?: string;
  productKey?: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-key-capabilities',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './key-capabilities.component.html',
  styleUrl: './key-capabilities.component.scss'
})
export class KeyCapabilitiesComponent {

  heroImage = 'assets/images/platform/keycapabilityhero.png';
  flowImage = 'assets/images/platform/keycapability1.png';

  capabilities: Capability[] = [
    {
      title: 'AI Test Intelligence',
      description: 'Understand requirements, entities, business rules, relationships and testing context to identify meaningful scenarios and coverage opportunities.',
      icon: 'brain',
      product: 'VeritAI',
      productPath: '/products/veritai',
      productKey: 'veritai'
    },
    {
      title: 'Requirements & Test Management',
      description: 'Capture requirements and BRDs, manage workflows, organize test assets, maintain traceability and provide project-level visibility.',
      icon: 'doc',
      product: '@Test',
      productPath: '/products/attest',
      productKey: 'attest'
    },
    {
      title: 'No-Script Test Automation',
      description: 'Configure and execute repeatable automation without making programming the prerequisite for every tester. Breez supports Web, API, Mobile and AS/400 target systems.',
      icon: 'gear',
      product: 'Breez',
      productPath: '/products/breez',
      productKey: 'breez'
    },
    {
      title: 'API Testing',
      description: 'Validate API payloads, chaining logic, authentication and service behavior as part of end-to-end quality validation.',
      icon: 'api',
      product: 'Breez',
      productPath: '/products/breez',
      productKey: 'breez'
    },
    {
      title: 'Mobile Testing',
      description: 'Automate supported mobile application journeys and manage device/application configuration as part of repeatable execution.',
      icon: 'mobile',
      product: 'Breez',
      productPath: '/products/breez',
      productKey: 'breez'
    },
    {
      title: 'Legacy & AS/400 Testing',
      description: 'Include legacy application journeys in automation and regression coverage instead of treating legacy systems as a separate quality silo.',
      icon: 'server',
      product: 'Breez + Solutions',
      productPath: '/products/breez',
      productKey: 'breez'
    },
    {
      title: 'Visual Validation',
      description: 'Compare current builds with visual baselines, identify layout and presentation changes and preserve evidence for review.',
      icon: 'eye',
      product: 'AIris',
      productPath: '/products/airis',
      productKey: 'airis'
    },
    {
      title: 'Execution Intelligence',
      description: 'Turn execution logs, results, failures and run comparisons into understandable summaries and actionable insights.',
      icon: 'insight',
      product: 'SakhAI',
      productPath: '/products/sakhai',
      productKey: 'sakhai'
    },
    {
      title: 'Traceability & Evidence',
      description: 'Connect requirements, tests, defects, execution results and evidence to support controlled release decisions and audit needs.',
      icon: 'evidence',
      product: '@Test + Platform',
      productPath: '/products/attest',
      productKey: 'attest'
    },
    {
      title: 'Business Journey Validation',
      description: 'Validate the complete flow across screens, services, applications and systems instead of checking isolated technical components only.',
      icon: 'target',
      product: 'Platform',
      productPath: '/Platform/How-it-works',
      productKey: 'platform'
    }
  ];

  applicationLandscapes = [
    { icon: 'monitor', label: 'Web Applications', desc: 'Functional, regression, API and visual validation' },
    { icon: 'mobile', label: 'Mobile Applications', desc: 'Application and journey automation' },
    { icon: 'api', label: 'API / Integrations', desc: 'Payload, chaining and service validation' },
    { icon: 'server', label: 'AS/400 / IBM i', desc: 'Legacy application automation and regression' },
    { icon: 'hybrid', label: 'Hybrid Landscapes', desc: 'Cross-system business journey validation' },
    { icon: 'cloud', label: 'Cloud Applications', desc: 'Automated and visual release validation' }
  ];

  businessOutcomes = [
    { icon: 'rocket', label: 'Faster Releases' },
    { icon: 'shield', label: 'Higher Quality' },
    { icon: 'chart', label: 'Improved Productivity' },
    { icon: 'users', label: 'Happier Customers' }
  ];

  faqs: FaqItem[] = [
    {
      question: 'Can teams adopt one capability first?',
      answer: 'Yes. Product and solution pages should make individual entry points clear while showing how each capability connects to the platform.'
    },
    {
      question: 'Does no-script mean no technical setup?',
      answer: 'No. Automation still requires application understanding, environment access and appropriate test design; the goal is to reduce script development as the bottleneck.'
    },
    {
      question: 'Does the platform support visual testing separately?',
      answer: 'Yes. AIris is positioned specifically for visual quality and evidence.'
    },
    {
      question: 'How is execution data used?',
      answer: 'Execution data can be reviewed through reports and interpreted through SakhAI.'
    }
  ];

  openFaqIndex: number | null = 0;

  toggleFaq(index: number): void {
    this.openFaqIndex = this.openFaqIndex === index ? null : index;
  }

  isFaqOpen(index: number): boolean {
    return this.openFaqIndex === index;
  }

  // Scroll animation
  visibleItems: Set<number> = new Set();

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const elements = document.querySelectorAll('.capability-card, .landscape-card');
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