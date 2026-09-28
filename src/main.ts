import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import 'swiper/css';
import 'swiper/css/pagination';   // optional — only if you use pagination
import 'swiper/css/navigation';   // optional — only if you use navigation

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
