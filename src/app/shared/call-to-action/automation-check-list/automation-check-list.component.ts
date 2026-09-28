import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-automation-check-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './automation-check-list.component.html',
  styleUrl: './automation-check-list.component.scss'
})
export class AutomationCheckListComponent {

  @ViewChild('radarChart') radarChart!: ElementRef;

  questions = [
    "Flaky tests consume debugging time",
    "Manual testers depend on automation engineers",
    "UI changes frequently break scripts",
    "Regression takes longer than builds",
    "Tests locked to Selenium/Cypress expertise",
    "Automation engineers maintain locators frequently",
    "New hires struggle with framework complexity",
    "Regression skipped due to maintenance effort",
    "CI pipeline slowed by automation execution",
    "Automation coverage lags behind features"
  ];

  options = [
    { text: "Rarely", score: 0 },
    { text: "Sometimes", score: 1 },
    { text: "Frequently", score: 2 }
  ];

  categories = [
    "Stability",
    "Skill Dependency",
    "Maintenance",
    "Speed",
    "Framework Lock-in"
  ];

  industryBenchmark = [1, 1.2, 1.4, 1.1, 1.3];

  answers: number[] = [];
  radarData: number[] = [];
  totalScore = 0;

  stage = "";
  benchmarkText = "";
  recommendations: string[] = [];

  email = "";

  showEmailBox = false;
  showResult = false;

  chart!: Chart;

  updateAnswer(index: number, score: number) {
    this.answers[index] = score;
  }

  submitAudit() {

    this.totalScore = 0;

    for (let i = 0; i < this.questions.length; i++) {
      const value = this.answers[i] || 0;
      this.totalScore += value;
    }

    this.showEmailBox = true;

    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
  }

  showResults() {

    if (!this.email) {
      alert("Please enter your email");
      return;
    }

    this.calculateStage();
    this.buildRadarData();
    this.renderChart();
    this.showBenchmark();

    this.showResult = true;
  }

  calculateStage() {

    if (this.totalScore <= 6) {

      this.stage = "Healthy Automation";

      this.recommendations = [
        "Introduce Breez gradually to allow manual testers to build automation flows without scripting.",
        "Replace fragile UI test scripts with Breez visual flows to reduce maintenance."
      ];

    }
    else if (this.totalScore <= 13) {

      this.stage = "Automation Strain Detected";

      this.recommendations = [
        "Use Breez to convert high-maintenance Selenium UI tests into scriptless workflows.",
        "Enable QA analysts to design regression scenarios visually and expand coverage faster."
      ];

    }
    else {

      this.stage = "Automation Maintenance Crisis";

      this.recommendations = [
        "Replace brittle Selenium regression packs with Breez no-script automation.",
        "Adopt Breez AI-assisted test generation to accelerate automation coverage."
      ];

    }

  }

  buildRadarData() {

    this.radarData = [

      ((this.answers[0] || 0) + (this.answers[2] || 0)) / 2,

      ((this.answers[1] || 0) + (this.answers[6] || 0)) / 2,

      ((this.answers[2] || 0) + (this.answers[5] || 0) + (this.answers[7] || 0)) / 3,

      ((this.answers[3] || 0) + (this.answers[8] || 0)) / 2,

      ((this.answers[4] || 0) + (this.answers[9] || 0)) / 2
    ];
  }

  renderChart() {

    if (this.chart) {
      this.chart.destroy();
    }

    this.chart = new Chart(this.radarChart.nativeElement, {

      type: 'radar',

      data: {
        labels: this.categories,
        datasets: [
          {
            label: "Your Automation",
            data: this.radarData
          },
          {
            label: "Industry Average",
            data: this.industryBenchmark
          }
        ]
      }

    });

  }

  showBenchmark() {

    if (this.totalScore <= 6) {

      this.benchmarkText =
        "Your automation maturity is above industry average. Focus on scaling scriptless testing.";

    }
    else if (this.totalScore <= 13) {

      this.benchmarkText =
        "Your automation maturity is slightly below industry average.";

    }
    else {

      this.benchmarkText =
        "Your automation maturity is significantly below industry benchmarks.";

    }

  }

  downloadPDF() { }

}
