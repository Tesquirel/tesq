import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
// import Chart from 'chart.js/auto';
import Chart from 'chart.js/auto';
import html2pdf from 'html2pdf.js';
import { SharedService } from '../../../service/shared.service';
import { officialEmailValidator } from '../../utils/email.validator';

@Component({
  selector: 'app-automation-roi',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './automation-roi.component.html',
  styleUrl: './automation-roi.component.scss'
})
export class AutomationRoiComponent implements AfterViewInit {

  totalSavings = 0;
  efficiencyBoost = 0;

  myChart: any;
  isChartGenerated = false;
  showPdfLayout = false;

  @ViewChild('roiChart') roiChart!: ElementRef;
  @ViewChild('pdfLayout') pdfLayout!: ElementRef;
  chartImage: string = '';
  ctaForm!: FormGroup;

  constructor(private fb: FormBuilder, private sharedService: SharedService) {
    this.ctaForm = this.fb.group({
      fullName: ['', [Validators.required]],
      emailId: ['', [Validators.required, , officialEmailValidator()]],
      companyName: ['', [Validators.required]],
      noOfTesters: ['5', [Validators.required]],
      annualSalary: ['80000', [Validators.required]],
      totalTestcases: ['10', [Validators.required]],
      tcGrowth: ['1000', [Validators.required]],
      appTypes: [['Web Apps'], [Validators.required]],
    });
  }

  ngAfterViewInit() { }

  calculateROI() {
    const testers = parseInt(this.ctaForm.value.noOfTesters);
    const salary = parseInt(this.ctaForm.value.annualSalary);
    const growth = parseInt(this.ctaForm.value.tcGrowth) / 100;

    const currentCost = testers * salary;
    const savingsFactor = 0.55;

    const annualSavings = currentCost * savingsFactor;
    const year2Savings = annualSavings * (1 + growth);
    const year3Savings = year2Savings * (1 + growth);

    this.totalSavings = annualSavings;
    this.efficiencyBoost = Math.round((this.totalSavings / currentCost) * 100);

    this.updateChart(annualSavings, year2Savings, year3Savings);
  }

  updateChart(y1: number, y2: number, y3: number) {
    const ctx = this.roiChart.nativeElement.getContext('2d');
    if (this.myChart) {
      this.myChart.destroy();
    }

    this.myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Year 1', 'Year 2', 'Year 3'],
        datasets: [
          {
            label: 'Projected Savings (USD)',
            data: [y1, y2, y3],
            backgroundColor: ['#6366f1', '#8b5cf6', '#d946ef'],
            borderRadius: 10
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
    if (this.myChart) {
      this.isChartGenerated = true;
    }
  }

  // downloadPDF() {
  //   this.captureChart();
  //   const element = this.pdfLayout.nativeElement;
  //   // element.style.display = 'block';
  //   alert("PDF Generated. In a live environment, this would now be triggered to your email via SMTP.");

  //   // Clone the element
  //   // const clone = element.cloneNode(true) as HTMLElement;

  //   // Place clone off-screen
  //   // clone.style.position = 'fixed';
  //   // clone.style.left = '-9999px';
  //   // clone.style.top = '0';
  //   // clone.style.display = 'block';
  //   // document.body.appendChild(clone);

  //   setTimeout(() => {
  //     // element.style.display = 'block';
  //     html2pdf()
  //       .from(element)
  //       .set({
  //         margin: 10,
  //         filename: 'TesQuirel_ROI_Report.pdf',
  //         html2canvas: {
  //           scale: 2,
  //           useCORS: true
  //         },
  //         jsPDF: {
  //           unit: 'mm',
  //           format: 'a4',
  //           orientation: 'portrait'
  //         }
  //       })
  //       .toPdf()
  //       .get('pdf')
  //       .then((pdf: any) => {

  //         // Create blob
  //         const blob = pdf.output('blob');

  //         // 1️⃣ Download the PDF
  //         const url = URL.createObjectURL(blob);
  //         const a = document.createElement('a');
  //         a.href = url;
  //         a.download = 'TesQuirel_ROI_Report.pdf';
  //         a.click();
  //         URL.revokeObjectURL(url);

  //         // 2️⃣ Send the same PDF to API
  //         const file = new File([blob], 'TesQuirel_ROI_Report.pdf', {
  //           type: 'application/pdf'
  //         });

  //         const formData = new FormData();
  //         formData.append('cta_full_name', this.ctaForm.value.fullName);
  //         formData.append('cta_email_id', this.ctaForm.value.emailId);
  //         formData.append('cta_company_name', this.ctaForm.value.companyName);
  //         formData.append('cta_subject', 'Your ROI Report');
  //         formData.append('file', file);

  //         // this.sharedService.sendCTAInfoService(formData).subscribe({
  //         //   next: (response: any) => {
  //         //     if (response.status === 'success') {
  //         //       alert('Thank you for reaching out us. We will get back to you very soon!!');
  //         //     }
  //         //   },
  //         //   error: (err) => {
  //         //     console.error('API Error', err);
  //         //   }
  //         // });
  //         // element.style.display = 'none';
  //         // document.body.removeChild(clone);
  //       });
  //     // .catch(() => { element.style.display = 'none'; });
  //   }, 100);
  // }

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
        formData.append('cta_full_name', this.ctaForm.value.fullName);
        formData.append('cta_email_id', this.ctaForm.value.emailId);
        formData.append('cta_company_name', this.ctaForm.value.companyName);
        formData.append('cta_subject', 'Your ROI Report');
        formData.append('file', file);

        this.sharedService.sendCTAInfoService(formData).subscribe({
          next: (response: any) => {
            if (response.status === 'success') {
              alert('Thank you for downloading the report!!');
            }
          },
          error: (err) => {
            console.error('API Error', err);
          }
        });
      });

  }

  captureChart() {
    if (!this.roiChart) return;
    const canvas = this.roiChart.nativeElement as HTMLCanvasElement;
    this.chartImage = canvas.toDataURL('image/png');
  }

}

