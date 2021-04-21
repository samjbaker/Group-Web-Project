import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
   declarations: [
     AppComponent,
   ],
   imports: [
     BrowserModule,
     AppRoutingModule,
     HttpClientModule
   ],
   providers: [ DataService ],
   bootstrap: [AppComponent]
})
export class AppModule { }
