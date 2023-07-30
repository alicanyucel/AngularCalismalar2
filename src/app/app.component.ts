import { Component, ElementRef, ViewChild } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template:`
  <h1>Merhaba</h1>
  <h2>
  {{name}} <!-- typescirpt dosyasından veri yakalama -->
  </h2>
  <h3>
    <!-- typesciprt dosyasından değer elde etme-->
    <div [innerText]="name"></div>
  </h3>
<!--<input  id="name" (keyup)="getValue()" type="text" [value]="name"/><br><br>-->
<!--<input  id="name" (keyup)="getValueEvent($event)" type="text" [value]="name"/><br><br>-->
<!--viewchild ile yakalama
<input  #name id="name" (keyup)="getViewChild()" />-->
<!-- ng model ile yakalma ve veri gönderme
-->
<input id="name" [(ngModel)]="ad">
<button (click)="getNgModelValue()">Tıkla</button>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // hastagle işaraetledik ve test değişkenne atdık
  @ViewChild("name") test:ElementRef<HTMLInputElement>;
// ngmodel ile veri yakalama sadece input select textarea gibi içerisine veri girebileceğimiz taglarda işlem yapar

  title = 'angular_egitim';
  //name:string| undefined |  Date | number | null // çoklu değişken tipi tanımlama
  age:number=10;
  name:string="Ali Can Yücel";
  ad:string="ali can";
  constructor(){
    console.log(this.age);
  }
  getNgModelValue()
  {
    console.log(this.ad);
  }
  // viewchild ile yakalama
  getViewChild(){
    console.log(this.test.nativeElement.value);
  }
  // değer yakalama
  getValueEvent(event:any)
  {
    console.log(event.target.value);
  }
  getValue(){
    // keyup tuşa basıldığı anada yakalar
   let element:any=document.getElementById("name");
   console.log(element.value);
  }
  // event binding
  metot(){
    alert("çalıştım");
  }
  // two data binding

}
