import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './main/home/home.component';
import { LogosComponent } from './main/logos/logos.component';
import { PopularComponent } from './main/popular/popular.component';
import { ValueComponent } from './main/value/value.component';
import { ContactComponent } from './main/contact/contact.component';
import { FooterComponent } from './main/footer/footer.component';
import { HeaderComponent } from './header/header/header.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogosComponent,
    PopularComponent,
    ValueComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
