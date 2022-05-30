import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/Navbar/nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideBarComponent } from './Components/SiderBar/side-bar/side-bar.component';
import { FormTableComponent } from './Components/Form/form-table/form-table.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonService } from 'src/services/pokemon.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SideBarComponent,
    FormTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxPaginationModule,
    CommonModule
  ],
  providers: [HttpClientModule, PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
