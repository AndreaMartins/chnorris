import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BooksService {



  constructor(private http: Http) { }

  getBook(bookTitle): Observable <any[]> {
    const data = bookTitle;
    console.log (data)
    return this.http.get('http://openlibrary.org/search.json?title='+ data)
      .map((res: Response) => res.json())
      .map((res) => res.docs);
  }

}
