import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UiProvider {

  enable:boolean
  styleObj:object

  constructor(public http: HttpClient) {
    console.log('Hello UiProvider Provider');
    this.enable = false
  }

  scrollContentMargin() {
    this.styleObj = {'margin-top' : '56px', 'margin-bottom' : '56px'}
    
    // let scrollContent:HTMLElement = document.getElementsByClassName("scroll-content")[0] as HTMLElement
    // scrollContent.style.marginTop = "56px";
    // console.log(scrollContent)
  }

}
