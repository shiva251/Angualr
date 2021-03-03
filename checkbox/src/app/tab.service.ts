import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TbData } from './tbData';

@Injectable({
  providedIn: 'root'
})
export class TabService {

  private tabUrl ="http://localhost:3000/tabs";
  private checkUrl ="http://localhost:3000/checkValue";

  constructor(private http:HttpClient) { }

  getTabvalue():Observable<TbData[]> {
    return this.http.get<TbData[]>(this.tabUrl); 
  }

  postTabvalue(tdData:TbData) {
    return this.http.post(this.tabUrl, tdData);
  }


  //checkvalue Api

  getCheckvalue():Observable<TbData[]> {
    return this.http.get<TbData[]>(this.checkUrl); 
  }

  postCheckvalue(tdData:TbData) {
    return this.http.post(this.checkUrl, tdData);
  }
}
