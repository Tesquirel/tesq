import { Component } from '@angular/core';
import { SharedService } from '../../../service/shared.service';
import { Router } from '@angular/router';
import { MetaService } from '../../../service/meta.service';

@Component({
  selector: 'app-success-stories',
  imports: [],
  templateUrl: './success-stories.component.html',
  styleUrl: './success-stories.component.scss'
})
export class SuccessStoriesComponent {

  allSuccessStories: any;

  constructor(private sharedService: SharedService, private metaService: MetaService) { }

  ngOnInit() {
    this.metaService.setMetaTags({
      title: 'Success Stories',
      description: '',
      keywords: '',
      image: 'https://tesquirel.com/assets/images/home-banner.jpg',
      url: 'https://tesquirel.com/success-stories',
      type: 'website'
    });
    this.getAllSuccessStories();
  }

  getAllSuccessStories() {
    this.sharedService.getAllSuccessStoriesService().subscribe({
      next: (response: any) => {
        this.allSuccessStories = response.data;
      },
    });
  }
}
