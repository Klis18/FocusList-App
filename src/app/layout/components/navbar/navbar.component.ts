import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  imports: [
    MatIconModule
  ],
  templateUrl: './navbar.component.html',
  styles: `
    .background-nav{
      background-color:rgb(134, 112, 138)
    }
  `
})
export class NavbarComponent {

}
