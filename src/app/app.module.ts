import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { NOTfoundpageComponent } from './notfoundpage/notfoundpage.component';
import { PorofolioComponent } from './porofolio/porofolio.component';
import { HelpingComponent } from './helping/helping.component';
import { ProducttttsComponent } from './productttts/productttts.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    NOTfoundpageComponent,
    PorofolioComponent,
    ProducttttsComponent,
    NavbarComponent,
    FooterComponent,
    HelpingComponent,
    ProducttttsComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
