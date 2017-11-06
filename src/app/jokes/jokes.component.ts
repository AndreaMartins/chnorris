import { Component, OnInit } from '@angular/core';
import { JokesService } from './jokes.service';

@Component({
  selector: 'jokes',
  template: `
    <h3> Jokes </h3>
    <div class="input-group">
      <input type="text" class="form-control" placeholder="Search for..." aria-label="Search for...">
      <span class="input-group-btn">
        <button (click)="searchTitle()"> Get Random Joke </button>
      </span>
    </div>
    <pre>{{ joke | json }} </pre>
  `,
  providers: [JokesService]
})
export class JokesComponent implements OnInit {

  joke: any;
  constructor(private jokes: JokesService) { }

  ngOnInit() {}

  searchTitle() {
    this.jokes.getRandom()
      .subscribe((joke) => this.joke = joke);
  }
}
