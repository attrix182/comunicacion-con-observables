import { Component, VERSION } from '@angular/core';
import { StorageService } from './storage.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  item = '';

  constructor(private storage: StorageService) {}

  add() {
    this.storage.agregarItem(this.item);
  }
}
