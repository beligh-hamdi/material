import { Directive, HostListener, Output, EventEmitter, OnInit } from '@angular/core';

import * as screenfull from 'screenfull';

@Directive({
  selector: '[appToggleFullScreen]'
})
export class ToggleFullScreenDirective implements OnInit {
  @Output() isFullscreen: EventEmitter<any> = new EventEmitter();
  
  ngOnInit() {
    screenfull.onchange(() => {
      this.isFullscreen.emit(screenfull.isFullscreen);
    });
  }

  @HostListener('click') onClick() {
    if (screenfull.enabled) {
      screenfull.toggle();
    }
  }
}
