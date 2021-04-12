import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SentenceClassComponent} from './sentence-class/sentence-class.component';

const routes: Routes = [
  {path: 'sentence-class', component: SentenceClassComponent},
  {path: '**', component: SentenceClassComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
