import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ItemComponent} from './components/item/item.component';
import {AppComponent} from './app.component';
import {LandingPageComponent} from './components/landing-page/landing-page.component';
import {InfluencersComponent} from './components/influencers/influencers.component';
import {InfluencerComponent} from './components/influencer/influencer.component';
import {ShoppingBagComponent} from './components/shopping-bag/shopping-bag.component';
import {InfluencerProfileComponent} from './components/influencer-profile/influencer-profile.component';
import {EditorComponent} from './components/editor/editor.component';
import {AdminComponent} from './components/admin/admin.component';
import {ProfileComponent} from './components/profile/profile.component';
import {InfluencerGuard} from './influencer-guard';
import {UserGuard} from './user-guard';
import {AdminGuard} from './admin-guard';
import {LoginComponent} from './components/login/login.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {ForgotPasswordComponent} from './components/forgot-password/forgot-password.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'influencers/:id',
    component: InfluencerComponent
  },
  {
    path: 'influencers/private/:id',
    canActivate: [InfluencerGuard],
    component: InfluencerProfileComponent
  },
  {
    path: 'item/:id',
    component: ItemComponent
  },
  // {
  //   path: ':editorFlag',
  //   component: LandingPageComponent
  // },
  {
    path: 'influencers',
    component: InfluencersComponent
  },
  {
    path: 'editor',
    component: EditorComponent
  },
  {
    path: 'category/:id',
    component: LandingPageComponent
  },
  {
    path: 'shopping-bag',
    component: ShoppingBagComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [ AdminGuard ]
  },
  {
    path: 'profile',
    canActivate: [UserGuard],
    component: ProfileComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
