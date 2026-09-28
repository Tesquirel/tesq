import { Component } from '@angular/core';
import { MetaService } from '../../../service/meta.service';

@Component({
  selector: 'app-others',
  imports: [],
  templateUrl: './others.component.html',
  styleUrl: './others.component.scss'
})
export class OthersComponent {

  constructor(private metaService: MetaService) { }

  ngOnInit(): void {
    this.metaService.setMetaTags({
      title: 'Others',
      description: 'Quality Release journeys across various application types, processes and validations',
      keywords: '',
      image: 'https://tesquirel.com/assets/images/home-banner.jpg',
      url: 'https://tesquirel.com/industries/others',
      type: 'website'
    });
  }

}
