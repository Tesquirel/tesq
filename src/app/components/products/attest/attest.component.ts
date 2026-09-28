import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MetaService } from '../../../service/meta.service';

@Component({
  selector: 'app-attest',
  imports: [RouterLink],
  templateUrl: './attest.component.html',
  styleUrl: './attest.component.scss'
})
export class AttestComponent {

  constructor(private metaService: MetaService) { }

  ngOnInit(): void {
    this.metaService.setMetaTags({
      title: 'Attest',
      description: 'Assignment, Flow or Governance.  Your companion in Quality Journey',
      keywords: '',
      image: 'https://tesquirel.com/assets/images/home-banner.jpg',
      url: 'https://tesquirel.com/products/attest',
      type: 'website'
    });
  }

}
