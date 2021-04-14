import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-tile',
  templateUrl: './movie-tile.component.html',
  styleUrls: ['./movie-tile.component.css']
})
export class MovieTileComponent implements OnInit {
  theRoom = {
    title: 'The Room',
    year: 2004,
    stars: 4.2,
    rating: 'R'
  };

	constructor() { }

  ngOnInit(): void {
  }
}
