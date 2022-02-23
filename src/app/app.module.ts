import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { StorageService } from './storage.service';
import { ListaComponent } from './lista/lista.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  providers: [StorageService],
  declarations: [AppComponent, HelloComponent, ListaComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

