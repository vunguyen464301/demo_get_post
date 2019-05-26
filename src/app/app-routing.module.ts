import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),HttpClientModule,
    FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
