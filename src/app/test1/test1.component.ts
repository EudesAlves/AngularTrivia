import { Component } from '@angular/core';

@Component({
  selector: 'app-test1',
  imports: [],
  templateUrl: './test1.component.html',
  styleUrl: './test1.component.css'
})
export class Test1Component {
  name:string = 'Jose';
  age:number = 34;
  imageFileName = 'images/inazuma1.jpg';
  

  showData() {
    alert('Nome: '+this.name +' '+'Idade: '+this.age);
  }

  changeImage() {
    if(this.imageFileName === 'images/inazuma1.jpg') {
      this.imageFileName = 'images/inazuma2.jpg';
    }
    else {
      this.imageFileName = 'images/inazuma1.jpg';
    }
  }
}
