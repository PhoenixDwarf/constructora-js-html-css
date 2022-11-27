import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectViewRoutingModule } from './project-view-routing.module';
import { ProjectPageComponent } from './project-page/project-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ProjectPageComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    ProjectViewRoutingModule,
    SharedModule
  ]
})
export class ProjectViewModule { }
