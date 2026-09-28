import { Component } from '@angular/core';
import { MetaService } from '../../../service/meta.service';

@Component({
  selector: 'app-salesforce',
  imports: [],
  templateUrl: './salesforce.component.html',
  styleUrl: './salesforce.component.scss'
})
export class SalesforceComponent {

  constructor(private metaService: MetaService) { }

  ngOnInit(): void {
    this.metaService.setMetaTags({
      title: 'Salesforce',
      description: 'Enhance your Quicker workflow updates with Quality Process Testing',
      keywords: '',
      image: 'https://tesquirel.com/assets/images/home-banner.jpg',
      url: 'https://tesquirel.com/industries/salesforce',
      type: 'website'
    });
  }

}
