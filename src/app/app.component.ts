import { Component } from '@angular/core';
import { URL_CONNECTMYSQL ,lop,sinhvien} from './Data';
import { ConnectMySQLService} from './connect-my-sql.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';
  lop:lop;
  list_lop;
  constructor(
    private _connectAPI :ConnectMySQLService
  ){
    // this._connectAPI.read_lop().subscribe((d:lop[])=>{
    //   this.list_lop=d;
    // });
    // this.lop =new lop();

  }
  btn_save(){

   // console.log(this.lop)
   this._connectAPI.insert_lop({id_lop:null,tenlop:"anhvu"}).subscribe()

  }
  btn_delete(){

  }
  btn_update(){

  }
  
}
