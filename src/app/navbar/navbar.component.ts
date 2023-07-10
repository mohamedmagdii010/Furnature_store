import { style } from '@angular/animations';
import { Component, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
 
})
export class NavbarComponent {
  public massage = '';
num = 0 ;
titlestyle= 'block';
openmenu = 'none';
show = "ahmed" ;
hidee = "nav"
shows = "hide"
inpoot = "jjj"


 



loow(){
 
if (this.openmenu === 'none'|| this.openmenu === "display:none" ){

console.log("ddd", this.openmenu)
  this.openmenu = "display:grid"
}else{

  console.log("sssss", this.openmenu)
  this.openmenu = "display:none";

}


}

 
hide(){

  this.openmenu = "width:0;display:none"
}





input(){

  if (this.show === "ahmed"){

     this.hidee = "display:none",this.show = "display:block"
  }else{

    this.hidee = "display:block",this.show = "display:none"
  }
}

inpuut(){

if(this.inpoot === "jjj" ||this.inpoot === "display:none" ){

  this.inpoot = "display:block"
}else{

  this.inpoot = "display:none"
}
}
  
}


    
  
 

 
  


