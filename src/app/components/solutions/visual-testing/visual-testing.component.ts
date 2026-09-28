import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-visual-testing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './visual-testing.component.html',
  styleUrl: './visual-testing.component.scss'
})
export class VisualTestingComponent implements OnInit, AfterViewInit {

  // ============ IMAGE PATHS ============
  heroImage = 'assets/images/solution/Visual and UX Testing - Hero Image.png';
  flowImage = 'assets/images/solution/Visual and UX Testing - Image 2.png';

  // ============ HERO CONTENT ============
  heroTitle = 'AI-powered visual assurance for experiences that must look, behave and feel right.';
  heroDescription = 'Modern applications are delivered across web, mobile, devices, browsers, channels and release versions. Functional testing can confirm that a workflow works; visual and UX testing helps confirm that the experience remains consistent, usable and fit for purpose. TesQuirel\'s Alris extends Quality Engineering into visual validation, helping teams detect meaningful UI changes, validate expected experiences and retain evidence across releases.';

  // ============ WHY SECTION ============
  whyTitle = 'Visual Quality Is Part of Application Quality';
  whyDescription = 'A page can be functionally correct and still fail the customer experience. Layout shifts, missing elements, incorrect content placement, responsive issues, styling changes, broken visual hierarchy and inconsistent screens can introduce risk across releases. Alris brings visual validation into the broader TesQuirel Quality Engineering model so visual checks are connected to application workflows, test execution and release evidence rather than treated as isolated screenshot comparisons.';
  whyTitle1 = 'AI-powered visual assurance for experiences that must look, behave and feel right.';
  whyDescription1 = 'Modern applications are delivered across web, mobile, devices, browsers, channels and release versions. Functional testing can confirm that a workflow works; visual and UX testing helps confirm that the experience remains consistent, usable and fit for purpose. TesQuirels AIris extends Quality Engineering into visual validation, helping teams detect meaningful UI changes, validate expected experiences and retain evidence across releases.';

  // ============ DESCRIPTIVE FEATURE SECTIONS ============
  featureSections = [
    {
      title: 'Alris — Visual Testing Without the Overhead',
      description: 'Alris is TesQuirel\'s visual testing capability for comparing application screens and identifying meaningful visual differences. It supports configurable tolerance and review workflows so teams can distinguish expected change from potential visual defects.',
      chips: 'check',
      bullets: [
        'Visual comparison across application screens and releases',
        'Configurable tolerance to reduce noise from insignificant differences',
        'Visual evidence attached to test outcomes for faster review',
        'Review-oriented workflows for accepting or investigating changes',
        'Integration with functional and regression testing for broader release confidence',
        'Suitable for web and digital application experiences where visual consistency matters'
      ]
    },
    {
      title: 'From Functional Pass to Experience Confidence',
      description: 'TesQuirel treats visual testing as part of the application journey — not a separate activity. Alris can complement functional, API, mobile, data and end-to-end testing by adding a visual validation layer to the same quality process.',
      chips: 'check',
      bullets: [
        'Business journey → functional execution → visual validation → evidence → release decision',
        'Baseline expected screens and compare them against subsequent executions',
        'Focus review on meaningful visual changes instead of manually inspecting every screen',
        'Retain visual evidence alongside execution results and defects',
        'Use visual outcomes as an additional signal in regression and release assessment'
      ]
    },
    {
      title: 'Visual Testing Across the Application Landscape',
      description: 'Visual quality rarely belongs to one screen or one technology. Enterprise journeys can cross mobile, web, APIs, business services and legacy systems before producing the final customer or user experience. TesQuirel\'s broader execution model allows visual validation to sit within this end-to-end quality landscape.',
      chips: 'check',
      bullets: [
        'Web applications and responsive interfaces',
        'Mobile application journeys',
        'Customer portals and self-service experiences',
        'Enterprise workflows and business applications',
        'Regression journeys spanning multiple applications and platforms'
      ]
    }
  ];

  // ============ NUMBERED STEPS ============
  steps = [
    { number: '1', title: 'Establish the baseline', description: 'Identify critical screens, journeys and expected visual states.' },
    { number: '2', title: 'Execute the journey', description: 'Run the functional or automated workflow that produces the screen.' },
    { number: '3', title: 'Compare visually', description: 'Compare the current experience with the approved baseline using defined tolerance.' },
    { number: '4', title: 'Review differences', description: 'Separate expected design changes from potential visual defects.' },
    { number: '5', title: 'Capture evidence', description: 'Retain comparison results and supporting execution evidence.' },
    { number: '6', title: 'Feed release decisions', description: 'Use visual quality signals with functional, regression and risk information.' }
  ];

  // ============ KEY BENEFITS ============
  benefitsTitle = 'Key Benefits';
  benefits = [
    'Detect visual regressions earlier',
    'Reduce manual screen-by-screen inspection',
    'Increase repeatable visual regression coverage',
    'Focus human review on meaningful changes',
    'Connect visual defects to broader test evidence',
    'Support faster, more controlled releases',
    'Extend Quality Engineering from functional correctness to user experience'
  ];

  // ============ WHO SHOULD CONSIDER ============
  audienceTitle = 'Who Should Consider Visual & UX Testing?';
  audiences = [
    'Digital-first enterprises with frequent UI releases',
    'BFSI and insurance applications with customer-facing journeys',
    'Organisations modernising legacy or multi-application workflows',
    'Product companies supporting multiple enterprise configurations',
    'Teams experiencing recurring UI regressions despite strong functional automation',
    'QA/QE leaders seeking broader release confidence without proportional manual effort'
  ];

  // ============ FAQs ============
  faqs = [
    {
      question: 'What is visual testing?',
      answer: 'Visual testing checks whether an application\'s rendered interface matches the expected visual state and identifies unintended changes that functional assertions may not detect.'
    },
    {
      question: 'What is visual regression testing?',
      answer: 'Visual regression testing compares a current application screen against an approved baseline to identify unintended visual changes after code, configuration or integration changes.'
    },
    {
      question: 'How is Alris different from manual screenshot review?',
      answer: 'Alris is intended to make visual comparison repeatable and reviewable, reducing dependence on manually inspecting large numbers of screens while allowing teams to configure tolerance and investigate meaningful differences.'
    },
    {
      question: 'Can visual testing be part of regression testing?',
      answer: 'Yes. Visual checks can be incorporated into broader regression journeys so functional execution and visual validation contribute to the same release-quality assessment.'
    },
    {
      question: 'Does visual testing replace functional testing?',
      answer: 'No. Visual testing complements functional, API, data, integration and end-to-end testing by validating the rendered experience and visual state.'
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