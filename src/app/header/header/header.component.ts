import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const header = document.getElementById('header');
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;
    if (window.scrollY >= 50) {
      header?.classList.add('scroll-header');
    } else {
      header?.classList.remove('scroll-header');
    }
  
   
    
      sections.forEach(current => {
        // Convertir a HTMLElement
        const section = current as HTMLElement;
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 58;
        const sectionId = section.getAttribute('id');
        const navItem = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
    
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          if (navItem) {
            navItem.classList.add('active-link');
          }
        } else {
          if (navItem) {
            navItem.classList.remove('active-link');
          }
        }
      });
    }
  }




  


  
