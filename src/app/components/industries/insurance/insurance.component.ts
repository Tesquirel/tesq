import { Component } from '@angular/core';
import { MetaService } from '../../../service/meta.service';

@Component({
  selector: 'app-insurance',
  imports: [],
  templateUrl: './insurance.component.html',
  styleUrl: './insurance.component.scss'
})
export class InsuranceComponent {

  constructor(private metaService: MetaService) { }

  ngOnInit(): void {
    this.metaService.setMetaTags({
      title: 'Insurance',
      description: 'Automate End to End Testing From Modern AI assisted Customer journeys to Legacy Core Systems',
      keywords: '',
      image: 'https://tesquirel.com/assets/images/home-banner.jpg',
      url: 'https://tesquirel.com/industries/insruance',
      type: 'website'
    });
  }

}
