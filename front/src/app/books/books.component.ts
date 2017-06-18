import { Component, OnInit } from '@angular/core';
import { FromDBService } from '../fromdb.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  private books;

  constructor( private newService: FromDBService ) { }

  ngOnInit() {
    this.newService.getBooks().subscribe(
      books => {
        this.books=books;
      },
      err => {
        console.log(err);
      }
    )
  }

}
