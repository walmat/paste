import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class QueueService {

    user; // guard against signed out users

    constructor(private auth: AuthService,
                private db: AngularFireDatabase) {
        this.user = this.auth.afAuth.authState.map(u => u.uid);
    }

    push() {
        return this.db.list('/queue').push(this.user);
    }

}
