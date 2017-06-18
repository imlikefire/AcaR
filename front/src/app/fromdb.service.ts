import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FromDBService {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  public loginUser = function(link:string, email:string, password:string): Observable<any> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    const urlSearchParams = new URLSearchParams();
    urlSearchParams.append('email', email);
    urlSearchParams.append('password', password);
    const body = urlSearchParams.toString();
    return this.http.post(link, body, new RequestOptions({headers: headers}))
      .map((response: Response) => <any>response
     ).catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  };

  public registerUser = function(link:string, postObject:Object) : Observable<any> {
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(link, JSON.stringify(postObject),  new RequestOptions({headers: headers}))
      .map((response: Response) => <any>response);
  };

  public getUser = function(link: string,id: number): Observable<any> {
    return this.http.get(link + id)
      .map((response: Response) => <any>response.json()
     ).catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  };

  public getCourses = function(link: string): Observable<any>  {
    return this.http.get(link).map(
      (response) => response.json()
    ).catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  };

  public getSchedule = function(link: string): Observable<any>  {
    return this.http.get(link).map(
      (response) => response.json()
    ).catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  };

  public getBooks = function(): Observable<any>  {
    return this.http.get("./assets/books.json").map(
      (response) => response.json()
    ).catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  };

  public getOnlineDocs = function(): Observable<any>  {
    return this.http.get("./assets/od.json").map(
      (response) => response.json()
    ).catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  };

  public getSoftware = function(): Observable<any>  {
    return this.http.get("./assets/soft.json").map(
      (response) => response.json()
    ).catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  };

  public getProjects = function(): Observable<any>  {
    return this.http.get("./assets/proj.json").map(
      (response) => response.json()
    ).catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  };

  public resetPass = function(link: string, email: string) : Observable<any> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    const urlSearchParams = new URLSearchParams();
    urlSearchParams.append('email', email);
    const body = urlSearchParams.toString();
    return this.http.post(link, body, new RequestOptions({headers: headers}))
      .map((response: Response) => <any>response)
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  };

  public validateAccount = function(link: string, email: string, code: string): Observable<any> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    const urlSearchParams = new URLSearchParams();
    urlSearchParams.append('email', email);
    urlSearchParams.append('code', code);
    const body = urlSearchParams.toString();
    return this.http.post(link, body, new RequestOptions({headers: headers}))
      .map((response: Response) => <any>response)
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  };

}
