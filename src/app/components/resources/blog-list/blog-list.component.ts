import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { SharedService } from '../../../service/shared.service';

@Component({
  selector: 'app-blog-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss'
})
export class BlogListComponent {

  blogList: any;

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.getBlogs();
  }

  getBlogs() {
    this.sharedService.getBlogInfoService().subscribe({
      next: (response: any) => {
        if (response.status === 'success') {
          // alert('Thank you for reaching out us. We will get back to you very soon!!');
          // this.blogForm.reset();
          this.blogList = response.data;
        }
      },
    });
  }

}
