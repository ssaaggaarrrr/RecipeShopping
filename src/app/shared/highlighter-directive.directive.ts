import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlighterDirective]'
})
export class HighlighterDirectiveDirective implements OnInit{
@HostBinding('style.backgroundColor') backgroundColor : string = 'transparent';
  constructor(private elRef : ElementRef, private renderer : Renderer2) { 

  }

  ngOnInit(){
    
  }
 @HostListener('mouseenter') mouseover(event : Event){
   //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'green')
   this.backgroundColor = 'green';
 }

 @HostListener('mouseleave') mouseleave(event : Event){
  // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent')
  this.backgroundColor = 'transparent';
}

}
