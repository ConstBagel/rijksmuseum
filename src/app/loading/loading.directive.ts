import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[loading]'
})
export class LoadingDirective {
  private loadingElement: HTMLImageElement | null;
  private isLoaded: boolean;
  constructor(
    private element: ElementRef,
    private renderer: Renderer2) { 
      const path = require('./loading.gif');
      this.loadingElement = document.createElement('img');
      this.loadingElement.src = path;
      this.loadingElement.alt = 'Loading...';
      this.loadingElement.style.cssText = `
          width: 100%;
          height: 100%;
      `;
      this.renderer.appendChild(this.element.nativeElement, this.loadingElement);
    }

  @Input()
  set loading(value: boolean) {
    value ?
      this.renderer.setStyle(this.loadingElement, 'display', 'none')
    :
      this.renderer.setStyle(this.loadingElement, 'display', 'block');
  }
}
