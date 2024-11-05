import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appSlider]'
})
export class SliderDirective {

  constructor(private _ElementRef:ElementRef) { }
  @HostListener('click')
  imageChange() {

    var prev:any = document.getElementById('preview');
    var src:any = this._ElementRef.nativeElement.src;

    prev.src = src;


    var imageSlide = document.getElementsByClassName("img-slide");
    for (var i = 0; i < imageSlide.length; i++){
      imageSlide[i].classList.remove('active');
    }
    this._ElementRef.nativeElement.parentElement.classList.add('active');


  }

  // imageChange() {
  //   // Access the native element directly
  //   var nativeElement = this._ElementRef.nativeElement;

  //   // Get the src and innerHTML properties
  //   var src: string = nativeElement.src;
  //   var textTitle: string = nativeElement.innerHTML;

  //   // Get the preview elements
  //   var prev = document.getElementById('preview') as HTMLImageElement;
  //   var titleTxt = document.getElementById('textTitle') as HTMLElement;

  //   if (prev && titleTxt) {
  //     console.log(src);

  //     // Update the src and innerHTML properties
  //     prev.src = src;
  //     titleTxt.innerHTML = textTitle;

  //     // Remove the 'active' class from all image slides
  //     var imageSlide = document.getElementsByClassName("img-slide");
  //     for (var i = 0; i < imageSlide.length; i++) {
  //       imageSlide[i].classList.remove('active');
  //     }

  //     // Add the 'active' class to the parent element
  //     nativeElement.parentElement.classList.add('active');
  //   } else {
  //     console.error('Preview elements not found');
  //   }
  // }





}
