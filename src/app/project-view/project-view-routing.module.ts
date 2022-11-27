import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectPageComponent } from './project-page/project-page.component';

const routes: Routes = [
  {
    path: ':id',
    component: ProjectPageComponent
  },
  {
      path: '**',
      redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectViewRoutingModule { }
