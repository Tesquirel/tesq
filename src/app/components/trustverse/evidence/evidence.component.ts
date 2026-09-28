import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-evidence',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './evidence.component.html',
  styleUrl: './evidence.component.scss'
})
export class EvidenceComponent implements OnInit, AfterViewInit {

  // ============ IMAGE PATHS ============
  heroImage = 'assets/images/solution/evidence-hero.png';
  flowImage = 'assets/images/solution/evidence.png';

  // ============ HERO CONTENT ============
  heroTitle = 'If AI Makes a Decision, Where Is the Evidence?';
  heroDescription = 'A trusted AI Quality Engineering perspective built around measurable behavior, guardrails, evidence and accountable outcomes. Evidence turns AI decisions from opaque outputs into traceable, reviewable and defensible records.';

  // ============ WHY SECTION ============
  whyTitle = 'The Evidence Gap';
  whyDescription = 'AI systems introduce prompts, retrieved information, model behavior, tools, policies, guardrails, human interventions and changing data. Without appropriate evidence, an organization may know the outcome but not be able to explain how it was reached.';

  // ============ FEATURE SECTIONS (ABOVE FLOW IMAGE) ============
  featureSectionsTop = [
    {
      title: 'What Evidence Can Include',
      description: 'Depending on the use case, evidence can include evaluation scenarios, inputs, expected behavior, model or system version, retrieved context, tool calls, guardrail decisions, outputs, human approvals, exceptions and execution results.'
    }
  ];

  // ============ FEATURE SECTIONS (BELOW FLOW IMAGE) ============
  featureSectionsBottom = [
    {
      title: 'Evidence as Part of Quality Engineering',
      description: 'Evidence should be designed into the lifecycle rather than reconstructed after an incident. Evaluation criteria should identify what needs to be captured, retained and reviewed for important scenarios.'
    },
    {
      title: 'Decision Records',
      description: 'For consequential AI workflows, a decision record can provide a structured representation of what happened, what information was considered, which controls applied and who or what was responsible for the final action.'
    },
    {
      title: 'Evidence Enables Better Release Decisions',
      description: 'Evidence changes the conversation from "The model passed" to "These business scenarios were evaluated, these risks were observed, these controls were validated and these exceptions remain."'
    }
  ];

  // ============ WHERE TRUSTVERSE FITS ============
  whereTitle = 'Where TrustVerse fits';
  whereDescription = 'TrustVerse frames evidence as a first-class part of AI Quality Engineering — designed into the lifecycle, not reconstructed after an incident. Teams can begin with the scenarios that matter most, define what needs to be captured, retain structured decision records and use that evidence to make release decisions with confidence.';

  // ============ FAQs ============
  faqs = [
    {
      question: 'What is AI evidence?',
      answer: 'Information needed to establish what was evaluated, what the system did, what controls applied and how important outcomes can be assessed.'
    },
    {
      question: 'Is evidence the same as logging?',
      answer: 'No. Logs can be one source of evidence, but useful evidence is structured around quality, risk and accountability questions.'
    },
    {
      question: 'Why is evidence important for AI agents?',
      answer: 'Agents can perform multi-step actions, so it is important to understand relevant tool calls, decisions, controls and interventions.'
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