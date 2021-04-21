import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DesktopComponent } from './desktop/desktop.component';
import { LeftsidebarComponent } from './desktop/leftsidebar/leftsidebar.component';
import { TrendingbarComponent } from './desktop/trendingbar/trendingbar.component';
import { MiddleSectionComponent } from './desktop/middle-section/middle-section.component';
import { NewsFeedComponent } from './desktop/middle-section/news-feed/news-feed.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DesktopComponent,
    LeftsidebarComponent,
    TrendingbarComponent,
    MiddleSectionComponent,
    NewsFeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    DesktopComponent,
    LeftsidebarComponent,
    TrendingbarComponent,
    MiddleSectionComponent,
    NewsFeedComponent
  ]
})
export class AppModule { }
