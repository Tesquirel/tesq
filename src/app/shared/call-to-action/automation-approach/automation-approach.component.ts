import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import Chart from 'chart.js/auto';
import html2pdf from 'html2pdf.js';
import { SharedService } from '../../../service/shared.service';

@Component({
  selector: 'app-automation-approach',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './automation-approach.component.html',
  styleUrl: './automation-approach.component.scss'
})
export class AutomationApproachComponent {

  @ViewChild('radarChart') radarChart!: ElementRef;
  @ViewChild('pdfLayout') pdfLayout!: ElementRef;

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

  answers: number[] = new Array(10).fill(0);

  // email = '';

  totalScore = 0;
  stage = '';
  benchmarkText = '';

  radarData: number[] = [];
  recommendations: string[] = [];

  showEmailBox = false;
  showResultBox = false;

  chart: any;
  questionsAnswers = this.questions.map(q => ({
    question: q,
    answer: ''
  }));
  chartImage: string = '';
  showPdfLayout = false;
  ctaForm!: FormGroup;

  constructor(private fb: FormBuilder, private sharedService: SharedService) {
    const group: any = {};

    this.questions.forEach((q, index) => {
      group['question-' + index] = [null, Validators.required];
    });
    this.ctaForm = this.fb.group({
      fullName: ['', [Validators.required]],
      emailId: ['', [Validators.required, Validators.email]],
      companyName: ['', [Validators.required]],
      ...group
    });
  }

  ngAfterViewInit() { }

  submitAudit() {
    this.totalScore = this.answers.reduce((a, b) => a + b, 0);
    this.showEmailBox = true;
    window.scrollTo(0, document.body.scrollHeight);
    this.showResults();
  }

  showResults() {
    this.showResultBox = true;
    this.calculateStage();
    this.buildRadarData();
    this.renderChart();
    this.showBenchmark();
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
        "Enable QA analysts to design regression scenarios visually."
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

  updateAnswer(index: number, option: any) {
    // store score
    this.answers[index] = option.score;
    // update JSON answer
    this.questionsAnswers[index].answer = option.text;
  }

  buildRadarData() {
    const a = this.answers;
    this.radarData = [
      (a[0] + a[2]) / 2,
      (a[1] + a[6]) / 2,
      (a[2] + a[5] + a[7]) / 3,
      (a[3] + a[8]) / 2,
      (a[4] + a[9]) / 2
    ];
  }

  renderChart() {
    const ctx = this.radarChart.nativeElement;
    if (this.chart) {
      this.chart.destroy();
    }
    this.chart = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: this.categories,
        datasets: [
          {
            label: 'Your Automation',
            data: this.radarData
          },
          {
            label: 'Industry Average',
            data: this.industryBenchmark
          }
        ]
      },
      options: {
        responsive: true
      }
    });
  }

  showBenchmark() {
    if (this.totalScore <= 6) {
      this.benchmarkText =
        "Your automation maturity is above industry average.";
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

  captureChart() {
    // const chart = document.getElementById('radarChart') as HTMLCanvasElement;
    // this.chartImage = chart.toDataURL('image/png');
    const canvas = this.radarChart.nativeElement;
    this.chartImage = canvas.toDataURL('image/png');
  }

  async downloadPDF() {
    this.captureChart();
    const element = this.pdfLayout.nativeElement;
    await new Promise(resolve => setTimeout(resolve, 300));
    element.style.display = 'block';
    // this.showPdfLayout = true;
    html2pdf()
      .from(element)
      .set({
        margin: 10,
        filename: 'TesQuirel_ROI_Report.pdf',
        html2canvas: {
          scale: 2,
          useCORS: true,
          letterRendering: true,
          onclone: (clonedDoc: Document) => {
            // This modifies the element inside the PDF generator's memory only
            const pdfElement = clonedDoc.getElementById('pdfLayout');
            if (pdfElement) {
              pdfElement.style.display = 'block';
            }
          }
        },
        jsPDF: {
          unit: 'mm',
          format: 'a4',
          orientation: 'portrait'
        }
      })
      .toPdf()
      .get('pdf')
      .then((pdf: any) => {
        this.showPdfLayout = false;
        element.style.display = 'none';
        const blob = pdf.output('blob');

        // Download PDF
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'TesQuirel_ROI_Report.pdf';
        a.click();
        URL.revokeObjectURL(url);

        // Send to API
        const file = new File([blob], 'TesQuirel_ROI_Report.pdf', {
          type: 'application/pdf'
        });

        const formData = new FormData();
        // formData.append('cta_full_name', this.ctaForm.value.fullName);
        // formData.append('cta_email_id', this.ctaForm.value.emailId);
        // formData.append('cta_company_name', this.ctaForm.value.companyName);
        formData.append('cta_subject', 'Your ROI Report');
        formData.append('file', file);

        // this.sharedService.sendCTAInfoService(formData).subscribe({
        //   next: (response: any) => {
        //     if (response.status === 'success') {
        //       alert('Thank you for downloading the report!!');
        //     }
        //   },
        //   error: (err) => {
        //     console.error('API Error', err);
        //   }
        // });
      });

  }

  // downloadPDF() {
  //   this.isExport = true;
  //   this.captureChart();

  //   setTimeout(() => {

  //     const element = this.pdfContent.nativeElement;
  //     if (!element) return;

  //     html2pdf().from(element).set({
  //       margin: [0, 0, 0, 0],
  //       filename: 'Selenium Sanity Audit Report.pdf',

  //       image: { type: 'jpeg', quality: 1 },

  //       html2canvas: {
  //         scale: 2,
  //         useCORS: true,
  //         scrollY: 0
  //       },

  //       jsPDF: {
  //         unit: 'mm',
  //         format: 'a4',
  //         orientation: 'portrait'
  //       },
  //     }).save();
  //   }, 500);
  // }
}
