import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ItemComponent implements OnInit {

  //items: any;
  items = [
    {
      title: 'Esine',
      seller: 'Jari',
      description: 'Tämmöstä ois tarjolla'
    },
    {
      title: 'Jutska',
      seller: 'Tero',
      description: 'Myyntiin ku ei enää käyttöä'
    },
    {
      title: 'Mariskooli',
      seller: 'Marjukka',
      description: 'Harvinainen tästä halvalla'
    },
    {
      title: 'Esine',
      seller: 'Jari',
      description: 'Tämmöstä ois tarjolla'
    }
  ];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    /*
    this.http.get('/item').subscribe(data => {
      console.log(data);
      this.items = data;
    });
    */
  }

}
