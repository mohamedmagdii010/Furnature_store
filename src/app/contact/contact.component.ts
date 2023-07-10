import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  
  template: `
  <button ejs-progressbutton content='Spin Left'></button>`
})

export class ContactComponent {
  titlestyle = 'none';
  titlestyle1 = 'nonee';
  titlestyle2 = 'nonee';
  titlestyle3 = 'nonee';


 
  constructor(){
  
  }
  titi(){
  
   if(this.titlestyle === 'none'){
  
    this.titlestyle = 'display:block'
   }else{
  
    this.titlestyle = 'display:none'
  
   }
  
  }

  hey(){
    if(this.titlestyle1 === 'nonee'){
  
      this.titlestyle1 = 'display:block'
     }else{
    
      this.titlestyle1 = 'display:none'
    
     }

  }

  bay(){

    if(this.titlestyle2 === 'nonee'){
  
      this.titlestyle2 = 'display:block'
     }else{
    
      this.titlestyle2 = 'display:none'
    
     }
  }
  bay2(){

    if(this.titlestyle3 === 'nonee'){
  
      this.titlestyle3 = 'display:block'
     }else{
    
      this.titlestyle3 = 'display:none'
    
     }
  }
  
  
  }

