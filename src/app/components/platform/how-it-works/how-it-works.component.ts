import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

type ProductKey = 'veritai' | 'breez' | 'airis' | 'attest' | 'sakhai';

interface ProductLink {
  label: string;
  path: string;
  key: ProductKey;
}

interface FlowStep {
  step: number;
  title: string;
  description: string;
  product?: ProductLink;
}

interface Faq {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './how-it-works.component.html',
  styleUrl: './how-it-works.component.scss'
})
export class HowItWorksComponent {

  /** Static imagery for the page */
  readonly heroImage = 'assets/images/platform/howitsworkhero.png';
  readonly flowImage = 'assets/images/platform/howitswork.png';

  /** Index of the currently expanded FAQ item (null = all collapsed) */
  readonly openFaqIndex = signal<number | null>(0);

  toggleFaq(index: number): void {
    this.openFaqIndex.update(current => (current === index ? null : index));
  }

  isFaqOpen(index: number): boolean {
    return this.openFaqIndex() === index;
  }

  readonly steps: FlowStep[] = [
    {
      step: 1,
      title: 'Start with what the business needs to achieve',
      description:
        'Quality Engineering starts before a test is executed. Requirements, user stories, process flows, business rules and acceptance expectations establish what the system is expected to do. TesQuirel\u2019s platform approach preserves this context instead of reducing the problem immediately to individual test steps.'
    },
    {
      step: 2,
      title: 'Turn business intent into test intelligence',
      description:
        'Understanding the relationships between requirements, entities, rules, workflows, applications and expected outcomes creates a foundation for identifying meaningful scenarios and coverage \u2014 reasoning about what should be validated, not only what has already been automated.',
      product: { label: 'VeritAI', path: '/products/veritai', key: 'veritai' }
    },
    {
      step: 3,
      title: 'Design the right scenarios and coverage',
      description:
        'Teams identify scenarios, combinations, boundary conditions and business journeys that need validation. Test management and traceability give the team a controlled place to review, organize and track these assets \u2014 the goal is relevant coverage that traces back to business intent, not the largest possible suite.',
      product: { label: 'Attest', path: '/products/attest', key: 'attest' }
    },
    {
      step: 4,
      title: 'Automate execution without making scripting the bottleneck',
      description:
        'No-script automation covers target systems, screens, objects, steps, processes, projects and batches, along with execution reporting and mobile automation workflows \u2014 keeping the execution model understandable to testers and business-facing teams alike.',
      product: { label: 'Breez', path: '/products/breez', key: 'breez' }
    },
    {
      step: 5,
      title: 'Validate more than functional steps',
      description:
        'A business journey can fail even when every functional check passes. Visual changes, layout problems, missing content and UX issues affect the customer experience just as much \u2014 so validation extends into visual quality, comparing builds against baselines and checking responsive states.',
      product: { label: 'AIris', path: '/products/airis', key: 'airis' }
    },
    {
      step: 6,
      title: 'Understand what happened',
      description:
        'Execution creates data: results, logs, screenshots, traces, defects and comparisons across runs. Making that information easy to interpret \u2014 explaining failures, spotting patterns, summarizing cycles and comparing runs \u2014 is what turns raw output into an answer.',
      product: { label: 'SakhAI', path: '/products/sakhai', key: 'sakhai' }
    },
    {
      step: 7,
      title: 'Connect evidence to the release decision',
      description:
        'The final step isn\u2019t a green dashboard. Teams need evidence that the relevant scope was covered, failures were understood and defects were addressed \u2014 so the conversation moves from \u201CDid the tests run?\u201D to \u201CWhat do we know about this release?\u201D'
    }
  ];

  readonly faqs: Faq[] = [
    {
      question: 'Does TesQuirel replace manual testing?',
      answer:
        'No. It automates repeatable execution while supporting manual and cognitive testing where human judgment still matters.'
    },
    {
      question: 'Can business users participate?',
      answer:
        'Yes \u2014 no-script automation and test-management capabilities reduce the dependency on programming for appropriate activities.'
    },
    {
      question: 'How are results handled?',
      answer:
        'Execution produces reports and evidence, and SakhAI adds a conversational interpretation layer on top of that data.'
    },
    {
      question: 'Can this flow support regression testing?',
      answer:
        'Yes. The connected model is well suited to repeatable regression and release validation.'
    }
  ];
}