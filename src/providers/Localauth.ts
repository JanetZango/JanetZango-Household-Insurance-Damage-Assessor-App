
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';


@Injectable()
export class LocalAuthProvider {
    private _storage: Storage | null = null;
    ////variables
    isLoggedIn!: Boolean
    user: any;
    constructor(private storage: Storage) {
    
     }

    async CreateDB() {
        // If using, define drivers here: await this.storage.defineDriver(/*...*/);
        const storage = await this.storage.create();
        this._storage = storage;
      }

    ///Using storage plugin to save data when the persons logins on the app
    LogInUsers(user:any) {
        return this.storage.set('user', user).then((data) => {
            console.log(data)
            this.isLoggedIn = true;
            this.user = user
        })
    }

    // Users profile is deleted when they logout 
    LogOut() {
        return this.storage.remove('user').then(() => {
            this.isLoggedIn = false
            this.user = null
        })
    }
    // get all the user who are login
    GetLoggedInUser() {
        return this.storage.get('user')
    }
}