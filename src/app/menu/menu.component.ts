import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-menu',
  imports: [ CommonModule, FormsModule ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  id:number = 1;
  name:string = 'José';
  imageFileName:string = 'images/inazuma1.jpg';
  divSquareEnabled:boolean = true;
  btnSquareText:string = 'Esconder';
  categories:string[] = ['Filme', 'Musica', 'Geografia', 'Jogos Eletrônicos', 'Cultura Geek'];
  selectedCategory:string = '';
  colorList:string[] = ['blue', 'red', 'yellow', 'green', 'orange'];
  selectedClass:string = 'green';
  classGreenName:string = 'green';
  classBlueName:string = 'blue';
  condition:boolean = true;
  
  showData() {
    alert('id: ' + this.id.toString() + ' nome: ' + this.name);
  }

  changeImage() {
    // === : compara valor e tipo da variavel
    if(this.imageFileName === 'images/inazuma1.jpg') {
      this.imageFileName = 'images/inazuma2.jpg';
    }
    else {
      this.imageFileName = 'images/inazuma1.jpg';
    }
  }

  showHideDivSquare():void {
    if(this.divSquareEnabled) {
      this.divSquareEnabled = false;
      this.btnSquareText = 'Exibir';
    }
    else {
      this.divSquareEnabled = true;
      this.btnSquareText = 'Esconder';
    }
  }

  selectCategory(category:string):void {
    this.selectedCategory = category;
  }

  changeClass():void {
    if(this.selectedClass == this.classGreenName) {
      this.selectedClass = this.classBlueName;
    }
    else {
      this.selectedClass = this.classGreenName;      
    }
  }

  changeCondition():void {
    this.condition = !this.condition;
  }
}
