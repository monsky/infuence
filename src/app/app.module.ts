import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ItemComponent} from './components/item/item.component';
import {LandingPageComponent} from './components/landing-page/landing-page.component';
import {LoginComponent} from './components/login/login.component';
import {AppService} from './app.service';
import {HttpClientModule} from '@angular/common/http';
import {InfluencersComponent} from './components/influencers/influencers.component';
import {InfluencerComponent} from './components/influencer/influencer.component';
import {ShoppingBagComponent} from './components/shopping-bag/shopping-bag.component';
import {InfluencerProfileComponent} from './components/influencer-profile/influencer-profile.component';
import {AdminComponent} from './components/admin/admin.component';
import {LocalStorageService} from './local-storage-service';
import {FormsModule} from '@angular/forms';
import {InfluencerGuard} from './influencer-guard';
import {UserGuard} from './user-guard';
import {AdminGuard} from './admin-guard';
import {PrintShopContractComponent} from './components/print-shop-contract/print-shop-contract.component';
import {InfluencerContractComponent} from './components/influencer-contract/influencer-contract.component';
import {OrderStatusComponent} from './components/order-status/order-status.component';
import {OrderRequestComponent} from './components/order-request/order-request.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    ItemComponent,
    LoginComponent,
    InfluencersComponent,
    InfluencerComponent,
    ShoppingBagComponent,
    InfluencerProfileComponent,
    AdminComponent,
    PrintShopContractComponent,
    InfluencerContractComponent,
    OrderStatusComponent,
    OrderRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AppService,
    LocalStorageService,
    InfluencerGuard,
    UserGuard,
    AdminGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
