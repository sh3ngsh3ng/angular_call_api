import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/classes/book';
import { Router } from '@angular/router';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: Book[] | undefined;
  newBook!: Book;
  
  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe((data:Book[])=>{
      this.books=data;
    })
  }

  updateBook(id: number | undefined) {
    this.router.navigate(['update-book', id])
  }

  deleteBook(id: number| undefined) {
    console.log("delete book called")
    this.bookService.deleteBook(id).subscribe((data) => console.log("data deleted"))
    
  }

}
