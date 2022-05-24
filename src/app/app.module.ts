import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoHeroComponent } from './components/info-hero/info-hero.component';
import { CardHeroComponent } from './components/card-hero/card-hero.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ViewSuperHeroComponent } from './view/view-super-hero/view-super-hero.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InfoHeroComponent,
    CardHeroComponent,
    HeaderComponent,
    FooterComponent,
    ViewSuperHeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
