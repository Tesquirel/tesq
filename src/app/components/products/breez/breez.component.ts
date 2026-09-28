import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MetaService } from '../../../service/meta.service';

@Component({
  selector: 'app-breez',
  imports: [RouterLink],
  templateUrl: './breez.component.html',
  styleUrl: './breez.component.scss'
})
export class BreezComponent {

  constructor(private metaService: MetaService) { }

  ngOnInit(): void {
    this.metaService.setMetaTags({
      title: 'Breez',
      description: 'Connect with us for helping you in your Quality Journey',
      keywords: '',
      image: 'https://tesquirel.com/assets/images/home-banner.jpg',
      url: 'https://tesquirel.com/products/breez',
      type: 'website'
    });
  }

}
