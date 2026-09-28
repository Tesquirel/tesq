import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ai-testing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ai-testing.component.html',
  styleUrl: './ai-testing.component.scss'
})
export class AiTestingComponent implements OnInit, AfterViewInit {

  // ============ IMAGE PATHS ============
  heroImage = 'assets/images/solution/AI Testing and Governance Workflow - Hero image.png';
  flowImage = 'assets/images/solution/AI Testing and Governance Workflow - Image-2.png';

  // ============ HERO CONTENT ============
  heroTitle = 'AI Application Testing With Evidence, Context and Control';
  heroDescription = 'AI-enabled applications introduce a quality problem: correctness is not limited to deterministic outputs. Teams must consider relevance, reliability, grounding, behavior, risk, traceability and the consequences of decisions. TesQuirel\'s Quality Engineering approach can extend beyond functional testing by combining test intelligence, evidence, execution insight and governance principles for AI-enabled enterprise applications.';

  // ============ WHY SECTION ============
  whyTitle = 'Why AI applications need a testing model';
  whyDescription = 'Traditional software tests often expect a defined input to produce a defined output. AI systems may generate responses, use retrieved context, or make decisions through agents and tools. Testing therefore needs to evaluate behavior against business intent, constraints, expected outcomes and risk. The objective is not to declare an AI system perfect; it is to create evidence that its behavior is acceptable for the intended use.';

  // ============ DETAILED FEATURE SECTIONS ============
  featureSections = [
    {
      title: 'Test intelligence grounded in business context',
      description: 'VeritAI\'s intelligence model is designed around requirements, business rules, entities, relationships, constraints and scenarios. This provides a foundation for AI application testing because evaluation should begin with what the business expects the system to do. For AI use cases, the same quality context can be extended toward scenario design, risk identification and evaluation criteria rather than generating isolated prompts without business meaning.'
    },
    {
      title: 'Validate AI workflows, not model responses',
      description: 'Enterprise AI applications may include retrieval, APIs, business systems, human approvals and agent actions. Testing should therefore consider the workflow: what information the system receives, what context it uses, what decision or output it produces, what action follows and what evidence is retained. TesQuirel\'s broader application-landscape model supports this end-to-end perspective.'
    },
    {
      title: 'Evidence and traceability for AI outcomes',
      description: 'AI governance requires more than a score. Teams need to understand what was tested, under which conditions, what evidence was produced and how failures were handled. Platform-level traceability and execution intelligence can support evidence, while TrustVerse principles can frame the progression from model confidence to decision confidence, guardrails and accountability.'
    },
    {
      title: 'AI, RAG and agentic systems',
      description: 'For RAG applications, evaluation can consider retrieval quality, grounding and answer relevance. For agentic systems, validation can extend to tool use, workflow adherence, permissions, escalation and outcome quality. The precise evaluation framework should be tailored to the application risk and business purpose rather than applying one generic benchmark to every AI system.'
    },
    {
      title: 'A practical path to AI quality',
      description: 'Start with a defined AI business use case and its critical risks. Establish evaluation criteria and representative scenarios, capture baseline results, introduce evaluation and retain evidence. Expand toward coverage, adversarial scenarios, governance and production monitoring as the application matures. The goal is controlled AI adoption supported by evidence, not testing for a headline accuracy percentage.'
    }
  ];

  // ============ WHERE TESQUIREL FITS ============
  whereTitle = 'Where TesQuirel fits';
  whereDescription = 'TesQuirel is suited to enterprises that need to bring AI-enabled applications into a governed quality model without treating them as isolated model benchmarks. Teams can begin with a defined AI use case and its critical risks, set evaluation criteria and representative scenarios, capture a baseline, and retain evidence. AI quality can then expand toward adversarial scenarios, governance and production monitoring as the application matures.';

  // ============ FAQs ============
  faqs = [
    {
      question: 'Does AI testing mean testing the LLM?',
      answer: 'No. Enterprise AI quality should consider the application, including prompts, retrieval, tools, business rules, integrations, outputs and actions.'
    },
    {
      question: 'Can AI testing support RAG applications?',
      answer: 'Yes. A suitable evaluation model can include retrieval, grounding, answer relevance and business outcome criteria.'
    },
    {
      question: 'How should AI quality be measured?',
      answer: 'Use risk-based measures covering correctness, relevance, grounding, safety, workflow behavior, decision quality and evidence, rather than relying on one accuracy number.'
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