import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {

  

  constructor(private renderer2:Renderer2) {}

  ngOnInit(): void {
  }

  change():void{
    const accordionItems = document.querySelectorAll('.value__accordion-item');
    accordionItems.forEach(item => {
      const accordionHeader = item.querySelector('.value__accordion-header')
      accordionHeader?.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-open')
        toggleItem(item)
        if (openItem && openItem!== item) {
           toggleItem(openItem)
        }
      })
    });

    const toggleItem = (item:any) => {
      const accordionContent = item.querySelector('.value__accordion-content')
      if (item.classList.contains('accordion-open')) {
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
      }else{
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
      }
    }
  }

}
