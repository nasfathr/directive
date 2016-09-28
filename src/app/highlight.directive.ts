import { Directive, ElementRef, Renderer, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @Input('highlight')
  backgroundColor:string;

  @Input('color')
  textColor:string;

  currentColor:string = "#face00"

  constructor(private el:ElementRef, private renderer:Renderer) { 
      
   
  }

  highlight(color:string){
    this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color)
    if(this.textColor){
      this.renderer.setElementStyle(this.el.nativeElement, 'Color', color);
    }

    if(this.textColor && color == null)
      this.renderer.setElementStyle(this.el.nativeElement, 'Color', color);  
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.highlight(this.backgroundColor || this.currentColor)  ; 
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.highlight(null)
  }
   
}
