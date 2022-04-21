import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../classes/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl = "http://localhost:9090/";
  constructor(private http: HttpClient) { }

  getAllBooks():Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseUrl}book/getbooks`)
  }

  addBook(b: Book) {
    this.http.post<any>(this.baseUrl + "book/addbook", b)
  }
}
