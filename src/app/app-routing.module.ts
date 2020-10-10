import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ItemComponent} from './components/item/item.component';
import {AppComponent} from './app.component';
import {LandingPageComponent} from './components/landing-page/landing-page.component';
import {InfluencersComponent} from './components/influencers/influencers.component';
import {InfluencerComponent} from './components/influencer/influencer.component';
import {ShoppingBagComponent} from './components/shopping-bag/shopping-bag.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'login',
    component: AppComponent
  },
  {
    path: 'sign-up',
    component: AppComponent
  },
  {
    path: 'influencers/:id',
    component: InfluencerComponent
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
    component: ItemComponent
  },
  {
    path: 'category/:id',
    component: LandingPageComponent
  },
  {
    path: 'shopping-bag',
    component: ShoppingBagComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
