import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface AccuracySignal {
  title: string;
  description: string;
}

interface FaqItem {
  question: string;
  answer: string;
  open: boolean;
}

@Component({
  selector: 'app-app92-percent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app92-percent.component.html',
  styleUrl: './app92-percent.component.scss'
})
export class App92PercentComponent {

  readonly expertBookingUrl = 'https://calendly.com/prasad-jwalapuram-tesquirel/30min';

  readonly accuracySignals: AccuracySignal[] = [
    {
      title: 'Relevance',
      description: "Is the response appropriate to the user's intent and business context?"
    },
    {
      title: 'Groundedness',
      description: 'Is the answer supported by permitted knowledge?'
    },
    {
      title: 'Consistency',
      description: 'Does behavior remain acceptable across variations?'
    },
    {
      title: 'Safety and Policy Compliance',
      description: 'Are defined constraints respected?'
    },
    {
      title: 'Action Correctness',
      description: 'If the system can act, is the action appropriate and authorized?'
    },
    {
      title: 'Evidence',
      description: 'Can important outcomes be reconstructed and assessed?'
    }
  ];

  faqs: FaqItem[] = [
    {
      question: 'Does TrustVerse reject accuracy as a metric?',
      answer: 'No. Accuracy remains useful, but it should be interpreted alongside risk, context, behavior, constraints and consequences.',
      open: true
    },
    {
      question: 'What is more important than an accuracy percentage?',
      answer: 'For enterprise decisions, the relevance and severity of failures, guardrail compliance, evidence and accountability can be as important as aggregate accuracy.',
      open: false
    },
    {
      question: 'How should AI teams use this principle?',
      answer: 'Use accuracy as one evaluation signal and add scenario-based, risk-based and evidence-based evaluation around real business use cases.',
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