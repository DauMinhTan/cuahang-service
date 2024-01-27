import { Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";


export const routes: Routes = [
  {
    path: "login",
   component: LoginComponent
  },
  {
    path: "base",
    loadChildren: () => import('./pages/layout/layout.routes').then(m => m.routes),
  },
  {
    path:"**",
    component:LoginComponent
  }

];

