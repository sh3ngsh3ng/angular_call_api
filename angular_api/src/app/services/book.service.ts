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

  getBookById(id: number|undefined):Observable<Book> {
    return this.http.get<any>(this.baseUrl + "book/getbooks/" + id)
  }

  updateBook(id: number|undefined, book: Book):Observable<Object> {
    return this.http.put<any>(this.baseUrl + "book/updatebook/" + id, book)
  }

  deleteBook(id: number | undefined):Observable<Object> {
    console.log("book service delete book called")
    return this.http.delete<any>(this.baseUrl + "book/deletebook/" + id)
  }


}
