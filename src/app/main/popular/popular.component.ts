import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { Navigation } from "swiper";
import swiper from 'swiper';

SwiperCore.use([Navigation]);
@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    const mySwiper = new swiper('.popular__container', {
      spaceBetween:32,
      grabCursor:true,
      centeredSlides:true,
      slidesPerView: 'auto',
      loop:true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  ngOnInit(): void {
  }

}
