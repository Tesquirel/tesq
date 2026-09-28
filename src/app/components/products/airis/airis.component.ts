import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MetaService } from '../../../service/meta.service';

@Component({
  selector: 'app-airis',
  imports: [RouterLink],
  templateUrl: './airis.component.html',
  styleUrl: './airis.component.scss'
})
export class AirisComponent {

  constructor(private metaService: MetaService) { }

  ngOnInit(): void {
    this.metaService.setMetaTags({
      title: 'AIris',
      description: 'Ensure users see what you have envisaged and builds do not shift elements. Visual QA without code, at ease',
      keywords: '',
      image: 'https://tesquirel.com/assets/images/home-banner.jpg',
      url: 'https://tesquirel.com/products/airis',
      type: 'website'
    });
  }

}
