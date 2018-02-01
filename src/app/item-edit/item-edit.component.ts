import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ItemEditComponent implements OnInit {

  item: any = {};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getItem(this.route.snapshot.params['id']);
  }

  getItem(id) {
    this.http.get('/item/'+id).subscribe(data => {
      this.item = data;
    });
  }

  updateItem(id) {
    this.item.updated_date = Date.now();
    this.http.put('/item/'+id, this.item)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/item-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
