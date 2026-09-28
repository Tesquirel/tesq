import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mobile-testing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mobile-testing.component.html',
  styleUrl: './mobile-testing.component.scss'
})
export class MobileTestingComponent implements OnInit, AfterViewInit {

  // ============ IMAGE PATHS ============
  heroImage = 'assets/images/solution/mobile-Testing.png';
  flowImage = 'assets/images/solution/Mobile.png';

  // ============ HERO CONTENT ============
  heroTitle = 'Mobile Testing Connected to the Enterprise Journey';
  heroDescription = 'Mobile applications do not work in isolation. A single mobile transaction can involve calling APIs, updating enterprise systems and relying on legacy processes before returning a result to the user. TesQuirel connects test automation with AI test intelligence, API validation, visual validation, execution insight and traceability. This allows teams to test journeys as part of a broader enterprise quality model.';

  // ============ WHY SECTION ============
  whyTitle = 'Mobile quality is more than device interaction';
  whyDescription = 'A mobile application might pass UI checks but still fail due to issues in a service, transaction or legacy process. Enterprise mobile testing must go beyond the app itself. It needs to consider application behavior, integrations, business rules, data and the overall user experience. TesQuirel\'s platform approach brings these layers around the business journey instead of treating the mobile app as a standalone endpoint.';

  // ============ DETAILED FEATURE SECTIONS ============
  featureSections = [
    {
      title: 'Start with business journeys',
      description: 'VeritAI can interpret business intent, requirements, acceptance criteria and business rules. It identifies test scenarios and coverage gaps. This helps teams focus on journeys that matter most to customers and operations — such as onboarding, servicing, payments, claims or transactions — rather than relying only on a list of screens.'
    },
    {
      title: 'Automate repeatable mobile flows',
      description: 'Breez documentation lists Mobile as a supported target-system type. The platform can therefore place mobile journey automation side by side with Web, API and AS/400 execution. Repeatable flows can be set up for regression testing and release validation. This reduces the need for manual work and frees up human testers to focus on exploratory and risk-based testing.'
    },
    {
      title: 'Validate what users see',
      description: 'Changes in apps can cause visual or responsive issues even when the core functionality works. Alris supports validation by comparing current visuals against a baseline. It detects presentation differences and keeps evidence of changes. This adds a layer for user-facing quality — especially when mobile releases include layout, content or rendering updates.'
    },
    {
      title: 'Connect execution data to insight',
      description: 'Mobile test failures often need to be analyzed across device behavior, services and application state. SakhAI helps interpret execution data, spot patterns and summarize run comparisons. Platform-level traceability links tests and evidence back to the original requirements and defects, giving teams a more complete picture of release quality.'
    }
  ];

  // ============ WHERE MOBILE TESTING FITS ============
  whereTitle = 'Mobile testing in enterprises';
  whereDescription = 'For enterprises that use cloud, web, APIs and legacy systems, mobile testing becomes a cross-system quality challenge. TesQuirel is built to bring all these environments into one conversation. The result is a mobile testing capability that can scale from journeys to large-scale enterprise regression and business journey validation.';

  // ============ FAQs ============
  faqs = [
    {
      question: 'Does TesQuirel support mobile test automation?',
      answer: 'Yes. Current Breez documentation identifies Mobile as a supported target-system type.'
    },
    {
      question: 'Can mobile tests validate APIs and backend systems?',
      answer: 'Mobile testing can be part of end-to-end journeys that include APIs and other enterprise systems. The exact scope depends on the target environment.'
    },
    {
      question: 'Why combine visual testing?',
      answer: 'Functional success does not guarantee a mobile experience. Visual validation adds checks for presentation and user-facing differences.'
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