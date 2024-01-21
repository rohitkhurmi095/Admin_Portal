import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { LayoutComponent } from './components/layout/layout.component';
import { Error404Component } from './components/error-404/error-404.component';
import { FeatherIconComponent } from './components/feather-icon/feather-icon.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    BreadcrumbComponent,
    LayoutComponent,
    Error404Component,
    FeatherIconComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[FeatherIconComponent]
})
export class SharedModule { }
