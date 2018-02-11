import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SharedModule } from '../shared/shared.module';
import { TvComponent } from './tv/tv.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ],
  declarations: [HomeComponent, AboutComponent, ContactComponent, TvComponent]
})
export class PagesModule { }
