import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-framework',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './framework.component.html',
  styleUrl: './framework.component.scss'
})
export class FrameworkComponent implements OnInit, AfterViewInit {

  // ============ IMAGE PATHS ============
  heroImage = 'assets/images/solution/framework-hero.png';
  flowImage = 'assets/images/solution/framework.png';

  // ============ HERO CONTENT ============
  heroTitle = 'The TrustVerse Framework: Engineer Trust Into AI';
  heroDescription = 'A trusted AI Quality Engineering perspective built around measurable behavior, guardrails, evidence and accountable outcomes.';

  // ============ FRAMEWORK STEPS ============
  steps = [
    {
      number: '1',
      title: 'Define Intent',
      description: 'Start with business purpose, users, decisions, workflows, expected outcomes and operating boundaries. Quality cannot be evaluated reliably when intended behavior is ambiguous.'
    },
    {
      number: '2',
      title: 'Model Risk and Expected Behavior',
      description: 'Identify consequential scenarios, failure modes, constraints, business rules and escalation requirements. Establish what acceptable and unacceptable behavior means.'
    },
    {
      number: '3',
      title: 'Evaluate AI Behavior',
      description: 'Build representative scenario suites covering normal, boundary, negative and high-risk cases. Evaluate accuracy and relevance alongside behavior, safety, policy and outcome quality.'
    },
    {
      number: '4',
      title: 'Engineer Guardrails',
      description: 'Define controls for data, inputs, outputs, tools, actions, business rules and approvals. Validate that guardrails work as intended.'
    },
    {
      number: '5',
      title: 'Capture Evidence',
      description: 'Create an evidence chain that supports evaluation, investigation, governance and release decisions.'
    },
    {
      number: '6',
      title: 'Establish Accountability',
      description: 'Define ownership, human oversight, escalation and exception handling. Make responsibility explicit for both the AI capability and consequential outcomes.'
    },
    {
      number: '7',
      title: 'Continuously Evaluate',
      description: 'Re-evaluate when models, prompts, knowledge, tools, data, applications or business conditions change. Treat AI quality as a continuous engineering discipline.'
    }
  ];

  // ============ FROM FRAMEWORK TO ENTERPRISE PRACTICE ============
  practiceTitle = 'From Framework to Enterprise Practice';
  practiceDescription = 'Organizations can begin with one AI use case or high-risk business journey, establish evaluation and evidence practices, then extend the same principles across AI applications and agentic workflows.';

  // ============ FAQs ============
  faqs = [
    {
      question: 'What is the TrustVerse Framework?',
      answer: 'TesQuirel\'s Quality Engineering-oriented framework for building trust into AI through intent, risk, evaluation, guardrails, evidence, accountability and continuous evaluation.'
    },
    {
      question: 'Is the framework only for generative AI?',
      answer: 'No. The principles can be applied to AI applications broadly, with additional emphasis on action validation and autonomy for agentic systems.'
    },
    {
      question: 'How should an organization adopt it?',
      answer: 'Start with a defined AI use case or business journey, establish risk and expected behavior, create evaluations and guardrails, capture evidence and define ownership before expanding.'
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