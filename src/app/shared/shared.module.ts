import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [SharedComponent, SidebarComponent, HeaderComponent],
  imports: [CommonModule, SharedRoutingModule],
})
export class SharedModule {}
