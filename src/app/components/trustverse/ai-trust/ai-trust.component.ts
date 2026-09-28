import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GovernancePillar {
  title: string;
  description: string;
}

interface FaqItem {
  question: string;
  answer: string;
  open: boolean;
}

@Component({
  selector: 'app-ai-trust',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ai-trust.component.html',
  styleUrl: './ai-trust.component.scss'
})
export class AiTrustComponent {

  readonly expertBookingUrl = 'https://calendly.com/prasad-jwalapuram-tesquirel/30min';

  readonly governancePillars: GovernancePillar[] = [
    // {
    //   title: 'Define Intent and Risk',
    //   description: 'Every AI capability should have a defined purpose, expected behavior, users, operating boundaries and risk profile. Quality Engineering can translate those expectations into scenarios, evaluations and acceptance thresholds.'
    // },
    {
      title: 'Governance Across the AI Lifecycle',
      description: 'Trust needs to be considered during design, evaluation, deployment, operation and change. Model updates, prompt changes, knowledge-base changes, new tools and new business workflows can alter system behavior and therefore require renewed evaluation.'
    },
    {
      title: 'Define Intent and Risk',
      description: 'Every AI capability should have a defined purpose, expected behavior, users, operating boundaries and risk profile. Quality Engineering can translate those expectations into scenarios, evaluations and acceptance thresholds.'
    },
    {
      title: 'Human Accountability',
      description: 'Governance does not mean removing humans from responsibility. It defines where human review is required, who owns exceptions and how decisions can be challenged or escalated.'
    }
  ];

  faqs: FaqItem[] = [
    {
      question: 'Is AI governance only a compliance function?',
      answer: 'No. Governance affects product, engineering, risk, security, operations and business ownership.',
      open: true
    },
    {
      question: 'How does Quality Engineering support AI governance?',
      answer: 'By translating intended behavior and controls into scenarios, evaluations, guardrails, evidence and measurable release criteria.',
      open: false
    },
    {
      question: 'Why is evidence important to governance?',
      answer: 'Evidence helps demonstrate what was evaluated, what happened during operation and how exceptions or decisions were handled.',
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