import { Component } from '@angular/core';
import { Observable } from 'rxjs';

/* This component will render buttons & create html file to count state.
 */
@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
})
export class MyCounterComponent {
  count$: Observable<number>;

  constructor() {
    // TODO: Conect `this.count$` stream to the current store `count` state
  }

  increment() {
    //TODO: Dispatch an increment action
  }

  decrement() {
    //TODO: Dispatch a decrement action
  }

  reset() {
    //TODO: Dispatch a reset action
  }
}
