import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mainframe-testing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mainframe-testing.component.html',
  styleUrl: './mainframe-testing.component.scss'
})
export class MainframeTestingComponent implements OnInit, AfterViewInit {

  // ============ IMAGE PATHS ============
  heroImage = 'assets/images/platform/architecturehero.png';
  flowImage = 'assets/images/platform/architecture1.png';

  // ============ HERO CONTENT ============
  heroTitle = 'Legacy and Mainframe Testing Without a Quality Silo';
  heroDescription = 'Legacy applications often remain important to enterprise operations as modern web, mobile and cloud layers change around them. Treating legacy testing as a quality silo creates blind spots in end-to-end business journeys. TesQuire brings legacy and modern environments into a Quality Engineering model so organizations can automate repeatable validation while keeping visibility across the complete application landscape.';

  // ============ WHY SECTION ============
  whyTitle = 'Why legacy testing matters to journeys';
  whyDescription = 'A modern customer experience may depend on transactions, rules or data processed by an AS/400, IBM i or mainframe system. A web release can therefore introduce risk even when the legacy application itself has not changed. Testing only the modern interface can miss failures in the integrated business flow. TesQuire looks at the landscape as a system rather than a collection of technology silos.';

  // ============ DETAILED FEATURE SECTIONS ============
  featureSections = [
    {
      title: 'AI test intelligence across business context',
      description: 'Legacy applications are often difficult to understand from test assets alone. VeritAI can use requirements, business rules, entities, relationships and journey context to identify scenarios and coverage opportunities. This helps teams think about legacy validation in terms of business outcomes rather than treating the underlying technology as the only organizing principle.'
    },
    {
      title: 'No-script automation for AS/400 and hybrid flows',
      description: 'AS/400 is a primary supported target-system type by Breez, alongside Web, API and Mobile. Reusable screens, processes, objects and steps support execution. This creates an opportunity to include legacy transactions in automated regression and end-to-end journeys instead of relying entirely on manual validation.'
    },
    {
      title: 'Connect legacy execution to evidence',
      description: 'Legacy test execution becomes more useful when results can be related to requirements, tests and business journeys. Platform-level traceability supports organization and evidence while SakhAI can help teams interpret execution data and run comparisons. This creates an understandable quality narrative for both technical and business stakeholders.'
    },
    {
      title: 'Modernization without replacement',
      description: 'Legacy testing does not require legacy replacement. A practical approach is to identify high-value journeys where legacy systems create regression risk, automate stable repeatable checks and connect the results to the quality model. As applications modernize, the same journey context can continue to validate the interaction between new components.'
    }
  ];

  // ============ WHERE TESQUIRE FITS ============
  whereTitle = 'Enterprise outcomes';
  whereDescription = 'The goal is not to make a legacy system look modern. It is to make its quality contribution visible, repeatable and connected. Enterprises can improve regression coverage, reduce execution effort, detect cross-system failures earlier and provide stronger evidence that critical business processes continue to work.';

  // ============ FAQs ============
  faqs = [
    {
      question: 'Does TesQuire support AS/400 testing?',
      answer: 'Yes. Current Breez documentation lists AS/400 as a supported target-system type.'
    },
    {
      question: 'Is legacy testing separate from web and API testing?',
      answer: 'It can be handled as a capability, but TesQuire\'s platform model is designed to connect legacy execution with web, mobile, API and cloud journeys.'
    },
    {
      question: 'Can legacy systems be automated without replacing them?',
      answer: 'Yes. Automation and quality modernization can be introduced around selected journeys without requiring replacement of the underlying legacy platform.'
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