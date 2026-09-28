import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import html2pdf from 'html2pdf.js';
import { SharedService } from '../../../service/shared.service';
import { Chart } from 'chart.js';
import { officialEmailValidator } from '../../utils/email.validator';

@Component({
  selector: 'app-fortifai',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './fortifai.component.html',
  styleUrl: './fortifai.component.scss'
})
export class FortifaiComponent {

  showPdfLayout = false;
  @ViewChild('pdfLayout') pdfLayout!: ElementRef;
  @ViewChild('fortifaiChart') fortifaiChart!: ElementRef;
  chartImage: string = '';
  myChart: any;
  isChartGenerated = false;

  questions: string[] = [
    "LLM output validation",
    "Hallucination tracking",
    "Prompt regression testing",
    "Conversation testing",
    "RAG pipeline testing",
    "Retrieval validation",
    "Context grounding",
    "Context relevance scoring",
    "Agent workflow validation",
    "Tool/API validation",
    "Multi-step execution",
    "Safety & guardrails",
    "Bias/toxicity testing",
    "Accuracy measurement",
    "Consistency testing",
    "Production monitoring"
  ];

  weights: number[] = [
    0.2, 0.2, 0.2, 0.2,
    0.2, 0.2, 0.2, 0.2,
    0.2, 0.2, 0.2,
    0.15, 0.15,
    0.15, 0.15,
    0.1
  ];

  fortifaiForm!: FormGroup;
  emailForm!: FormGroup;

  step: 'audit' | 'email' | 'result' = 'audit';

  score = 0;
  level = '';
  benchmark = 55;
  recommendations: string[] = [];
  answers: number[] = new Array(15).fill(0);
  questionsAnswers = this.questions.map(q => ({
    question: q,
    answer: ''
  }));
  isResult = false;
  answerMap = [
    { id: 0, value: 'None' },
    { id: 1, value: 'Basic' },
    { id: 2, value: 'Moderate' },
    { id: 3, value: 'Advanced' }
  ]

  constructor(private fb: FormBuilder, private sharedService: SharedService) { }

  ngOnInit() {
    this.fortifaiForm = this.fb.group({
      fullName: ['', [Validators.required]],
      emailId: ['', [Validators.required, officialEmailValidator(), Validators.email]],
      companyName: ['', [Validators.required]],
      // answers: this.fb.array(
      //   this.questions.map(() => this.fb.control(0))
      // )
      questionsArray: this.fb.array(
        this.questions.map(() =>
          this.fb.control(0, [Validators.required, this.notZeroValidator])
        )
      )
    });
  }

  notZeroValidator(control: any) {
    return control.value && control.value > 0
      ? null
      : { required: true };
  }

  get questionsArray(): FormArray {
    return this.fortifaiForm.get('questionsArray') as FormArray;
  }

  generateReport() {
    this.isResult = true;
    const responses = this.questionsArray.value;

    let weightedScore = 0;

    responses.forEach((val: number, i: number) => {
      weightedScore += (val / 3) * this.weights[i];
    });

    this.score = Math.round(weightedScore * 100);

    if (this.score < 40) this.level = 'High Risk';
    else if (this.score < 70) this.level = 'Emerging';
    else this.level = 'Mature';

    this.generateRecommendations();

    this.step = 'result';
  }

  generateRecommendations() {
    this.recommendations = [];

    if (this.score < 40) {
      this.recommendations.push(
        'Implement structured LLM evaluation',
        'Introduce RAG testing immediately',
        'Start agent workflow validation'
      );
    } else if (this.score < 70) {
      this.recommendations.push(
        'Automate evaluation pipelines',
        'Improve retrieval and agent validation'
      );
    } else {
      this.recommendations.push(
        'Scale monitoring and governance',
        'Optimize performance continuously'
      );
    }
    this.updateChart();
  }

  get benchmarkDiff(): string {
    const diff = this.score - this.benchmark;
    return diff >= 0
      ? `${diff} points above`
      : `${Math.abs(diff)} points below`;
  }

  updateAnswer(event: Event, index: number, option: any) {
    const value = (event.target as HTMLSelectElement).value;
    // store score
    this.answers[index] = option;
    // update JSON answer
    const res = this.answerMap.find(x => x.id === parseInt(value));
    if (res) {
      this.questionsAnswers[index].answer = res.value;
    }
  }

  updateChart() {
    const ctx = this.fortifaiChart.nativeElement.getContext('2d');
    if (this.myChart) {
      this.myChart.destroy();
    }

    this.myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["You", "Industry"],
        datasets: [
          {
            label: 'Projected Savings (USD)',
            data: [this.score, this.benchmark],
            backgroundColor: ['#6366f1', '#8b5cf6', '#d946ef'],
            borderRadius: 10
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 40 // 🔥 smaller intervals
            },
            suggestedMax: Math.max(this.score, this.benchmark) + 10
          }
        }
      }
    });
    if (this.myChart) {
      this.isChartGenerated = true;
    }
    // this.showPdfLayout = true;
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
        filename: 'TesQuirel_FortifAI_Report.pdf',
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
        a.download = 'TesQuirel_FortifAI_Report.pdf';
        a.click();
        URL.revokeObjectURL(url);

        // Send to API
        const file = new File([blob], 'TesQuirel_FortifAI_Report.pdf', {
          type: 'application/pdf'
        });

        const formData = new FormData();
        formData.append('cta_full_name', this.fortifaiForm.value.fullName);
        formData.append('cta_email_id', this.fortifaiForm.value.emailId);
        formData.append('cta_company_name', this.fortifaiForm.value.companyName);
        formData.append('cta_subject', 'Your ROI Report');
        formData.append('file', file);

        this.sharedService.sendCTAInfoService(formData).subscribe({
          next: (response: any) => {
            if (response.status === 'success') {
              alert('Thank you for downloading the report!!');
            }
          },
          error: (err: any) => {
            console.error('API Error', err);
          }
        });
      });

  }

  captureChart() {
    if (!this.fortifaiChart) return;
    const canvas = this.fortifaiChart.nativeElement as HTMLCanvasElement;
    this.chartImage = canvas.toDataURL('image/png');
  }

}
