import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {
  items: any[];

  constructor(private storage: StorageService) {}

  ngOnInit() {
    this.storage.getItems$().subscribe((element) => {
      this.items = element;
      console.log(this.items);
    });
  }
}
