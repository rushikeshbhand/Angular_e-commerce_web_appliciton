import { Component, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements AfterViewInit {
  slideIndex = 1;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.showSlides(this.slideIndex);
  }

  plusSlides(n: number) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n: number) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n: number) {
    let i;
    const slides = this.el.nativeElement.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
    const dots = this.el.nativeElement.getElementsByClassName("dot") as HTMLCollectionOf<HTMLElement>;
    if (n > slides.length) { this.slideIndex = 1; }
    if (n < 1) { this.slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
      this.renderer.setStyle(slides[i], 'display', 'none');
    }
    for (i = 0; i < dots.length; i++) {
      this.renderer.removeClass(dots[i], 'active');
    }
    this.renderer.setStyle(slides[this.slideIndex - 1], 'display', 'block');
    this.renderer.addClass(dots[this.slideIndex - 1], 'active');
  }
}
