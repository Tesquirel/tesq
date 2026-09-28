import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MetaService } from '../../../service/meta.service';

@Component({
  selector: 'app-veritai',
  imports: [RouterLink],
  templateUrl: './veritai.component.html',
  styleUrl: './veritai.component.scss'
})
export class VeritaiComponent {

  constructor(private metaService: MetaService) { }

  ngOnInit(): void {
    this.metaService.setMetaTags({
      title: 'VeritAI',
      description: 'Empower your QA for better tasks, let GenAI generate Tests and Data',
      keywords: '',
      image: 'https://tesquirel.com/assets/images/home-banner.jpg',
      url: 'https://tesquirel.com/products/veritai',
      type: 'website'
    });
  }

}
