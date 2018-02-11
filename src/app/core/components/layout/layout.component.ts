import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit, OnDestroy {
  title: string;
  links: Array<any> = [];
  isFullscreen: boolean;
  isHide: boolean;
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;
  
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.title = 'Responsive App';
    this.loadLinks();
  }

  onFullScreenEvent(event) {
    this.isFullscreen = event;
  }

  onToggleToolbar(event) {
    this.isHide = !this.isHide;
  }
  private loadLinks() {
    this.links = [
      { path: 'home', title: 'Home', icon: 'home' },
      { path: 'about', title: 'About', icon: 'info' },
      { path: 'contact', title: 'Contact', icon: 'mail' }
    ];
  }

  onChangeNav() {

  }

}
