import { Component, OnInit } from '@angular/core';
import { JokesService } from './jokes.service';

@Component({
  selector: 'jokes',
  template: `
    <h3> Jokes </h3>
    <button (click)="getRandomJoke()"> Get Random Joke </button>
    <pre>{{ joke | json }} </pre>
  `,
  providers: [JokesService]
})
export class JokesComponent implements OnInit {

  joke: any;
  constructor(private jokes: JokesService) { }

  ngOnInit() {}

  getRandomJoke() {
    this.jokes.getRandom()
      .subscribe((joke) => this.joke = joke);
  }
}
