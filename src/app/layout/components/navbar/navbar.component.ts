import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [
    MatIconModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navbar.component.html',
  styles: `
    .background-nav{
      background-color:rgb(134, 112, 138)
    }

    .background-active{
      background-color:rgb(164, 134, 170)
    }
  `
})
export class NavbarComponent {

}
