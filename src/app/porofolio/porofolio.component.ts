import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-porofolio',
  templateUrl: './porofolio.component.html',
  styleUrls: ['./porofolio.component.css']
})
export class PorofolioComponent {
 titlestyle = 'none';
 
constructor(){

}
titi(){

 if(this.titlestyle === 'none'){

  this.titlestyle = 'display:block'
 }else{

  this.titlestyle = 'display:none'

 }

} 


}


