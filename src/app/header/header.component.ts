import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  navbarfixed:boolean =false;

@HostListener('window:scroll',['$event']) onscroll(){
 if(window.scrollY > 100){
   this.navbarfixed =true;
 }
 else{
   this.navbarfixed = false;
 }
}
constructor() { }

ngOnInit(): void {
}

}
