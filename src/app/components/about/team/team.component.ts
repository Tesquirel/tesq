import { Component } from '@angular/core';
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import { MetaService } from '../../../service/meta.service';

@Component({
  selector: 'app-team',
  imports: [],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {

  teamList = [
    {
      id: 1, firstName: 'Prasad', lastName: 'Jwalapuram', designation: 'Managing Director', pic: 'assets/images/tsq/team/prasad-jwalapuram.jpg', linkedIn: 'https://in.linkedin.com/in/prasadjwalapuram', twitter: ''
    },
    {
      id: 2, firstName: 'Srilakshmi', lastName: 'Krishnamurthy', designation: 'Director & HR', pic: 'assets/images/tsq/team/srilakshmi-krishnamurthy.jpg', linkedIn: 'https://www.linkedin.com/in/srilakshmi-k-45ab148a/', twitter: ''
    },
    {
      id: 3, firstName: 'Renu', lastName: 'Aggarwal', designation: 'Director', pic: 'assets/images/tsq/team/renu-aggarwal2.jpg', linkedIn: 'https://www.linkedin.com/in/renu-aggarwal-b7969521/', twitter: ''
    }
  ]

  constructor(private metaService: MetaService) { }

  ngOnInit(): void {
    this.metaService.setMetaTags({
      title: 'Our Team',
      description: 'Experienced, innovative Management Team to partner in Quality Journey',
      keywords: '',
      image: 'https://tesquirel.com/assets/images/home-banner.jpg',
      url: 'https://tesquirel.com/team',
      type: 'website'
    });
  }

  ngAfterViewInit(): void {
    new Swiper('.swiper', {
      modules: [Pagination],
      slidesPerView: 2,
      spaceBetween: 30,
      autoplay: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: true,
      breakpoints: {
        0: { slidesPerView: 1 },
        576: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1200: { slidesPerView: 2 },
      },
      loop: false,
      initialSlide: 0,
    });
  }

}
