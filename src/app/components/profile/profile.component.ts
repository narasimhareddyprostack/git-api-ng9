import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileData:any;
  repos:any;
  username:string;
  constructor(private profileService : ProfileService) { }
  
  findProfile(){
    this.profileService.searchProfile(this.username);
    this.profileService.getProfileInfo().subscribe(( data : any[]) =>{
      console.log(data);
      this.profileData = data;
      
    });
    this.profileService.getProfileRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    });
  }
  ngOnInit() {
   
  }
}
