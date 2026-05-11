import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { BouquetsComponent } from './pages/bouquets/bouquets.component';
import { ChipsModule } from 'primeng/chips';
import { LucideAngularModule, Home, User, Settings, Search, Heart, ShoppingCart, Menu, X, Store, CircleDollarSign, Flower, Star } from 'lucide-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    BouquetsComponent,
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    CardModule,
    MenubarModule,
    ChipsModule,
    LucideAngularModule.pick({ Home, User, Settings, Search, Heart, ShoppingCart, Menu, X, Store, CircleDollarSign, Flower, Star }),
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
