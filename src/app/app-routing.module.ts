import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './desktop/about/about.component';
import { DesktopComponent } from './desktop/desktop.component';
import { MiddleSectionComponent } from './desktop/middle-section/middle-section.component';

const routes: Routes = [
  { path: '',
    component: DesktopComponent,
    children: [ {path: 'about', component: AboutComponent},
                {path: '', component: MiddleSectionComponent},]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
