import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ItemAddComponent implements OnInit {

  item: any = {};

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  saveItem() {
    this.item.updated_date = Date.now();
    this.http.post('/item', this.item)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/item-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
