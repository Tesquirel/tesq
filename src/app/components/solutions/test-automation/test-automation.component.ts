import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-test-automation',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './test-automation.component.html',
  styleUrl: './test-automation.component.scss'
})
export class TestAutomationComponent implements OnInit, AfterViewInit {

  // ============ IMAGE PATHS ============
  heroImage = 'assets/images/solution/testautomationhero.png';
  flowImage = 'assets/images/solution/testautomationhero.png';
  architectureImage = 'assets/images/solution/testautomation.png';

  // ============ HERO CONTENT ============
  heroTitle = 'Test Automation for Modern, Legacy and Hybrid Enterprises';
  heroSubtitle = 'Enterprise test automation should reduce execution without creating a new maintenance problem.';
  heroDescription = 'TesQuirel connects AI test intelligence, test design, no-script automation, visual validation, execution intelligence and evidence so teams can automate business-journeys across complex application landscapes. The objective is not simply to automate test cases; it is to automate the right journeys, execute them repeatedly and provide evidence that helps teams make better release decisions.';

  // ============ WHY SECTION ============
  whyTitlehero='Test Automation for Modern, Legacy and Hybrid Enterprises';
  whyDescriptionhero='Enterprise test automation should reduce execution without creating a new maintenance problem. TesQuirel connects AI test intelligence, test design, no-script automation, visual validation, execution intelligence and evidence so teams can automate business- journeys across complex application landscapes. The objective is not simply to automate test cases; it is to automate the right journeys execute them repeatedly and provide evidence that helps teams make better release decisions.'
  whyTitle = 'Why enterprise test automation needs a broader model';
  whyDescription = 'Traditional automation often starts with a browser, a scripting framework or a collection of test cases. That can work for applications but enterprise business processes rarely stay inside one technology boundary. A customer onboarding journey may cross a web application, APIs, databases, mobile interfaces and legacy systems. TesQuirel treats automation as an execution capability within a Quality Engineering platform allowing teams to relate requirements and business intent to scenarios, automated journeys, execution results and release evidence.';

  // ============ DETAILED FEATURE SECTIONS ============
  featureSections = [
    {
      title: 'AI-assisted test intelligence before automation',
      description: 'Automation is most valuable when the scenarios being automated represent business risk. VeritAI helps interpret requirements, acceptance criteria, business rules and application context to identify entities, relationships, constraints, scenarios and coverage opportunities. This creates a starting point than simply converting existing manual test cases into scripts. The resulting test intelligence can guide scenario design, test data preparation and automation priorities while preserving traceability to the business intent behind the test.'
    },
    {
      title: 'No-script automation with enterprise reach',
      description: 'Breez provides the no-script execution layer for supported target systems reducing the need for programming to become the bottleneck for testing. Its documented target-system coverage includes Web, API, Mobile and AS/400 with screens, processes, objects and steps. This enables business-facing testers and domain experts to contribute to automation while technical teams retain control over environments, integrations and execution strategy.'
    },
    {
      title: 'From automation to release confidence',
      description: 'Automation becomes more valuable when execution results are understandable and auditable. Alris can add validation for presentation and experience changes. SakhAI can help interpret execution data, failures, patterns, summaries and run comparisons. @Test and the wider platform model provide test organization, traceability and evidence. Together these capabilities turn automation from a collection of scripts into a quality signal across critical business journeys.'
    }
  ];

  // ============ KEY PLATFORM CAPABILITIES ============
  keyCapabilities = [
    {
      icon: 'brain',
      title: 'VeritAI',
      subtitle: 'Test Intelligence & Design',
      description: 'AI-assisted interpretation of requirements, acceptance criteria and business rules to identify coverage opportunities and guide test design.',
      route: '/products/veritai',
      displayLink: 'veritai',
      colorKey: 'veritai'
    },
    {
      icon: 'code',
      title: 'Breez',
      subtitle: 'No-Script Automation',
      description: 'Automate Web, API, Mobile and AS/400 systems without writing automation code for every workflow.',
      route: '/products/breez',
      displayLink: 'breez',
      colorKey: 'breez'
    },
    {
      icon: 'eye',
      title: 'Alris',
      subtitle: 'Visual Validation',
      description: 'Detect presentation and experience changes that may not appear as functional failures.',
      route: '/products/airis',
      displayLink: 'airis',
      colorKey: 'airis'
    },
    {
      icon: 'link',
      title: '@Test',
      subtitle: 'Test Management & Traceability',
      description: 'Organize tests, maintain traceability and capture evidence for audit-ready release decisions.',
      route: '/products/attest',
      displayLink: 'attest',
      colorKey: 'attest'
    },
    {
      icon: 'chart',
      title: 'SakhAI',
      subtitle: 'Execution Intelligence',
      description: 'Interpret execution data, failures, patterns and run comparisons to provide actionable insights.',
      route: '/products/sakhai',
      displayLink: 'sakhai',
      colorKey: 'sakhai'
    }
  ];

  // ============ EXPECTED OUTCOMES ============
  expectedOutcomes = [
    {
      icon: 'repeat',
      title: 'Improved Repeatability',
      description: 'Designed automation programs improve repeatability of test execution across cycles.'
    },
    {
      icon: 'clock',
      title: 'Shortened Regression Cycles',
      description: 'Reduce the time required to run regression suites across complex application landscapes.'
    },
    {
      icon: 'expand',
      title: 'Broadened Coverage',
      description: 'Extend testing beyond the most accessible application layer to include APIs, mobile and legacy systems.'
    },
    {
      icon: 'reduction',
      title: 'Reduced Manual Effort',
      description: 'Minimize repetitive manual execution activities and free testers for higher-value exploration.'
    },
    {
      icon: 'understanding',
      title: 'Easier Failure Understanding',
      description: 'Failures become easier to understand with contextual evidence and interpreted execution data.'
    },
    {
      icon: 'decision',
      title: 'Defensible Release Decisions',
      description: 'Release decisions become easier to defend with connected evidence and business journey traceability.'
    }
  ];

  // ============ WHERE TESQUIREL FITS ============
  whereTitle = 'Where TesQuirel fits';
  whereDescription = 'TesQuirel is suited to enterprises that need to modernize automation without discarding existing application knowledge or abandoning legacy systems. Teams can begin with a high-volume regression scope, a business journey or an application undergoing change. The initial baseline can measure execution effort, coverage and maintenance. Automation can then expand across applications and teams as evidence of value accumulates.';

  // ============ FAQs ============
  faqs = [
    {
      question: 'What does no-script test automation mean?',
      answer: 'It means repeatable automation can be configured without requiring testers to write automation code for every workflow. Application access, environment setup and sound test design are still required.'
    },
    {
      question: 'Can TesQuirel automate legacy applications?',
      answer: 'Yes. Breez can automate AS/400 among supported target-system types. The platform is designed for modern, legacy and hybrid enterprise landscapes.'
    },
    {
      question: 'Is TesQuirel only for functional testing?',
      answer: 'No. The platform connects automation with regression, API, mobile, visual validation, execution intelligence, traceability and evidence.'
    },
    {
      question: 'How does TesQuirel handle hybrid environments?',
      answer: 'TesQuirel is specifically designed for modern, legacy and hybrid enterprise landscapes. It can automate business journeys that cross multiple technology boundaries including web, API, mobile and AS/400 systems within a single platform.'
    },
    {
      question: 'What is the primary objective of test automation with TesQuirel?',
      answer: 'The objective is not simply to automate test cases; it is to automate the right journeys, execute them repeatedly and provide evidence that helps teams make better release decisions.'
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
    const elements = document.querySelectorAll('.capability-card, .outcome-card');
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