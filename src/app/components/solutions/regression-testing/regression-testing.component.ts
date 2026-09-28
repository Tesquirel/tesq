import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-regression-testing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './regression-testing.component.html',
  styleUrl: './regression-testing.component.scss'
})
export class RegressionTestingComponent implements OnInit, AfterViewInit {

  // ============ IMAGE PATHS ============
  heroImage = 'assets/images/platform/architecturehero.png';
  flowImage = 'assets/images/solution/Regression-1.png';

  // ============ HERO CONTENT ============
  heroTitle = 'Regression Testing That Scales With Enterprise Change';
  heroDescription = 'Regression testing gets harder as application environments grow faster than test teams can keep up. New releases can impact web interfaces, APIs, mobile journeys, integrations and legacy systems at once. TesQuirel brings together test intelligence, test management, no-script automation, validation and execution insight. This helps enterprises build a repeatable regression capability around the business journeys that matter most.';

  // ============ WHY SECTION ============
  whyTitle = 'The regression problem is not about execution.';
  whyDescription = 'Large regression suites often have tests, outdated tests or tests that are hard to trace. Teams might know how many tests passed, but not which business journeys actually got coverage or what changed between test runs. A connected regression model starts with business intent, requirements, risk and change context. It then identifies which scenarios need to be tested and links them to test assets and evidence.';

  // ============ DETAILED FEATURE SECTIONS ============
  featureSections = [
    {
      title: 'Risk-driven regression with AI test intelligence',
      description: 'VeritAI adds an intelligence layer that helps interpret requirements, business rules, entities and relationships. This can help find scenarios and coverage opportunities when a requirement, workflow or application area changes. Instead of running the same static test suite every time, teams can use change context and business criticality to make regression selection more meaningful.'
    },
    {
      title: 'Automating regression journeys',
      description: 'Breez enables no-script automation across documented web, API, mobile and AS/400 target systems. Reusable screens, processes, objects and steps support execution. This is especially helpful for high-volume regression journeys where manual repetition uses up tester time. The goal is to automate repeatable validation and keep people focused on analysis, exceptions and risk.'
    },
    {
      title: 'Seeing more than failed regression',
      description: 'Regression failures need context. Alris can detect differences that may not show up as functional failures. SakhAI can interpret execution data, summarize patterns and compare test runs. Platform-level traceability links requirements, tests, defects and evidence. This helps teams answer questions like what changed, which journeys were affected and which failures are still open.'
    },
    {
      title: 'Modern, legacy and hybrid regression',
      description: 'Enterprise regression cannot stop at the application layer. A policy, claims or customer-service journey may rely on web apps, APIs and legacy systems. TesQuirel is built to validate these connected journeys across the application landscape. This allows organizations to gradually bring legacy and hybrid flows into the quality model.'
    },
    {
      title: 'Measuring regression improvement',
      description: 'Useful regression KPIs include baseline execution effort, cycle duration, automated coverage, maintenance effort, escaped defects, failure-analysis time and release-cycle impact. Test counts alone are not enough. A better measure is how much confidence the organization can build in critical business journeys within the available release window.'
    }
  ];

  // ============ WHERE TESQUIREL FITS ============
  whereTitle = 'Where TesQuirel fits';
  whereDescription = 'TesQuirel is suited to enterprises that need to modernize regression testing without discarding existing application knowledge or abandoning legacy systems. Teams can begin with a value, repeatable regression scope, set a baseline, automate the part, and measure cycle time, coverage and maintenance before expanding. Regression can then expand across applications and teams as evidence of value accumulates.';

  // ============ FAQs ============
  faqs = [
    {
      question: 'How should an enterprise start regression automation?',
      answer: 'Start with a value, repeatable regression scope. Set a baseline. Automate the part. Measure cycle time, coverage and maintenance, before expanding.'
    },
    {
      question: 'Can regression include legacy applications?',
      answer: 'Yes. TesQuirel\'s application-landscape model covers AS/400, mainframe/legacy, APIs, web, mobile, cloud and hybrid environments.'
    },
    {
      question: 'Does regression testing need to execute every test every time?',
      answer: 'Not necessarily. A risk- and change-aware approach can focus on journeys and affected areas while keeping broad regression coverage where it matters.'
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