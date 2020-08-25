import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdownDirective]'
})
export class DropdownDirectiveDirective {

@HostBinding('class.open') detectClick = false;
  constructor(private elRef : ElementRef, private renderer : Renderer2) { }
ngOnInit(){

}

// @HostListener('click') onClick(){
// //this.renderer.addClass(this.elRef.nativeElement , 'open');
//      this.detectClick = !this.detectClick;
// } 

@HostListener('document:click', ['$event']) onOutClick(){

  // this.renderer.removeClass(this.elRef.nativeElement , 'open')
  // console.log('outside click');}
  debugger;
  this.detectClick = this.elRef.nativeElement.contains(event.target) ? !this.detectClick : false;
}
}