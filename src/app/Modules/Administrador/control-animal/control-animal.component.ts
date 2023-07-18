import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control-animal',
  templateUrl: './control-animal.component.html',
  styleUrls: ['./control-animal.component.css']
})
export class ControlAnimalComponent implements OnInit{
  
  
  constructor(){}


  ngOnInit(): void {
  }


  // TEXT FOR INPUT SEARCH
  public isTextDigit?:string

  // MODAL
  visible: boolean = false;
  showModalAnimales() {
    console.log(this.isTextDigit)
    this.visible = true;
  }


}
