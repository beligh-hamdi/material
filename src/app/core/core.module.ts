import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LayoutComponent } from './components/layout/layout.component';

import { LayoutModule } from '@angular/cdk/layout';



import {
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatToolbarModule,
  MatSelectModule,
  MatSidenavModule,
  MatProgressBarModule,
} from '@angular/material';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { ToggleFullScreenDirective } from './directives/toggle-full-screen.directive';

import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarModule } from '@ngx-loading-bar/core';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatToolbarModule,
    MatSelectModule,
    MatSidenavModule,

    LayoutModule
  ],
  declarations: [PageNotFoundComponent, LayoutComponent, SidenavComponent, MenuComponent, ToggleFullScreenDirective],
  exports: [
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
    // LoadingBarModule.forRoot()

    MatProgressBarModule,

    PageNotFoundComponent,
    LayoutComponent
  ]
})
export class CoreModule { }
