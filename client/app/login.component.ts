import { Component } from '@angular/core';
import { LoginService } from './providers/login.service';
import { Router } from '@angular/router';
@Component({
    selector:'login',
    template:`<div class="text-center content-center" ><div class="login-form-1">
              		<form id="login-form" class="text-left">
              			<div class="login-form-main-message"></div>
              			<div class="main-login-form">
              				<div class="login-group">
              					<div class="form-group">
              						<label for="lg_username" class="sr-only">Username</label>
              						<input [(ngModel)]="credData.email" type="text" class="form-control" id="lg_username" name="lg_username" placeholder="username">
              					</div>
              					<div class="form-group">
              						<label for="lg_password" class="sr-only">Password</label>
              						<input [(ngModel)]="credData.password" type="password" class="form-control" id="lg_password" name="lg_password" placeholder="password">
              					</div>
              					<div class="form-group login-group-checkbox">
              						<input type="checkbox" id="lg_remember" name="lg_remember">
              						<label for="lg_remember">remember</label>
              					</div>
              				</div>
              				<button type="submit" (click)="login(credData)" class="login-button"><i class="fa fa-chevron-right"></i></button>
              			</div>
              			<div class="etc-login-form">
              				<p>forgot your password? <a href="#">click here</a></p>
              				<p>new user? <a href="#">create new account</a></p>
              			</div>
              		</form>
              	</div></div> `,
    styleUrls: ['node_modules/font-awesome/css/font-awesome.css','app/style/login.css'],
    providers: [LoginService]

})
export class LoginComponent {
    private credData:any = {};

    constructor(private router: Router,private loginService: LoginService) { }

    login(credData: any): void{
      console.log(credData);
      this.loginService.checkAuthentication(credData).then(response => {
      console.log(response);
      this.router.navigate(['/dashboard',response.user._id]);
      });
    }

}
