import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { 
   }

   @HostListener ("mouseenter") onmouseenter(){
    this.highlight('#dc3545');
   }

   @HostListener("mouseleave") onmouseleave(){
     this.highlight(null);
   }

   highlight(color : string){
    this.el.nativeElement.style.color = color;
   }
}
