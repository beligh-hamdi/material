import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {
  channels: Array<any> = [];
  channelModel: any;
  channel: any ;

  constructor() { }

  ngOnInit() {
    this.channels = [
      {
        id: 1,
        type: 'iframe',
        src: 'http://webtvonlive.com/embed/?p=1007066',
        name: 'ICI RDI',
        logo: 'http://webtvonlive.com/wp-content/uploads/RDI-webtvonlive-com.jpg'
      },
      {
        id: 2,
        type: 'iframe',
        src: 'http://webtvonlive.com/embed/?p=1007072',
        name: 'Canal Savoir',
        logo: 'http://webtvonlive.com/wp-content/uploads/Canal-Savoir-webtvonlive-com.jpg'
      },
      {
        id: 3,
        type: 'html5',
        src: 'blob:http://webtvonlive.com/90829575-cdfd-4411-abb2-6d39579ff49d',
        name: 'Francophonie 24',
        logo: 'http://webtvonlive.com/wp-content/uploads/Francophonie-24-webtvonlive-com.jpg'
      }
    ];
  }

  onChannelModelChange() {
    this.channel = this.channels.find(channel => channel.name === this.channelModel);
  }
}
