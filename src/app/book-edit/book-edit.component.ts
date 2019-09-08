import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookEditComponent implements OnInit {

  //book = {};
  book: any;
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getBook(this.route.snapshot.params['id']);
  }

  getBook(id){
    this.http.get('http://localhost:3000/book/'+id).subscribe( data => {
      this.book = data;
    });
  }

  updateBook(id, data){
    this.http.put('http://localhost:3000/book/'+id, data).subscribe(res =>
      {
        let id = res['_id'];
        this.router.navigate(['http://localhost:3000/book-details', id]);
      }, (err) => {
        console.log(err);
      });
  }

}
