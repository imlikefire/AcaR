import { Component, OnInit } from '@angular/core';
import { FromDBService } from '../fromdb.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  private books: Object;
  private booksLink: string = "http://localhost:5991/resurse/getAll";

  constructor( private newService: FromDBService ) { }

  ngOnInit() {
    this.newService.getResources(this.booksLink).subscribe(
      resources => {
        this.books=resources;
      },
      err => {
        console.log(err);
      }
    )
  }

}
