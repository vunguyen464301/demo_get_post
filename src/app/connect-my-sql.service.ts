import { Injectable } from '@angular/core';
import {URL_CONNECTMYSQL, lop} from './Data';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectMySQLService {
  URL =URL_CONNECTMYSQL;
  //  headers= new Headers({'Content-Type': 'application/json'});
  // body=JSON.stringify({name:'Khoa Pham Training'});
  constructor(
    private _httpClient:HttpClient
  ) { }
  read_lop(){
    return this._httpClient.get(`${this.URL}/read_lop.php`);
  }
  insert_lop(lop:lop){
    return this._httpClient.post(`http://localhost/siteDemo/insert_lop.php`,lop);
  }

}
