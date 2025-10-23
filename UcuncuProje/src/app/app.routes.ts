import { Routes } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { MenuComponent } from './core/menu/menu.component';
import { HataComponent } from './core/hata/hata.component';
import { authGuard } from './core/guard/auth.guard';

export const routes: Routes = [
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'menu',component:MenuComponent,canActivate :[authGuard] },
    {path:'**',component:HataComponent},
];
