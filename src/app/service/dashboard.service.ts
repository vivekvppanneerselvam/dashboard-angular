import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Headers, RequestOptions}  from '@angular/http';
import {Observable}               from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  _url = '../../assets/json/dummy.json';
  constructor (private http: Http) {}

  getData() : Observable<any> {
    return this.http.get(this._url)
    .pipe(map(this.extractData),catchError(this.handleErrorObservable));
  }

  private extractData(res: Response){
    return res;
  }

  private handleErrorObservable(error: Response | any){
    return Observable.throw(error);
  }
}
