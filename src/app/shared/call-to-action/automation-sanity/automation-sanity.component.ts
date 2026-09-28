import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import Chart from 'chart.js/auto';
import html2pdf from 'html2pdf.js';
import { RouterLink, RouterModule } from "@angular/router";
import { SharedService } from '../../../service/shared.service';

@Component({
  selector: 'app-automation-sanity',
  imports: [CommonModule, FormsModule, RouterLink, RouterModule, ReactiveFormsModule],
  templateUrl: './automation-sanity.component.html',
  styleUrl: './automation-sanity.component.scss'
})
export class AutomationSanityComponent {
  // Input Model
  userData = {
    name: '',
    email: '',
    testers: 5,
    avgSalary: 65000,
    appTypes: [] as string[],
    totalApps: 1,
    totalTCs: 1200,
    tcGrowth: 20,
    manualTimeHrs: 160,
    hasRegression: true,
    regTCs: 400
  };

  // Results
  savings = { y1: 0, y2: 0, total: 0 };
  timeline = { p1: 0, p2: 0, p3: 0, total: 0 };
  strategyPoints: string[] = [];
  ctaForm!: FormGroup;

  constructor(private fb: FormBuilder, private sharedService: SharedService) {
    this.ctaForm = this.fb.group({
      fullName: ['', [Validators.required]],
      emailId: ['', [Validators.required, Validators.email]],
      companyName: ['', [Validators.required]],
      // noOfTesters: ['5', [Validators.required]],
      // annualSalary: ['80000', [Validators.required]],
      // totalTestcases: ['10', [Validators.required]],
      // tcGrowth: ['1000', [Validators.required]],
      // appTypes: [['Web Apps'], [Validators.required]],
    });
  }

  ngOnInit() {
    this.calculateAll();
  }

  calculateAll() {
    const annualCost = this.userData.testers * this.userData.avgSalary;

    // ROI Calculation (Pro jected 60-80% Savings)
    const factor = 0.70; // Midpoint projection
    this.savings.y1 = annualCost * factor;
    this.savings.y2 = (annualCost * (1 + this.userData.tcGrowth / 100)) * factor;
    this.savings.total = this.savings.y1 + this.savings.y2;

    // Timeline Calculation (Capped at 52 weeks / 1 year)
    // Logic: Base (8w) + TC complexity + App count overhead
    let rawWeeks = 8 + (this.userData.totalTCs / 400) + (this.userData.totalApps * 1.5);
    this.timeline.total = Math.min(Math.max(Math.round(rawWeeks), 12), 52);

    // Phase breakdown
    this.timeline.p1 = Math.round(this.timeline.total * 0.2);
    this.timeline.p2 = Math.round(this.timeline.total * 0.4);
    this.timeline.p3 = Math.round(this.timeline.total * 0.4);

    this.generateStrategy();
  }

  generateStrategy() {
    this.strategyPoints = [
      `Breez Migration: Strategic porting of ${this.userData.totalTCs} manual cases into the No-Script NLP engine.`,
      `VeritAI Integration: Handling the ${this.userData.tcGrowth}% YoY growth through Gen-AI test authoring.`,
      `AIris Visual Shield: Implementing pixel-perfect automated visual validation for all ${this.userData.totalApps} applications.`,
      `Agentic Execution: Deploying autonomous agents for 24/7 cross-browser and cross-device testing.`,
      `Legacy Debt Liquidation: Specifically optimizing automation for ${this.userData.appTypes.length > 0 ? this.userData.appTypes.join(', ') : 'target'} environments.`,
      `Regression Compression: Drastically reducing the cycle time for your ${this.userData.regTCs} regression test cases.`,
      `Shift-Right Analytics: Utilizing Breez to monitor production logs and suggest high-priority test scenarios.`,
      `Executive Transparency: Providing real-time ROI and quality-gate dashboards for stakeholders.`
    ];
  }

  downloadPDF() {
    const element = document.getElementById('report-frame');

    if (!element) return;

    html2pdf().from(element).set({
      margin: [0, 0, 0, 0] as [number, number, number, number],
      filename: 'TesQuirel_ROI_Report.pdf',
      html2canvas: {
        scale: 2, useCORS: true,
        scrollY: 0
      },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },

    }).save();

  }
}
