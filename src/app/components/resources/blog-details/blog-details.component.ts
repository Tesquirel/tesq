import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../../../service/shared.service';
import { DatePipe } from '@angular/common';
import { MetaService } from '../../../service/meta.service';

@Component({
  selector: 'app-blog-details',
  imports: [DatePipe],
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.scss'
})
export class BlogDetailsComponent {

  blogId = 0;
  blogs: any;
  blog: any;

  constructor(private route: ActivatedRoute, private sharedService: SharedService, private metaService: MetaService) { }

  ngOnInit() {
    this.blogs = this.sharedService.getBlogsService();
    this.blogId = Number(this.route.snapshot.paramMap.get('id'));
    this.blog = this.blogs.find((x: any) => x.id === this.blogId);
    this.metaService.setMetaTags({
      title: `${this.blog.title} | TesQuirel Blog`,
      description: this.blog.excerpt || this.blog.description.substring(0, 160),
      keywords: this.blog.tags?.join(', '),
      image: this.blog.imageUrl,
      url: `https://tesquirel.com/blog/${this.blog.id}`,
      type: 'article'
    });
  }
}
