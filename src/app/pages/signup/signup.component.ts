import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../common/auth.service';
import {User} from '../../common/models/User';
import { UserService } from '../../common/services/user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    rePassword: new FormControl(''),
    name: new FormGroup({
      fullname: new FormControl(''),
      username: new FormControl('')
      
    })
  });

  constructor(private router: Router, private authService: AuthService,private userService: UserService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.signUpForm.value);
    this.authService.signup(this.signUpForm.get('email')?.value, this.signUpForm.get('password')?.value).then(cred => {
      console.log(cred);
       const user: User = {
        id: cred.user?.uid as string,
        email: this.signUpForm.get('email')?.value,
    
        name: {
          fullname: this.signUpForm.get('name.fullname')?.value,
          username: this.signUpForm.get('name.username')?.value
        }
      };
      this.userService.create(user).then(_=>{
        console.log('Felhasználót addatk hozzá');
        this.router.navigateByUrl('/main');
      }).catch(error =>{console.error(error);})
    }).catch(error => {
      console.error(error);
    });
  }


  logout(_?: boolean) {
    this.authService.logout().then(() => {
      console.log('Logged out successfully.');
    }).catch(error => {
      console.error(error);
    });
  }

}
