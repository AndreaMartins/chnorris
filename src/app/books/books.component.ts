import { Component, OnInit } from '@angular/core';
import { BooksService } from './books.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'books',
  templateUrl: './books.component.html',
  providers: [BooksService]
})

export class BooksComponent implements OnInit {


  titleInput: '';
  booksFound: any[];


  constructor(private booksService: BooksService) { }

  ngOnInit() {

  }

  searchTitle(result) {

    let input = this.titleInput
    console.log (input)
    let bookTitle = input.split(" ").join('+')
    console.log (bookTitle)
    this.booksService.getBook(bookTitle)
      .subscribe((result) => this.booksFound = result)

  }

}
