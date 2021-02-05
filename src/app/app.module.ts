import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
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
import {EditorComponent} from './components/editor/editor.component';
import {ModalConfirmDeleteComponent} from './components/modal/modal-confirm-delete/modal-confirm-delete.component';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {ColorPickerModule} from 'ngx-color-picker';
import {ClickOutsideDirective} from './directives/ClickOutsideDirective';
import {ShoppingBagItemComponent} from './components/shopping-bag-item/shopping-bag-item.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {ForgotPasswordComponent} from './components/forgot-password/forgot-password.component';
import {ProductUploadComponent} from './components/product-upload/product-upload.component';
import {NgxSpinnerModule} from 'ngx-spinner';

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
    OrderRequestComponent,
    ClickOutsideDirective,
    OrderRequestComponent,
    EditorComponent,
    ModalConfirmDeleteComponent,
    ShoppingBagItemComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    ProductUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ColorPickerModule,
    NgxSpinnerModule,
    BsDropdownModule.forRoot()
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
