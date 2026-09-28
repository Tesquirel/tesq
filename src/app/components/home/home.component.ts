import { Component } from '@angular/core';
import { SharedService } from '../../service/shared.service';
// import Swiper from 'swiper';
// import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
// import { AppointmentCalendarComponent } from '../appointment-calendar/appointment-calendar.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";
import { VideoPopupComponent } from '../../shared/video-popup/video-popup.component';
import { BannerComponent } from '../../shared/banner/banner.component';
import { MetaService } from '../../service/meta.service';

Swiper.use([Pagination]);

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink, VideoPopupComponent, BannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  testimonials: any;
  clientLogoList = [
    { title: 'Bajaj Allianz', src: 'assets/images/client-logo/bajaj_allianz_logo.png' },
    { title: 'Datacomp', src: 'assets/images/client-logo/datacomp_logo.png' },
    { title: 'Pramerica', src: 'assets/images/client-logo/pramerica_logo.png' },
    { title: 'Prolance', src: 'assets/images/client-logo/prolance_logo.png' },
    { title: 'Quoqo', src: 'assets/images/client-logo/quoqo_logo.png' },
    { title: 'Reliance Capital', src: 'assets/images/client-logo/reliance_capital_logo.png' },
    { title: 'Wesure', src: 'assets/images/client-logo/wesure_logo.png' }
  ]

  constructor(private sharedService: SharedService, private metaService: MetaService) { }

  ngOnInit() {
    this.metaService.setMetaTags({
      title: 'TesQuirel - AI-Powered Testing Platform | Home',
      description: 'Discover TesQuirel, the intelligent no-code testing platform for modern applications.',
      keywords: 'testing, QA, automation, AI, no-code, testing platform',
      image: 'https://tesquirel.com/assets/images/home-banner.jpg',
      url: 'https://tesquirel.com/home',
      type: 'website'
    });
    this.getTestimonials();
  }

  ngAfterViewInit(): void {

    this.initSwiperWithRetry();
    new Swiper('.client-logo', {
      modules: [Pagination],
      slidesPerView: 4,
      spaceBetween: 30,
      autoplay: true,
      pagination: {
        el: '.client-logo .swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        576: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1200: { slidesPerView: 4 },
      },
      loop: true,
    });

    // setTimeout(() => {
    //   new Swiper('.testimonial-02-active', {
    //     slidesPerView: 2,
    //     spaceBetween: 30,
    //     pagination: {
    //       el: '.testimonial-02-active .swiper-pagination',
    //       clickable: true,
    //     },
    //     breakpoints: {
    //       0: { slidesPerView: 1 },
    //       576: { slidesPerView: 2 },
    //       768: { slidesPerView: 3 },
    //       1200: { slidesPerView: 4 },
    //     },
    //   });
    // }, 5000);
  }

  initSwiperWithRetry(attempt = 1) {
    const swiperEl = document.querySelector('.testimonial-02-active .swiper-wrapper');

    if (!swiperEl) {
      if (attempt <= 10) {
        setTimeout(() => this.initSwiperWithRetry(attempt + 1), 200);
      }
      return;
    }
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

  getTestimonials() {
    this.sharedService.getTestimonialsService().subscribe({
      next: (response: any) => {
        this.testimonials = response.data;
        // let data;
        // for (let i = 0; i <= this.testimonials.length - 1; i++) {
        //   console.log(this.testimonials[i]['testimonial_text']);
        // }
      },
    });
  }
}
