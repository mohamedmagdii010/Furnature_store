
import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HelpingComponent } from './helping/helping.component';
import { HomeComponent } from './home/home.component';
import { NOTfoundpageComponent } from './notfoundpage/notfoundpage.component';
import { PorofolioComponent } from './porofolio/porofolio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProducttttsComponent } from './productttts/productttts.component';





const routes: Routes = [

  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'portofolio',component:PorofolioComponent},
  {path:'helping',component:HelpingComponent},
  {path:'Productttts',component:ProducttttsComponent},
  {path:'**',component:NOTfoundpageComponent},
  {path:'navbar',component:NavbarComponent}


 


  
  /* {path:'contact',redirectTo:'about',pathMatch:'full'}  type conatct from id to turn to page about   */

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
    
    
    