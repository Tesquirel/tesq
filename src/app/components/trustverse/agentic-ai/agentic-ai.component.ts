import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-agentic-ai',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './agentic-ai.component.html',
  styleUrl: './agentic-ai.component.scss'
})
export class AgenticAiComponent implements OnInit, AfterViewInit {

  // ============ IMAGE PATHS ============
  heroImage = 'assets/images/solution/agentic-ai-hero.png';
  flowImage = 'assets/images/solution/agentic-ai.png';

  // ============ HERO CONTENT ============
  heroTitle = 'Agentic AI Changes What Quality Means';
  heroDescription = 'A trusted AI Quality Engineering perspective built around measurable behavior, guardrails, evidence and accountable outcomes.';

  // ============ WHY SECTION ============
  whyTitle = 'From Answers to Actions';
  whyDescription = 'A conventional AI application may produce an answer. An agent can interpret a goal, plan steps, retrieve information, call tools, make decisions and execute actions. Each capability introduces new quality and trust dimensions.';

  // ============ FEATURE SECTIONS (ABOVE FLOW IMAGE) ============
  featureSectionsTop = [
    {
      title: 'Evaluate the Complete Journey',
      description: 'Agentic evaluation should consider whether the agent understood the goal, selected appropriate tools, followed the intended sequence, respected constraints, handled uncertainty, escalated when necessary and produced the intended outcome.'
    },
    {
      title: 'Key Agentic Quality Dimensions',
      description: 'Goal adherence — did the agent pursue the intended objective? Planning quality — were selected steps appropriate? Tool-use correctness — were tools selected and used correctly? Boundary compliance — were policies and action constraints respected? Recovery behavior — did the agent handle failures and uncertainty appropriately? Outcome correctness — was the final business outcome acceptable?'
    }
  ];

  // ============ FEATURE SECTIONS (BELOW FLOW IMAGE) ============
  featureSectionsBottom = [
    {
      title: 'Guardrails and Human Intervention',
      description: 'Agentic systems require explicit boundaries for autonomous actions. High-impact actions may require approval, transaction limits or escalation. These controls should be part of the evaluation model.'
    },
    {
      title: 'Evidence for Agentic Decisions',
      description: 'A trusted agent should leave sufficient evidence for important journeys: relevant inputs, decisions, tool interactions, guardrail events, interventions and outcomes.'
    },
    {
      title: 'Continuous Evaluation',
      description: 'Agent behavior can change when models, tools, prompts, knowledge sources or workflows change. Agentic Quality Engineering therefore requires regression evaluation and ongoing monitoring of critical journeys.'
    }
  ];

  // ============ TRUSTVERSE FRAMEWORK LINK ============
  frameworkLink = { label: 'TrustVerse Framework', path: '/framework' };

  // ============ FAQs ============
  faqs = [
    {
      question: 'How is agentic AI testing different from LLM testing?',
      answer: 'Agentic testing evaluates multi-step behavior, tool use and actions in addition to response quality.'
    },
    {
      question: 'Should every agent action be automated?',
      answer: 'No. Autonomy should be aligned with risk, business impact and authorization boundaries.'
    },
    {
      question: 'What should an agentic AI evaluation measure?',
      answer: 'Goal adherence, planning, tool use, constraints, recovery behavior, outcome quality and evidence should be considered.'
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