import { Component } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { AuthService } from './common/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'beadando';
  page = 'main';
  loggedInUser?: firebase.default.User | null;


  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.isUserLoggedIn().subscribe(user => {
      console.log(user);
      this.loggedInUser = user;
      localStorage.setItem('user', JSON.stringify(this.loggedInUser));
    }, error => {
      console.error(error);
      localStorage.setItem('user', JSON.stringify('null'));
    });
  
  }


  changePage(selectedPage: string) {
    this.page = selectedPage;
  }

  menuu(sidenav: MatSidenav) {
    sidenav.toggle();
  }

  bezar(event: any, sidenav: MatSidenav) {
    if (event === true) {
      sidenav.close();
    }
  }

  logout(_?: boolean) {
    this.authService.logout().then(() => {
      console.log('Sikerese kilépés');
    }).catch(error => {
      console.error(error);
    });
  }

}
