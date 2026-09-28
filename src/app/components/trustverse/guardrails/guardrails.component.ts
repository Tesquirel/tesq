import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-guardrails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './guardrails.component.html',
  styleUrl: './guardrails.component.scss'
})
export class GuardrailsComponent implements OnInit, AfterViewInit {

  // ============ IMAGE PATHS ============
  heroImage = 'assets/images/solution/Guardrails-hero.png';
  flowImage = 'assets/images/solution/Guardrails.png';

  // ============ HERO CONTENT ============
  heroTitle = 'Guardrails: Define What AI Must Never Do';
  heroDescription = 'A trusted AI Quality Engineering perspective built around measurable behavior, guardrails, evidence and accountable outcomes. Guardrails establish explicit boundaries around acceptable AI behavior — so that as AI systems and agents take on more responsibility, the enterprise can still control what they do, what they refuse and what they escalate.';

  // ============ WHY SECTION ============
  whyTitle = 'Why Guardrails Matter';
  whyDescription = 'AI systems can produce unexpected outputs even when the underlying model performs well. In agentic systems, risk can be higher because outputs may trigger tools, transactions or downstream workflows. Guardrails establish explicit boundaries around acceptable behavior.';

  // ============ FEATURE SECTIONS (ABOVE FLOW IMAGE) ============
  featureSectionsTop = [
    {
      title: 'Types of Guardrails',
      description: 'Input guardrails constrain requests. Output guardrails validate responses. Data guardrails address permitted sources and sensitive information. Action guardrails constrain tool calls and external actions. Business guardrails enforce rules, thresholds, approvals and exception paths.'
    },
    {
      title: 'Guardrails Must Be Tested',
      description: 'A guardrail that exists only in configuration is not sufficient. It should be evaluated against expected violations, boundary conditions, adversarial variations and legitimate use cases that should not be blocked. Quality Engineering turns guardrail requirements into repeatable scenarios and evidence.'
    }
  ];

  // ============ FEATURE SECTIONS (BELOW FLOW IMAGE) ============
  featureSectionsBottom = [
    {
      title: 'Guardrails for Agents',
      description: 'Agentic AI requires attention to action authorization, tool selection, sequencing, transaction boundaries, escalation and human approval. The evaluation target is the agent\'s behavior across a journey rather than a single response.'
    },
    {
      title: 'Evidence of Control',
      description: 'Organizations should identify when important guardrails were evaluated, whether they triggered as expected and what happened when a boundary was reached. Evidence of control turns guardrails from policy statements into auditable, engineering-grade boundaries.'
    }
  ];

  // ============ WHERE TESQUIREL FITS ============
  whereTitle = 'Where TrustVerse fits';
  whereDescription = 'TrustVerse frames guardrails as engineered controls — not policy statements. Teams can begin with the guardrails that protect the highest-risk AI behaviors, turn them into repeatable test scenarios, capture evidence of what triggered and what was blocked, and expand coverage as AI applications and agents take on more responsibility.';

  // ============ FAQs ============
  faqs = [
    {
      question: 'What is an AI guardrail?',
      answer: 'A defined control that limits or validates AI behavior against safety, business, policy, data or operational boundaries.'
    },
    {
      question: 'Are guardrails only for agentic AI?',
      answer: 'No. They are useful for AI applications generally, but become especially important when systems can use tools or take actions.'
    },
    {
      question: 'How should guardrails be validated?',
      answer: 'Use representative scenarios, boundary cases, negative cases and evidence capture.'
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