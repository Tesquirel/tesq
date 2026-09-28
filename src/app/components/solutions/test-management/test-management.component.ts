import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-test-management',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-management.component.html',
  styleUrl: './test-management.component.scss'
})
export class TestManagementComponent {

  // ============ IMAGE PATHS ============
  heroImage = 'assets/images/platform/architecturehero.png';
  flowImage = 'assets/images/solution/Test Management and Traceability.png';

  heroTittle='Test Management and Traceability That Connects the Quality Lifecycle';
  heroDescription='Test management is most useful when it links the quality lifecycle instead of just storing test cases. TesQuirel brings requirements, scenarios, test assets, workflows, execution, defects, evidence and release signals into a Quality Engineering model. This helps teams understand not what was tested but also why it was tested what changed and what evidence backs the release decision.';
  // ============ INTRO SECTION ============
  introTitle = 'Move beyond test-case inventory';
  introDescription = 'A test repository can still give weak visibility if requirements are not linked to tests and if execution evidence is stored elsewhere. @Test is built around requirements and BRDs, role-based workflows, test cases, traceability, dashboards, reporting and audit-oriented exports. The broader platform links this management layer to intelligence and execution.';

  // ============ DETAILED FEATURE SECTIONS ============
  featureSections = [
    {
      title: 'Requirements-to-test traceability',
      description: 'Strong traceability starts with business intent. Requirements, acceptance criteria, process flows and business rules should guide the creation of scenarios and test assets that can be linked back to the expected outcome. This allows teams to spot requirements, affected tests and gaps in business journey coverage when change occurs.'
    },
    {
      title: 'Manage test assets and approvals',
      description: 'Enterprise testing involves roles, environments and release decisions. Role-based workflows, approvals, test organization, reporting and capacity visibility help build a controlled operating model. The purpose is not administrative overhead; it is to make ownership, readiness and evidence visible enough for teams to act consistently.'
    },
    {
      title: 'Connect management to automation',
      description: 'Test management should not be separated from execution. Scenarios and test assets can become inputs to automation while execution results and evidence can flow back into the quality context. Breez provides execution and it creates a lifecycle from intent to evidence of disconnected repositories.'
    },
    {
      title: 'Traceability for audit and release confidence',
      description: 'Traceability becomes especially important in high-risk environments. Teams may need to show which requirements were covered, which tests ran, which defects remained open and what evidence supported acceptance. TesQuiries model supports these relationships so reporting can become evidence for decision-making of a retrospective activity.'
    },
    {
      title: 'Measure quality with context',
      description: 'Test-management metrics include requirement coverage, business journey coverage, execution status, defect linkage, evidence completeness, cycle time and unresolved risk. These measures give insight than test counts alone because they link activity to the business outcomes the release is expected to deliver.'
    }
  ];

  // ============ FAQs ============
  faqs = [
    {
      question: 'What is requirements-to-test traceability?',
      answer: 'It is the ability to connect business requirements and expected outcomes to scenarios, tests, execution results and where applicable defects and evidence.'
    },
    {
      question: 'Is @TEST is a test case repository?',
      answer: 'No. @TEST is a Comprehensive Test management tool, which is one layer within a Quality Engineering platform that connects intelligence, automation, validation, execution insight and evidence.'
    },
    {
      question: 'Can test management support audits?',
      answer: 'It can provide traceability that supports audits. Specific regulatory requirements should be addressed according to the customer\'s context.'
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
}