import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'flopbuster';
  movieTitle = 'Games';
  bestMovieEver = false;

  // Add Data Elements
  favFlop = {
  	title: 'Batman and Robin',
  	yearReleased: 1982,
  	rating: 'PG-13',
  	imdbLink: 'http://imbd.com/2312',
  	soundTrack: {
      spotifyLink: 'http://imbd.com/2312'
  	}
  }

  onCheckout(event: any) {
    console.log('Checkout', event.target);
  }

  titleHover(message: string) {
    console.log(message + " hovered");
  }

  yearClicked(event: any) {
    console.log("Year Clicked: " + event.target.innertHtml);
    console.log("Year Clicked: " + event.target.innerHTML);
  }

  ratingClicked(event: any) {
    console.log("Rating Clicked: "+ event.target.innerHTML);
  }

  selectedIndex: number = -1;

  onVoteClick(index: number) {
    if(this.isSelected(index)) {
      this.selectedIndex = -1;
    } else {
      this.selectedIndex = index;
    }
  }

  isSelected(index: number) {
    return this.selectedIndex === index;
  }

  anySelected() {
    return this.selectedIndex !== -1;
  }

  getButtonTextFor(index: number) {
    if(this.selectedIndex === index) {
      return 'UnVote';
    } else {
      return 'Vote';
    }
  }
}
