import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, StoreModule.forRoot({ count: counterReducer })],
  declarations: [AppComponent, MyCounterComponent],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
