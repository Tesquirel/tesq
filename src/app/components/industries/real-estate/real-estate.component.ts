import { Component } from '@angular/core';
import { MetaService } from '../../../service/meta.service';

@Component({
  selector: 'app-real-estate',
  imports: [],
  templateUrl: './real-estate.component.html',
  styleUrl: './real-estate.component.scss'
})
export class RealEstateComponent {

  constructor(private metaService: MetaService) { }

  ngOnInit(): void {
    this.metaService.setMetaTags({
      title: 'Real Estate',
      description: 'Test your CRM, Rentals, availability, exploring prospect journeys across various platforms',
      keywords: '',
      image: 'https://tesquirel.com/assets/images/home-banner.jpg',
      url: 'https://tesquirel.com/industries/realestate',
      type: 'website'
    });
  }

}
