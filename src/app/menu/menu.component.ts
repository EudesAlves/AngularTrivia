import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  id = 1;
  name = 'José';
  imageFileName = 'inazuma1.jpg';

  showData() {
    alert('id: ' + this.id.toString() + ' nome: ' + this.name);
  }

  changeImage() {
    if(this.imageFileName === 'inazuma1.jpg') {
      this.imageFileName = 'inazuma2.jpg';
    }
    else {
      this.imageFileName = 'inazuma1.jpg';
    }
  }

}
