import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BooksService {

  bookTitle: string;

  constructor(private http: Http) { }

  getBook( bookTitle: string): Observable <any[]> {
    const data = this.bookTitle;
    console.log (data)
    return this.http.get('http://openlibrary.org/search.json?title='+ data)
      .map((res: Response) => res.json())
      .map((res) => res.docs);
  }

}
