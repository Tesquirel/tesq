import { Component } from '@angular/core';
import { SharedService } from '../../../service/shared.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { MetaService } from '../../../service/meta.service';

@Component({
  selector: 'app-blog',
  imports: [DatePipe],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {

  blogs: any;

  constructor(private sharedService: SharedService, private router: Router, private metaService: MetaService) { }

  ngOnInit() {
    this.metaService.setMetaTags({
      title: 'Blogs',
      description: '',
      keywords: '',
      image: 'https://tesquirel.com/assets/images/home-banner.jpg',
      url: 'https://tesquirel.com/blogs',
      type: 'website'
    });
    this.getBlogs();
  }

  getBlogs() {
    // this.sharedService.getBlogsService().subscribe({
    //   next: (response: any) => {
    //     console.log(response);
    //     this.blogs = response.data;
    //     console.log(this.blogs);
    //   },
    // });
    this.blogs = this.sharedService.getBlogsService();
    console.log(this.blogs);
  }

  blogDetail(id: number) {
    // const blog = this.blogs.find((x: any) => x.id === id);
    this.router.navigate(['blog-details/', id]);
  }

}
