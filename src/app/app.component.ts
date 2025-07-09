import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MenuComponent } from "./menu/menu.component";
import { Test1Component } from "./test1/test1.component";

@Component({
  standalone : true,
  selector: 'app-root',
  imports: [RouterModule, MenuComponent, Test1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularTrivia';
}
