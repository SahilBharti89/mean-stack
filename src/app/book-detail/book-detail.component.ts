import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookDetailComponent implements OnInit {

  //book = {};
  book: any;
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getBookDetail(this.route.snapshot.params['id']);
  }

  getBookDetail(id){
    this.http.get('http://localhost:3000/book/'+id).subscribe(data => {
      this.book = data;
    });
  }

  deleteBook(id){
    this.http.delete('http://localhost:3000/book'+id).subscribe(res =>
      {
        this.router.navigate(['http://localhost:3000/books']);
      }, (err) => {
        console.log(err);
      });
  }

}
