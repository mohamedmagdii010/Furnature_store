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
  
    if (this.titlestyle === 'none'|| this.titlestyle === "display:none" ){

      console.log("ddd", this.titlestyle)
        this.titlestyle = "display:grid"
      }else{
      
        console.log("ssssss", this.titlestyle)
        this.titlestyle = "display:none";
      
      }
      
  
  }

  hey(){
    if (this.titlestyle1 === 'none'|| this.titlestyle1 === "display:none" ){

      console.log("ddd", this.titlestyle1)
        this.titlestyle1 = "display:grid"
      }else{
      
        console.log("ssssss", this.titlestyle1)
        this.titlestyle1 = "display:none";
      
      }

  }

  bay(){

    if (this.titlestyle2 === 'none'|| this.titlestyle2 === "display:none" ){

      console.log("ddd", this.titlestyle2)
        this.titlestyle2 = "display:grid"
      }else{
      
        console.log("ssssss", this.titlestyle2)
        this.titlestyle2 = "display:none";
      
      }
  }
  bay2(){

    if (this.titlestyle3 === 'none'|| this.titlestyle3 === "display:none" ){

      console.log("ddd", this.titlestyle3)
        this.titlestyle3 = "display:grid"
      }else{
      
        console.log("ssssss", this.titlestyle3)
        this.titlestyle3 = "display:none";
      
      }
  }
  
  
  }

