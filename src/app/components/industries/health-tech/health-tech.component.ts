import { Component } from '@angular/core';
import { MetaService } from '../../../service/meta.service';

@Component({
  selector: 'app-health-tech',
  imports: [],
  templateUrl: './health-tech.component.html',
  styleUrl: './health-tech.component.scss'
})
export class HealthTechComponent {

  constructor(private metaService: MetaService) { }

  ngOnInit(): void {
    this.metaService.setMetaTags({
      title: 'HealthTech',
      description: 'Overcome your complex QA challenges in testing patient, provider and admin journeys',
      keywords: '',
      image: 'https://tesquirel.com/assets/images/home-banner.jpg',
      url: 'https://tesquirel.com/industries/health-tech',
      type: 'website'
    });
  }

}
