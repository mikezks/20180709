import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { SwUpdate, SwPush } from '@angular/service-worker';

@Component({
  selector: 'app-root', // <app-root></app-root>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hallo Welt';

  constructor(
    private snackBar: MatSnackBar,
    private swUpdate: SwUpdate,
    private swPush: SwPush) {

    this.setupUpdates();
    this.setupPush();
  }

  setupUpdates() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(u => {
          this.swUpdate.activateUpdate().then(e => {
              this.snackBar.open('App updated -- please reload!', 'OK');
          });
      });
      this.swUpdate.checkForUpdate();
    }
  }

  setupPush() {
    if (this.swPush.isEnabled) {
      const key = 'BBc7Bb5f5CRJp7cx19kPHz5d9S5jFSzogxEj2V1C44WuhTwd78tnXLPzOxGe0bUmKJUTAMemSKFzyQjSBN_-XyE';

      this.swPush.requestSubscription({
          serverPublicKey: key
      })
      .then(sub => {
          console.debug('Push Subscription', JSON.stringify(sub) );
      },
      err => {
          console.error('error registering for push', err);
      });

      this.swPush.messages.subscribe(push => {
          console.debug('received push message', push);
      });
    }
  }
}
