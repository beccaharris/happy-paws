import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }         from './app.component';
import { HeaderComponent }      from './header/header.component';
import { HomeComponent }        from './home/home.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  }
]

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ],
  providers: []
})
export class AppRoutingModule { }