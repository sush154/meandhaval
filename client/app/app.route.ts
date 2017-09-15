import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent }   from './login.component';
import { DashboardComponent }   from './dashboard.component';
const routes: Routes = [
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: 'login',
    component: LoginComponent
  },
  { path: 'dashboard/:id',
    component: DashboardComponent
  }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
