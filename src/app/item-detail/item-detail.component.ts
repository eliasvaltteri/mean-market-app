import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ItemDetailComponent implements OnInit {

  item = {};

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getItemDetail(this.route.snapshot.params['id']);
  }

  getItemDetail(id) {
    this.http.get('/item/'+id).subscribe(data => {
      this.item = data;
    });
  }

  deleteItem(id) {
    this.http.delete('/item/'+id)
      .subscribe(res => {
          this.router.navigate(['/items']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
