import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private swUpdate: SwUpdate, public loader: LoadingBarService) {
  }

  ngOnInit() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        if (confirm('New version available. Load new version?')) {
          window.location.reload();
        }
      });
    }
  }

}
