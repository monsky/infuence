import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {AppModel} from './app.model';

@Injectable()
export class InfluencerGuard implements CanActivate {


  constructor(private route: Router,
              private appModel: AppModel) {
  }


  public canActivate(activatedRoute: ActivatedRouteSnapshot, snapshot: RouterStateSnapshot): boolean | Promise<boolean> {
    if (this.appModel.user.id === activatedRoute.params.id) {
      return true;
    }
    this.route.navigate(['login']).catch(error => console.log(error))
    return false;
  }


}
