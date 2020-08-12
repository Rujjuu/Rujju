import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';

import { tap } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
    })
};
@Injectable({
    providedIn: 'root'
})
export class CommonService {
    ApiUrl = "http://rujjuu.com/api/";
    constructor(private http: HttpClient, private nativehttp: HTTP) { }

    getCall(name, params) {
        return this.http.get(this.ApiUrl+name+params, httpOptions );        
    }

    postCall(name, params){    
        console.log('param',params);
          
        return this.http.post(this.ApiUrl+name,params, httpOptions);
    }
    
}
