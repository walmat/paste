import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class SplashService {

    userID;
    user;

    constructor(private auth: AuthService,
                private db: AngularFireDatabase) {
        this.auth.afAuth.authState.subscribe(res => {
            if (res && res.uid) {
                this.user = res.displayName;
                this.userID = res.uid;
            } else {
                this.user = null;
            }
        });
    }

    add() {
        if (this.user == null) {
            // nav to login page
        } else {
            return this.db.list('queue').set(this.userID, this.user);
        }
    }

    getAll() {
        return this.db.list('/queue');
    }
}
