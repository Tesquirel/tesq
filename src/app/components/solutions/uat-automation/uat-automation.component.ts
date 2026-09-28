import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-uat-automation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './uat-automation.component.html',
  styleUrl: './uat-automation.component.scss'
})
export class UatAutomationComponent implements OnInit, AfterViewInit {

  // ============ IMAGE PATHS ============
  heroImage = 'assets/images/platform/architecturehero.png';
  flowImage = '/assets/images/solution/UAT and Business Journeys.png';

  // ============ HERO CONTENT ============
  heroTitle = 'UAT Automation and Business Journey Validation';
  heroDescription = 'User Acceptance Testing is when software meets business expectations. Still, many UAT programs stay manual, focus on one application and are hard to repeat. TesQuire changes UAT to focus on business intent and full business journeys — linking requirements, scenarios, automation, visual checks, evidence of execution and confidence in release across all systems involved.';

  // ============ WHY SECTION ============
  whyTitle = 'UAT should validate business outcomes';
  whyDescription = 'A business journey rarely stays on one screen or one application. Customer onboarding, claims, policy servicing, payments and order processing can cross interfaces, APIs, databases and legacy systems. Therefore UAT must ask whether the complete business outcome works, not just whether single components pass. TesQuire\'s platform model gives a context for requirements, expected outcomes, test scenarios, execution and evidence.';

  // ============ DETAILED FEATURE SECTIONS ============
  featureSections = [
    {
      title: 'Start with business intent',
      description: 'Requirements, user stories, BRDs, acceptance criteria and business rules form the base for UAT. VeritAI can read this context to find entities, relationships, constraints, scenarios and coverage chances. This helps shift from built UAT scripts to a structured model of what the business expects to work.'
    },
    {
      title: 'Automate repeatable UAT journeys',
      description: 'Breez gives a no-script execution layer across Web, API, Mobile and AS/400 environments. This lets repeatable journeys run in the same way each time while business analysts and testers focus on checking business rules, exceptions and outcomes. Automation does not take away the need for acceptance; it cuts repetitive runs and makes evidence steadier.'
    },
    {
      title: 'Validate experience as well as function',
      description: 'A journey can be functionally correct yet give a poor user experience. Alris adds checks by comparing current and baseline visuals and keeps evidence for review. This is useful when UAT covers presentation, responsive behavior or user-facing changes that normal functional checks may miss.'
    },
    {
      title: 'Give stakeholders evidence',
      description: '@Test and the platform model can link requirements, tests, defects and execution evidence. SakhAI can help translate execution results, failures and run comparisons into summaries that business stakeholders can easily understand.'
    }
  ];

  // ============ WHERE TESQUIRE FITS ============
  whereTitle = 'A practical UAT modernization path';
  whereDescription = 'Organizations can start with one business journey and record the current UAT effort. The journey can then be modeled, automated where repeatable, checked across all systems and measured for cycle-time, coverage and evidence improvement. Successful patterns can then grow to more journeys without needing to replace existing UAT practices all at once.';

  // ============ FAQs ============
  faqs = [
    {
      question: 'Does automation replace business users in UAT?',
      answer: 'No. Automation cuts repetitive runs. Business stakeholders still matter for checking intent, acceptance criteria, exceptions and business outcomes. It empowers them.'
    },
    {
      question: 'Can UAT automation be done across applications?',
      answer: 'Yes. The platform is built for business journeys that cross web, mobile, APIs, legacy and hybrid enterprise landscapes.'
    },
    {
      question: 'What is the difference between UAT and business journey validation?',
      answer: 'UAT confirms business acceptance; business journey validation expands the view to the cross-system flow and the evidence that backs the expected outcome.'
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
    // Progressive enhancement: content is visible by default
    // even if JS/scroll timing fails
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