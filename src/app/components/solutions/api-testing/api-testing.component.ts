import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-api-testing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './api-testing.component.html',
  styleUrl: './api-testing.component.scss'
})
export class ApiTestingComponent implements OnInit, AfterViewInit {

  // ============ IMAGE PATHS ============
  heroImage = 'assets/images/solution/api-hero.png';
  flowImage = '/assets/images/solution/api-testing.png';
  architectureImage = '/assets/images/solution/api-testing.png';

  // ============ HERO CONTENT ============
  heroTitle = 'API Testing Connected to End-to-End Business Quality';
  heroDescription = 'API testing is the glue that holds enterprise applications together. API testing cannot always be proven by checking single endpoints alone. Authentication, payloads, chaining, dependencies and downstream business behavior all affect whether an integration succeeds. TesQuire places API testing inside a Quality Engineering framework so that teams can confirm services as part of repeatable business journeys and produce release evidence.';

  // ============ WHY SECTION ============
  whyTitle = 'Why API testing needs business context';
  whyDescription = 'Even if an API response is technically correct, the business journey may still be wrong. A successful service response can create downstream data, break a business rule or disrupt the experience in a consuming application. TesQuire links API testing with requirements, scenarios and end-to-end execution so that service quality is evaluated in context.';

  // ============ DETAILED FEATURE SECTIONS ============
  featureSections = [
    {
      title: 'Design meaningful API scenarios',
      description: 'VeritAI offers an AI test intelligence layer that can read business requirements, acceptance criteria, entities, relationships and constraints. This context helps identify service-level scenarios and coverage opportunities. Instead of creating many disconnected endpoint tests, teams can focus on scenarios that represent real business behavior and risk.'
    },
    {
      title: 'Automate API execution',
      description: 'Breez acts as a no-script execution layer across supported target systems, including API, Web, Mobile and AS/400. Repeatable API journeys can therefore join automated regression and end-to-end validation. Teams still need environment access, authentication setup and test design, but programming is not the only way to achieve repeatable execution.'
    },
    {
      title: 'Validate chaining and dependencies',
      description: 'Real enterprise workflows often need multiple service calls in a row. API testing should verify payloads, authentication, dependencies and chaining logic instead of treating each request as an isolated event. Linking these checks to business journeys gives a view of whether an integration works as intended throughout the flow.'
    },
    {
      title: 'Connect API results to evidence',
      description: 'API failures become easier to address when the execution result can be traced back to a scenario, requirement or business journey. @Test and platform traceability can provide this context. Sakhai can summarize execution patterns and comparisons. This makes API quality easier to understand for engineering, QA, product and business stakeholders.'
    }
  ];

  // ============ WHERE TESQUIRE FITS ============
  whereTitle = 'API testing across hybrid landscapes';
  whereDescription = 'Enterprise APIs frequently connect cloud applications, mobile experiences, web applications and legacy systems. TesQuire\'s application-landscape model supports this view, letting API testing join cross-system regression and business journey testing instead of staying as a specialist activity separate from functional quality.';

  // ============ FAQs ============
  faqs = [
    {
      question: 'What does TesQuire API testing cover?',
      answer: 'TesQuire API testing focuses on API payloads, chaining logic, authentication and service behavior — all as part of end-to-end quality validation.'
    },
    {
      question: 'Can API tests be part of regression?',
      answer: 'Yes. Repeatable API journeys can be added to automated regression and cross-system validation.'
    },
    {
      question: 'Does API testing replace UI testing?',
      answer: 'No. API testing checks service behavior and should complement UI, mobile, visual and business journey validation when appropriate.'
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