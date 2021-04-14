import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { VoteComponent } from './vote/vote.component';
import { MovieTileComponent } from './movie-tile/movie-tile.component';


@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    VoteComponent,
    MovieTileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
