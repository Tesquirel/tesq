import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, NgZone } from '@angular/core';
import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

@Component({
  selector: 'tsq-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements AfterViewInit, OnDestroy {

  @ViewChild('swiperEl') swiperEl!: ElementRef;
  @ViewChild('paginationEl') paginationEl!: ElementRef;
  @ViewChild('nextEl') nextEl!: ElementRef;
  @ViewChild('prevEl') prevEl!: ElementRef;

  private swiperInstance: Swiper | null = null;

  constructor(private ngZone: NgZone) {}

  ngAfterViewInit(): void {
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        this.initializeSwiper();
      }, 100);
    });
  }

  private initializeSwiper(): void {
    if (!this.swiperEl?.nativeElement) return;

    this.swiperInstance = new Swiper(this.swiperEl.nativeElement, {
      modules: [Autoplay, Navigation, Pagination],

      // Core settings
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 800,
      loop: true,
      loopAdditionalSlides: 1,    // ensures smooth loop transition

      // Autoplay
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },

      // Pagination – using direct element reference
      pagination: {
        el: this.paginationEl.nativeElement,
        clickable: true,
        dynamicBullets: false,
      },

      // Navigation – using direct element references
      navigation: {
        nextEl: this.nextEl.nativeElement,
        prevEl: this.prevEl.nativeElement,
      },

      // Performance & stability
      observer: true,
      observeParents: true,

      // Touch behavior
      grabCursor: true,
      resistance: true,
      resistanceRatio: 0.85,
      touchStartPreventDefault: false,
      touchMoveStopPropagation: true,

      // Event callbacks to keep pagination in sync
      on: {
        init: (swiper: Swiper) => {
          swiper.pagination?.update();
        },
        slideChange: (swiper: Swiper) => {
          swiper.pagination?.update();
        },
        loopFix: (swiper: Swiper) => {
          swiper.pagination?.update();
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.swiperInstance?.destroy(true, true);
    this.swiperInstance = null;
  }
}