import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {
  @Input('appHighLight') appHightLight = ''
  constructor(private el: ElementRef) { // cannot receive updated input
    // el.nativeElement.style.backgroundColor = this.appHightLight
  }

  ngOnInit() : void {
    this.el.nativeElement.style.backgroundColor = this.appHightLight
  }
}
