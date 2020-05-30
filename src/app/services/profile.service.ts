import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ProfileService {
  private username:string;
  private REST_API_SERVER = "https://api.github.com/users/";
  private clientid = "136dd4e369989c9854ca";
  private clientsecret="1dd2c5823bcc8bf0f8e81a9b19e763022992c5c0";
  //private REST_API_GIT_REPOS ="https://api.github.com/users/";
  constructor(private http: HttpClient) {
    console.log("Service is now ready");
    this.username = "narasimhareddyprostack"
   }
   
   
  getProfileInfo(){
    return this.http.get( this.REST_API_SERVER + this.username +  "?client_id="+ this.clientid + "&client_secret=" + this.clientsecret);
   }
   getProfileRepos(){
     return this.http.get(this.REST_API_SERVER+ this.username + "/repos?client_id="+ this.clientid + "&client_secret=" + this.clientsecret);
   }

   searchProfile(username:string){
     this.username = username;
   }
}

