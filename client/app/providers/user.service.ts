import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Router } from '@angular/router';

@Injectable()
export class UserService {

    private getUserUrl: any = "http://localhost:3030/user/"

    constructor(private router: Router,private http: Http) { }
    private headers = new Headers({'Content-Type': 'application/json'});

    private handleError(error: any): Promise<any> {
         console.error('An error occurred', error); // for demo purposes only
         if(error.status === 401){
           this.router.navigate(['/login']);
         }
         return Promise.reject(error.message || error);
   }


    getUser(userId : String): Promise<any> {
      this.getUserUrl = this.getUserUrl + userId;
      return this.http
        .get(this.getUserUrl,{withCredentials: true})
        .toPromise()
        .then((res) =>{console.log(res); return res.json().data})
        .catch(this.handleError.bind(this));
    }

}
