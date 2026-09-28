// src/app/services/ui.service.ts
import { Injectable, Inject } from '@angular/core';
import AOS from 'aos';
import Swiper from 'swiper';
import 'swiper/css';

@Injectable({ providedIn: 'root' })
export class UiService {
    init() {
        // Sticky header
        window.onscroll = () => {
            const header = document.getElementById('header');
            if (!header) return;
            if (window.scrollY > 50) {
                header.classList.add('sticky');
            } else {
                header.classList.remove('sticky');
            }
        };

        // AOS animation
        AOS.init({ duration: 1200, once: true });

        // Swiper sliders
        // new Swiper('.testimonial-active', {
        //     slidesPerView: 1,
        //     spaceBetween: 30,
        //     loop: true,
        // });

        // new Swiper('.team-active', {
        //     slidesPerView: 4,
        //     loop: false,
        //     breakpoints: {
        //         0: { slidesPerView: 1 },
        //         576: { slidesPerView: 2 },
        //         768: { slidesPerView: 3 },
        //     },
        // });
    }
}
