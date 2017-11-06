import { Component, OnInit } from '@angular/core';
import { BooksService } from './books.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'books',
  template: `
    <h3> Books </h3>
    <div class="input-group">
      <input [(ngModel)]="titleInput" id= "titleInput" type="text" class="form-control">
      <span class="input-group-btn">
        <button (click)="searchTitle()"> Search Title </button>
      </span>
      <p> Hello {{titleInput}}! </p>
    </div>
    <ul>
    <li *ngFor="let book of booksFound">
         {{ book.title }}
    </li>
</ul>


  `,
  providers: [BooksService]
})

export class BooksComponent implements OnInit {

  bookTitle: string;
  titleInput: '';
  booksFound: any[];


  constructor(private booksService: BooksService) { }

  ngOnInit() {

    let input = this.titleInput
    let bookTitle = input.split(" ").join('+')

  }

  searchTitle(result) {

    let input = this.titleInput
    console.log (input)
    let bookTitle = input.split(" ").join('+')
    console.log (bookTitle)
    this.booksService.getBook(this.bookTitle)
      .subscribe((result) => this.booksFound = result)

  }

}
