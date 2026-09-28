import { Component } from '@angular/core';
import { SharedService } from '../../../service/shared.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { environment } from './../../../../environments/environment';
import { MetaService } from '../../../service/meta.service';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private sharedService: SharedService, private fb: FormBuilder, private metaService: MetaService) {
    this.contactForm = this.fb.group({
      contactName: ['', [Validators.required]],
      contactEmailID: ['', [Validators.required]],
      contactSubject: ['', [Validators.required]],
      contactMessage: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.metaService.setMetaTags({
      title: 'Our Contact',
      description: 'Connect with us for helping you in your Quality Journey',
      keywords: '',
      image: 'https://tesquirel.com/assets/images/home-banner.jpg',
      url: 'https://tesquirel.com/contact',
      type: 'website'
    });
  }

  sendEnquiry() {
    const info = {
      contact_details: this.contactForm.controls['contactMessage'].value,
      contact_email: this.contactForm.controls['contactEmailID'].value,
      contact_name: this.contactForm.controls['contactName'].value,
      contact_phone: '',
      contact_subject: this.contactForm.controls['contactSubject'].value,
      contact_type: 'TesQuirel',
      is_testing: environment.isTesting,
      created_by: this.contactForm.controls['contactName'].value,
      created_datetime: '',
      modified_by: this.contactForm.controls['contactName'].value,
      modified_datetime: '',
      org_code: 'TSQ',
      product_name: ''
    };

    // {
    //   "data": [
    //     {
    //       "contact_details": "contact_details",
    //       "contact_email": "ABC@PQR.com",
    //       "contact_name": "PQR",
    //       "contact_phone": "911",
    //       "contact_subject": "contact_subject",
    //       "contact_type": "Office",
    //       "created_by": "admin",
    //       "created_datetime": "2024-02-07 10:09:11",
    //       "modified_by": "admin",
    //       "modified_datetime": "2024-02-07 10:09:11",
    //       "org_code": "TSQ",
    //       "product_name": "ABC"
    //     },
    //     {
    //       "contact_details": "contact_details",
    //       "contact_email": "ABC@PQR.com",
    //       "contact_name": "PQR",
    //       "contact_phone": "911",
    //       "contact_subject": "contact_subject",
    //       "contact_type": "Office",
    //       "created_by": "admin",
    //       "created_datetime": "2024-02-07 10:09:11",
    //       "modified_by": "admin",
    //       "modified_datetime": "2024-02-07 10:09:11",
    //       "org_code": "TSQ",
    //       "product_name": "ABC"
    //     }
    //   ]
    // }

    // {
    //   "contact_details": "contact_details",
    //   "contact_email": "ABC@PQR.com",
    //   "contact_name": "PQR",
    //   "contact_phone": "911",
    //   "contact_subject": "contact_subject",
    //   "contact_type": "Office",
    //   "created_by": "admin",
    //   "created_datetime": "2024-02-07 10:09:11",
    //   "modified_by": "admin",
    //   "modified_datetime": "2024-02-07 10:09:11",
    //   "org_code": "TSQ",
    //   "product_name": "ABC"
    // }

    this.sharedService.sendContactInfoService(info).subscribe({
      next: (response: any) => {
        if (response.status === 'success') {
          alert('Thank you for reaching out us. We will get back to you very soon!!');
          this.contactForm.reset();
        }
      },
    });
  }

}
