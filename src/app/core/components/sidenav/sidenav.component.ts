import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent implements OnInit {
  @Input() links;

  constructor() { }

  ngOnInit() {
  }

}
