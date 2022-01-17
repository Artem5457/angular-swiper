import { Component } from '@angular/core';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SwiperOptions } from 'swiper';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-swiper';
  config: SwiperOptions = {
    spaceBetween: 24,
    slidesPerView: 3,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    observer: true,
    observeParents: true,
  }

  onSwiper(swiper) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
}
