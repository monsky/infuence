import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ItemComponent} from './components/item/item.component';
import {LandingPageComponent} from './components/landing-page/landing-page.component';
import {LoginComponent} from './components/login/login.component';
import {AppService} from './app.service';
import {HttpClientModule} from '@angular/common/http';
import {InfluencersComponent} from './components/influencers/influencers.component';
import {InfluencerComponent} from './components/influencer/influencer.component';
import {ShoppingBagComponent} from './components/shopping-bag/shopping-bag.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    ItemComponent,
    LoginComponent,
    InfluencersComponent,
    InfluencerComponent,
    ShoppingBagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }