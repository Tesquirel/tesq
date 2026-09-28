import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TrustDimension {
  title: string;
  description: string;
}

interface LifecycleStage {
  title: string;
  description: string;
}

interface FaqItem {
  question: string;
  answer: string;
  open: boolean;
}

@Component({
  selector: 'app-trustverse-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trustverse-overview.component.html',
  styleUrl: './trustverse-overview.component.scss'
})
export class TrustverseOverviewComponent {

  readonly expertBookingUrl = 'https://calendly.com/prasad-jwalapuram-tesquirel/30min';

  readonly trustDimensions: TrustDimension[] = [
    {
      title: 'Accuracy',
      description: 'Results that are right and fit the situation.'
    },
    {
      title: 'Guardrails',
      description: 'Set limits for safety, rules, business and working conditions.'
    },
    {
      title: 'Evidence',
      description: 'The ability to show what happened and what led to it.'
    },
    {
      title: 'Accountability',
      description: 'A person or group responsible for decisions, problems and results.'
    },
    {
      title: 'Governance',
      description: 'Rules for how things are done, limits for risks and ways to get approval.'
    },
    {
      title: 'Continuous Evaluation',
      description: 'Checking all the time as models, data, questions, tools and business situations change.'
    }
  ];

  readonly lifecycleStages: LifecycleStage[] = [
    { title: 'Define intent and risk', description: 'Establish what the AI is meant to do and what could go wrong.' },
    { title: 'Establish evaluation criteria', description: 'Set the standards a decision or output must meet.' },
    { title: 'Test behavior', description: 'Exercise the system across realistic and edge-case scenarios.' },
    { title: 'Validate guardrails', description: 'Confirm safety, business and operating limits hold under pressure.' },
    { title: 'Observe execution', description: 'Watch how the system behaves as it runs in context.' },
    { title: 'Capture evidence', description: 'Record what happened and what led to it.' },
    { title: 'Assign accountability', description: 'Attach ownership to decisions, problems and results.' },
    { title: 'Continuously re-assess', description: 'Re-check as models, data and business situations change.' }
  ];

  readonly appliesTo: string[] = [
    'AI assistants',
    'RAG applications',
    'Copilots',
    'AI-enabled enterprise workflows',
    'Decision-support systems',
    'Agentic AI'
  ];

  faqs: FaqItem[] = [
    {
      question: 'Is TrustVerse an AI governance framework?',
      answer: 'It is a Quality Engineering-oriented Trust framework that connects evaluation, guardrails, evidence, accountability and governance.',
      open: true
    },
    {
      question: 'Is accuracy enough to establish AI trust?',
      answer: 'No. Accuracy is a critical quality dimension, but Trust also depends on context, constraints, evidence, accountability and continuous evaluation.',
      open: false
    },
    {
      question: 'Does TrustVerse apply to agentic AI?',
      answer: 'Yes. Agentic systems increase the importance of guardrails, action validation, evidence and accountability.',
      open: false
    }
  ];

 toggleFaq(index: number): void {
  this.faqs = this.faqs.map((faq, i) => ({
    ...faq,
    open: i === index ? !faq.open : false
  }));
}
}