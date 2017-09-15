import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {

    private loginUrl = "http://localhost:3030/user/login";
    constructor(private http: Http) { }
    private headers = new Headers({'Content-Type': 'application/json'});

     private handleError(error: any): Promise<any> {
         console.error('An error occurred', error); // for demo purposes only
         return Promise.reject(error.message || error);
   }


    checkAuthentication(credData : any): Promise<any> {
      return this.http
        .post(this.loginUrl, JSON.stringify(credData), {headers: this.headers,withCredentials: true})
        .toPromise()
        .then((res) =>{console.log(res); return res.json().data})
        .catch(this.handleError);
    }

}
