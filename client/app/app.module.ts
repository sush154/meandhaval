import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }   from './heroes.component';
import { HeroService }   from './hero.service';
import { AppRoutingModule }   from './app.route';
import { HeroDetailComponent } from './hero-detail.component';
import { LoginComponent } from './login.component';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports:      [
                    BrowserModule,
                    FormsModule,
                    AppRoutingModule,
                    HttpModule,
                    NgbModule
                ],
  declarations: [
                    AppComponent,
                    HeroesComponent,
                    HeroDetailComponent,
                    DashboardComponent,
                    LoginComponent
                ],

  providers:    [
                    HeroService
                ],

  bootstrap:    [
                    AppComponent
                ]
})
export class AppModule { }
