import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MetaService } from '../../../service/meta.service';

@Component({
  selector: 'app-sakhai',
  imports: [RouterLink],
  templateUrl: './sakhai.component.html',
  styleUrl: './sakhai.component.scss'
})
export class SakhaiComponent {

  constructor(private metaService: MetaService) { }

  ngOnInit(): void {
    this.metaService.setMetaTags({
      title: 'sakhAI',
      description: `Your friend who answers team's questions, accurately based on facts specific to your company`,
      keywords: '',
      image: 'https://tesquirel.com/assets/images/home-banner.jpg',
      url: 'https://tesquirel.com/products/sakhai',
      type: 'website'
    });
  }

}
