import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  bere = 'name';
  x = 'vvv';

 constructor() {
  
   
    }
    beri(){


      if(this.bere === 'name'){

        this.bere = "display:block"
      }else{

      }
    }
    xx(){
      this.bere = "display:none"
    }

    iii(){

      window.scrollTo(0,1000)
    }
  } 

