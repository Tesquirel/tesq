import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-accountability',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './accountability.component.html',
  styleUrl: './accountability.component.scss'
})
export class AccountabilityComponent implements OnInit, AfterViewInit {

  // ============ IMAGE PATHS ============
  heroImage = 'assets/images/solution/accountability-hero.png';
  flowImage = 'assets/images/solution/accountability.png';

  // ============ HERO CONTENT ============
  heroTitle = 'AI Can Decide. Someone Still Owns the Outcome.';
  heroDescription = 'A trusted AI Quality Engineering perspective built around measurable behavior, guardrails, evidence and accountable outcomes. Accountability makes ownership, oversight and escalation explicit — so that as AI takes on more responsibility, a human still owns the outcome.';

  // ============ WHY SECTION ============
  whyTitle = 'The Accountability Problem';
  whyDescription = 'As AI becomes embedded in enterprise workflows, responsibility can become ambiguous. A model may generate a recommendation, an application may apply a rule, an agent may call a tool and a human may approve an exception. Without explicit ownership, failures can fall between organizational boundaries.';

  // ============ FEATURE SECTIONS (ABOVE FLOW IMAGE) ============
  featureSectionsTop = [
    {
      title: 'Define Ownership Before Deployment',
      description: 'For important AI capabilities, identify who owns intended behavior, evaluation criteria, guardrails, operational monitoring, exception handling and final business outcomes.'
    }
  ];

  // ============ FEATURE SECTIONS (BELOW FLOW IMAGE) ============
  featureSectionsBottom = [
    {
      title: 'Human Oversight Must Be Meaningful',
      description: 'Human-in-the-loop should not mean a person merely clicks approve. Effective oversight requires sufficient context, meaningful intervention capability and clear escalation paths.'
    },
    {
      title: 'Accountability Through Evidence',
      description: 'When a consequential outcome occurs, stakeholders need enough information to establish what happened, which controls applied, what human intervention occurred and who was responsible.'
    },
    {
      title: 'Accountability for Agentic Systems',
      description: 'Agents increase the importance of action ownership. Define which actions an agent can perform autonomously, which require approval, which are prohibited and how exceptions are handled.'
    }
  ];

  // ============ WHERE TRUSTVERSE FITS ============
  whereTitle = 'Where TrustVerse fits';
  whereDescription = 'TrustVerse frames accountability as an engineered property of AI Quality Engineering — explicit ownership, meaningful human oversight, traceable evidence and clear escalation paths. Teams can begin by defining ownership for the AI capabilities that matter most, then use evidence and control signals to verify that those responsibilities hold as AI systems and agents take on more responsibility.';

  // ============ RECOMMENDED INTERNAL LINKS ============
  // Paths assume a /trustverse/... route structure. Adjust to match your routing module.
  internalLinks = [
    { label: 'AI Trust & Governance', path: '/ai-governance' },
    { label: 'Evidence',             path: '/evidence' },
    { label: 'Guardrails',           path: '/guardrails' },
    { label: 'Agentic AI',           path: '/agentic-AI' },
    { label: 'Framework',            path: '/framework' }
  ];

  // ============ FAQs ============
  faqs = [
    {
      question: 'Does accountability mean every AI decision needs human approval?',
      answer: 'Not necessarily. Oversight should reflect risk, consequence and operating context.'
    },
    {
      question: 'Who should own an AI system?',
      answer: 'Ownership should be explicit across business, product, engineering, risk and operational responsibilities as appropriate.'
    },
    {
      question: 'How can accountability be tested?',
      answer: 'Define ownership and escalation requirements in the quality model and verify that evidence and control signals support those responsibilities.'
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