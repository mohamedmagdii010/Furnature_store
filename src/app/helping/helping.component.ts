import { Component } from '@angular/core';

@Component({
  selector: 'app-helping',
  templateUrl: './helping.component.html',
  styleUrls: ['./helping.component.css']
})
export class HelpingComponent {
  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  photo1 = "one"
  photo2 = "two"
  
  constructor(){


  }

  prev(){
    
    if(this.photo1 === "one"){

      this.photo1 = "display:none"
    }

  }
  next(){
    
  }

}
