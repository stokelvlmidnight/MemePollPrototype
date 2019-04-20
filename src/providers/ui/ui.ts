import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UiProvider {

  enable: boolean = false

  constructor(public http: HttpClient) {
    console.log('Hello UiProvider Provider');
  }

  scrollContentMargin() {
    let scrollContent = document.querySelector('scroll-content')
    // scrollContent[0].style.marginTop = "56px";
    console.log(scrollContent)

    // document.getElementsByClassName("example").style.margin-bottom = '56px'
  }

}
