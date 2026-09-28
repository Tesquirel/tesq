import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, ElementRef, HostBinding, HostListener, Inject, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { RouterLink } from "@angular/router";
import { filter, map, Subject, takeUntil } from 'rxjs';
import { AuthService } from './service/auth.service';
import { UiService } from './service/ui.service';
import Swiper from 'swiper';
import { MetaService } from './service/meta.service';
declare const bootstrap: any;

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  @ViewChild('menuRef', { static: false }) menuRef!: ElementRef;
  title = 'TesQuirel-Website';
  private destroy$ = new Subject<void>();
  currentRoute: string = '';
  isLoggedIn = false;
  @HostBinding('class.light') isLight = false;
  scrollProgress = 0;
  currentYear: any;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.updateProgress();
  }

  constructor(private renderer2: Renderer2, @Inject(DOCUMENT) private document: Document, private router: Router, private activatedRoute: ActivatedRoute, private authService: AuthService, private ui: UiService, private metaService: MetaService) { }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        let route = this.activatedRoute.firstChild;
        while (route?.firstChild) {
          route = route.firstChild;
        }
        return route?.snapshot.data['title'] || '';
      }),
      takeUntil(this.destroy$)
    ).subscribe((title: string) => {
      // this.pageTitle = title;
      this.currentRoute = title;
      if (this.authService.getToken()) {
        this.isLoggedIn = true;
      }
    });
    this.metaService.setDefaultMetaTags();
    this.updateProgress();
  }

  ngAfterViewInit(): void {
    this.ui.init();
    if (this.isMobile()) {
      this.initOffCanvasMenu(this.menuRef.nativeElement);
    }
    this.currentYear = new Date().getFullYear();
  }

  toggleTheme() {
    this.isLight = !this.isLight;

    // Apply theme to body
    document.body.classList.toggle('light', this.isLight);
  }

  updateProgress() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    this.scrollProgress = progress;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  logout() {
    this.authService.logoutService();
    this.router.navigate(['/home']);
  }

  initOffCanvasMenu(root: HTMLElement) {
    const subMenus = root.querySelectorAll('.sub-menu');

    subMenus.forEach(subMenu => {
      const expand = document.createElement('span');
      expand.classList.add('menu-expand');
      expand.innerHTML = '+';

      subMenu.parentElement!.insertBefore(expand, subMenu);
    });

    // Expand logic
    root.querySelectorAll('.menu-expand').forEach(expand => {
      expand.addEventListener('click', () => {
        const parent = expand.parentElement!;
        const submenu = expand.nextElementSibling as HTMLElement;
        const isActive = parent.classList.contains('active');

        this.getSiblings(parent).forEach(sib => {
          sib.classList.remove('active');
          sib.querySelectorAll('.sub-menu').forEach(sm => this.slideUp(sm as HTMLElement));
        });

        if (isActive) {
          parent.classList.remove('active');
          this.slideUp(submenu);
        } else {
          parent.classList.add('active');
          this.slideDown(submenu);
        }
      });
    });

    // ⭐ Close menu on clicking any menu/submenu item
    root.querySelectorAll('li > a, li > span:not(.menu-expand)').forEach(item => {
      item.addEventListener('click', () => {
        this.closeAllMenus(root);
      });
    });
  }

  getSiblings(elem: HTMLElement): HTMLElement[] {
    return Array.from(elem.parentElement!.children)
      .filter(x => x !== elem) as HTMLElement[];
  }

  slideUp(element: HTMLElement) {
    element.style.height = element.scrollHeight + 'px';
    requestAnimationFrame(() => {
      element.style.height = '0px';
    });

    setTimeout(() => element.style.display = 'none', 300);
  }

  slideDown(element: HTMLElement) {
    element.style.display = 'block';
    const height = element.scrollHeight + 'px';
    element.style.height = '0px';
    requestAnimationFrame(() => {
      element.style.height = height;
    });
  }

  closeAllMenus(root: HTMLElement) {
    root.querySelectorAll(".active").forEach(el => el.classList.remove("active"));
    root.querySelectorAll(".sub-menu").forEach(sub => this.slideUp(sub as HTMLElement));
    const offcanvasEl = document.getElementById('offcanvasExample');
    if (offcanvasEl) {
      const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasEl);
      offcanvasInstance?.hide(); // this properly closes the menu
    }
  }

  isMobile(): boolean {
    return window.innerWidth <= 992;   // 992px matches Bootstrap lg breakpoint
  }

}
