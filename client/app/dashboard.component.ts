import { Component,OnInit,Input } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { UserService } from './providers/user.service';
import { Router } from '@angular/router';
@Component({
    selector:'my-dashboard',
    template:`<div class="container">
              	<div class="row">
              		<div style="width: 100%">

                          <div class="card hovercard">
                              <div class="cardheader">

                              </div>
                              <div class="avatar">
                                  <img alt="" src="http://lorempixel.com/100/100/people/9/">
                              </div>
                              <div class="info">
                                  <div class="title">
                                      <a target="_blank" href="http://scripteden.com/">{{userData?.firstName}} {{userData?.lastName}}</a>
                                  </div>
                              </div>

                          </div>

                  </div>

              	</div>
              </div>`,
   providers: [UserService],
   styleUrls: ['node_modules/font-awesome/css/font-awesome.css','app/style/dashboard.css']

})
export class DashboardComponent implements OnInit {

  private userId : String;
  private userData : any;

  constructor(private userService: UserService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.forEach((params:Params) => {this.userId = params['id'];});
    this.userService.getUser(this.userId).then((response)=>{this.userData = response.user;console.log(this.userData);});

  }

}
