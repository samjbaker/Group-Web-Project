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
import { AboutComponent } from './desktop/about/about.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    DesktopComponent,
    LeftsidebarComponent,
    TrendingbarComponent,
    MiddleSectionComponent,
    NewsFeedComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    DesktopComponent,
    LeftsidebarComponent,
    TrendingbarComponent,
    MiddleSectionComponent,
    NewsFeedComponent,
    AboutComponent
  ]
})
export class AppModule { }
