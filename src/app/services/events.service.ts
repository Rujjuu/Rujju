import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private userLoggedIn = new Subject<any>();
  private profileUpdate = new Subject<any>();

  constructor() { }
  

    publishuserLoggedIn(data: any) {
        this.userLoggedIn.next(data);
    }

    getuserLoggedInObservable(): Subject<any> {
        return this.userLoggedIn;
    }

    publishprofileUpdate(data: any) {
      this.profileUpdate.next(data);
    }

    getprofileUpdateObservable(): Subject<any> {
        return this.profileUpdate;
    }
}
