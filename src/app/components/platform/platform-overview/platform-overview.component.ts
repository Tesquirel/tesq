import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-platform-overview',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './platform-overview.component.html',
  styleUrl: './platform-overview.component.scss'
})
export class PlatformOverviewComponent implements OnInit, AfterViewInit {

  heroImage = 'assets/images/platform/businessoutcomeshero.png';
  flowImage = 'assets/images/platform/businessoutcomes1.png';

  outcomes = [
    {
      icon: 'rocket',
      title: 'Faster Release Validation',
      description: 'Automate repeatable regression and validation activities so teams spend less time repeating execution and more time addressing change and risk.'
    },
    {
      icon: 'globe',
      title: 'Broader Coverage Across the Landscape',
      description: 'Bring web, mobile, API and legacy systems into the quality conversation instead of validating only the most accessible application layer.'
    },
    {
      icon: 'code',
      title: 'Lower Dependency on Scripting',
      description: 'No-script automation can make repeatable automation more accessible to testers and business-facing teams while reducing the effort associated with maintaining traditional scripts.'
    },
    {
      icon: 'eye',
      title: 'Better Visibility',
      description: 'Centralized management, execution reporting, visual evidence and interpreted insights give stakeholders a clearer view of what happened during a test cycle.'
    },
    {
      icon: 'link',
      title: 'Stronger Traceability',
      description: 'Connect requirements, tests, defects and evidence so teams can explain why a release is considered ready and where coverage remains incomplete.'
    },
    {
      icon: 'alert',
      title: 'Earlier Detection of Experience Defects',
      description: 'Visual validation identifies presentation and usability issues that may not appear as functional failures.'
    },
    {
      icon: 'data',
      title: 'More Useful Test Data',
      description: 'Instead of leaving execution results buried in logs and reports, execution intelligence turns results into summaries, comparisons and actionable observations.'
    },
    {
      icon: 'decision',
      title: 'More Informed Release Decisions',
      description: 'The goal is to move beyond test-count reporting toward evidence-based confidence in the business journeys that matter.'
    }
  ];

  steps = [
    {
      number: '01',
      title: 'Start Small',
      description: 'Begin with a focused business journey, application or regression problem that is repeatable and high-value.'
    },
    {
      number: '02',
      title: 'Integrate and Connect',
      description: 'Connect the platform with existing tools and workflows to create a unified quality model.'
    },
    {
      number: '03',
      title: 'Automate Repeatable Work',
      description: 'Automate high-value, repeatable scenarios and regression suites to reduce manual effort.'
    },
    {
      number: '04',
      title: 'Expand Across Applications',
      description: 'Gradually expand coverage across more applications, systems and business journeys.'
    }
  ];

  executiveOutcomes = [
    { icon: 'rocket', label: 'Release with Greater Confidence' },
    { icon: 'warning', label: 'Understand Quality Risk Sooner' },
    { icon: 'efficiency', label: 'Reduce Repetitive Effort' },
    { icon: 'journey', label: 'Keep Critical Business Journeys Working' }
  ];

  faqs = [
    {
      question: 'How should ROI be measured?',
      answer: 'Measure baseline regression effort, automation coverage, execution time, maintenance effort, escaped defects and release-cycle impact for the selected scope.'
    },
    {
      question: 'Does TesQuirel guarantee zero defects?',
      answer: 'No. The platform is intended to improve coverage, repeatability, visibility and evidence; no testing platform can guarantee zero defects.'
    },
    {
      question: 'Can outcomes be measured by business journey?',
      answer: 'Yes. Business-journey-level measures are recommended where a process crosses multiple systems.'
    },
    {
      question: 'How should customers start?',
      answer: 'Begin with a high-value, repeatable journey or regression scope, establish a baseline, automate and measure the change before expanding.'
    }
  ];

  openFaqIndex: number | null = 0;

  toggleFaq(index: number): void {
    this.openFaqIndex = this.openFaqIndex === index ? null : index;
  }

  isFaqOpen(index: number): boolean {
    return this.openFaqIndex === index;
  }

  // Scroll animation - Initialize all as visible
  visibleItems: Set<number> = new Set();
  allVisible = false;

  ngOnInit() {
    // Set all items as visible on init (so they show immediately)
    // This prevents the "cards not showing" issue
    this.allVisible = true;
  }

  ngAfterViewInit() {
    // Force check after view is ready
    setTimeout(() => {
      this.checkVisibility();
    }, 100);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.checkVisibility();
  }

  checkVisibility() {
    const elements = document.querySelectorAll('.outcome-card, .step-card, .executive-card');
    elements.forEach((el, index) => {
      const rect = el.getBoundingClientRect();
      // More generous threshold - show if any part is visible or within 200px
      if (rect.top < window.innerHeight + 200) {
        this.visibleItems.add(index);
      }
    });
  }

  isVisible(index: number): boolean {
    // If allVisible is true, return true immediately (fixes the issue)
    if (this.allVisible) return true;
    return this.visibleItems.has(index);
  }
}