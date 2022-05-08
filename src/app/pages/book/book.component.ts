import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { serv } from '../../common/constants/constants';
import { Router } from '@angular/router';



@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})





export class BookComponent implements OnInit {
  selectedCar : number =1;
   nev:any;
   ms:any;

  
  @Output() selectedPage: EventEmitter <string> = new EventEmitter();
  

 
 
  

  
  serv=serv;

  constructor(private router: Router) {
    
   }

  ngOnInit(): void {


  }
  send(){
    this.router.navigateByUrl('/main');
  }

}
