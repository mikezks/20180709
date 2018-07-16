import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromApp from '../+state/reducers/app.reducer';
import { getCount } from '../+state/selectors/app.selectors';
import { IncreaseByAction } from '../+state/actions/app.actions';
import { RootState } from '../+state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  count$: Observable<number>;

  constructor(private store: Store<RootState>) {
  }

  ngOnInit() {
    this.count$ = this.store.pipe(select(getCount));
  }

  countUp() {
    this.store.dispatch(new IncreaseByAction(15));
  }
}
